import { afterEach, describe, expect, it, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { router } from "./index";
import LoginPage from "@/pages/login/ui/LoginPage.vue";
import ElementDetailsPage from "@/pages/element-details/ui/ElementDetailsPage.vue";

vi.mock("@/features/auth", () => ({
  AuthForm: defineComponent({
    emits: ["success"],
    template: '<button @click="$emit(\'success\')">Войти</button>',
  }),
}));

vi.mock("@/widgets/component-view", () => ({
  ComponentView: defineComponent({
    props: ["component"],
    template: '<div data-test="component-view">{{ component.id }}</div>',
  }),
}));

const wrappers: ReturnType<typeof mount>[] = [];
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
});

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: router.options.routes,
  });
}

describe("routing", () => {
  it("resolves named routes and unknown paths", () => {
    const testRouter = createTestRouter();
    expect(testRouter.resolve({ name: "catalog" }).path).toBe("/");
    expect(testRouter.resolve({ name: "login" }).path).toBe("/login");
    expect(testRouter.resolve({ name: "element-details", params: { id: "missing" } }).path)
      .toBe("/elements/missing");
    expect(testRouter.resolve("/unknown-page").name).toBe("not-found");
  });

  it("returns to the catalog after successful login", async () => {
    const testRouter = createTestRouter();
    await testRouter.push("/login");
    const wrapper = mount(LoginPage, { global: { plugins: [testRouter] } });
    wrappers.push(wrapper);

    await wrapper.get("button").trigger("click");
    await flushPromises();

    expect(testRouter.currentRoute.value.name).toBe("catalog");
    expect(testRouter.currentRoute.value.path).toBe("/");
  });

  it("shows a catalog link for an unknown ID and recovers when the ID changes", async () => {
    const { UIComponentList } = await import("@/entities/component");
    const testRouter = createTestRouter();
    await testRouter.push("/elements/unknown-component-id");
    const wrapper = mount(ElementDetailsPage, { global: { plugins: [testRouter] } });
    wrappers.push(wrapper);

    expect(wrapper.text()).toContain("Компонент не найден");
    expect(wrapper.get("a").attributes("href")).toBe("/");
    await wrapper.get("a").trigger("click");
    await flushPromises();
    expect(testRouter.currentRoute.value.name).toBe("catalog");

    await testRouter.push({ name: "element-details", params: { id: UIComponentList[0]!.id } });
    await flushPromises();
    expect(wrapper.find("h1").exists()).toBe(false);
    expect(wrapper.get('[data-test="component-view"]').text()).toBe(UIComponentList[0]!.id);
  });
});
