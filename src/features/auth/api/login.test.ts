import { describe, expect, test, vi, afterEach } from "vitest";
import { authenticateUser } from "./login";
import type { LoginPayload, LoginResult } from "../model/types";

const loginPayload: LoginPayload = {
  username: "username",
  password: "password",
};

const mockFetch = vi.spyOn(globalThis, "fetch");

afterEach(() => {
  vi.restoreAllMocks();
});

describe("authenticateUser", () => {
  test("successful response from the server", async () => {
    const mockResponse = {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
      id: 1,
      username: "username",
      email: "email",
      firstName: "firstName",
      lastName: "lastName",
      gender: "gender",
      image: "image",
    };

    mockFetch.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockResponse),
    } as unknown as Response);

    const result: LoginResult = await authenticateUser(loginPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.userData).toEqual(mockResponse);
    }
  });

  test.each([400, 404, 500])("unsuccessful HTTP status %s", async (status) => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: status,
    } as unknown as Response);

    const result = await authenticateUser(loginPayload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.status).toBe(status);
    }
  });

  test("network error/exception", async () => {
    mockFetch.mockRejectedValue(new Error("Network error"));

    const result = await authenticateUser(loginPayload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.status).toBe(0);
    }
  });
});
