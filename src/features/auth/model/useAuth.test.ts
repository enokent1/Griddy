import { describe, expect, test, vi, afterEach } from "vitest";
import type { LoginResult, LoginPayload } from "./types";

vi.mock("../api/login", () => ({
  authenticateUser: vi.fn(),
}));

import { useAuth } from "./useAuth";
import { authenticateUser } from "../api/login";

const mockAuth = vi.mocked(authenticateUser);
const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

const loginPayload: LoginPayload = {
  username: "username",
  password: "password",
};

afterEach(() => {
  vi.resetAllMocks();
});

describe("useAuth", () => {
  describe("login success", () => {
    const loginResult: LoginResult = {
      success: true,
      userData: {
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        id: 1,
        username: "username",
        email: "email",
        firstName: "firstName",
        lastName: "lastName",
        gender: "gender",
        image: "image",
      },
    };

    test("should return true", async () => {
      mockAuth.mockResolvedValue(loginResult);

      const { login, user, error } = useAuth();
      const result = await login(loginPayload);
      expect(result).toBe(true);
      expect(authenticateUser).toHaveBeenCalledWith(loginPayload);
      expect(user.value).toEqual(loginResult.userData);
      expect(error.value).toBeNull();
    });

    test("sets isLoading to true while login is pending", async () => {
      let resolvePromise!: (
        value: Awaited<ReturnType<typeof authenticateUser>>,
      ) => void;

      vi.mocked(authenticateUser).mockImplementation(() => {
        return new Promise((resolve) => {
          resolvePromise = resolve;
        });
      });

      const { login, isLoading } = useAuth();

      const loginPromise = login(loginPayload);
      expect(isLoading.value).toBe(true);

      resolvePromise(loginResult);

      await loginPromise;
      expect(isLoading.value).toBe(false);
    });

    test("set data to localStorage", async () => {
      mockAuth.mockResolvedValue(loginResult);

      const { login } = useAuth();
      const result = await login(loginPayload);

      expect(result).toBe(true);
      expect(setItemSpy).toHaveBeenCalledWith(
        "user",
        JSON.stringify(loginResult.userData),
      );
    });
  });

  describe("login failure", () => {
    test.each([
      [400, "Некорректные данные"],
      [401, "Неверный логин или пароль"],
      [429, "Слишком много попыток. Попробуйте позже"],
      [500, "Ошибка сервера"],
      [0, "Неизвестная ошибка"],
    ])("should return false with %s status", async (status, errorMessage) => {
      const loginResult: LoginResult = {
        success: false,
        status: status,
      };

      mockAuth.mockResolvedValue(loginResult);

      const { login, user, error } = useAuth();
      const result = await login(loginPayload);

      expect(result).toBe(false);
      expect(error.value).toBe(errorMessage);
      expect(authenticateUser).toHaveBeenCalledTimes(1);
      expect(user.value).toBeNull();
      expect(setItemSpy).not.toHaveBeenCalled();
    });
  });
});
