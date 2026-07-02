import type { LoginPayload, LoginResponse, ErrorResponse, LoginResult } from "../model/types";

const LOGIN_URL: string = "https://dummyjson.com/auth/login"

export const authenticateUser = async (payload: LoginPayload): Promise<LoginResult> => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
        expiresInMins: 30,
      }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Ошибка: ${response.status}`);
    }

    const result: LoginResponse = await response.json();
    return { success: true, userData: result } as LoginResult;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    } as LoginResult;
  }
};