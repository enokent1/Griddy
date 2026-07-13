import type {
  LoginPayload,
  LoginResponse,
  ErrorResponse,
  ErrorMessage,
  LoginResult,
} from "../model/types";
import { API_URL } from "@/shared/config/api";

const LOGIN_URL: string = `${API_URL}/auth/login`;

export const authenticateUser = async (
  payload: LoginPayload,
): Promise<LoginResult> => {
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
      const errorData: ErrorMessage = await response.json();
      return {
        success: false,
        error: errorData.message,
        status: response.status,
      };
    }

    const result: LoginResponse = await response.json();
    return { success: true, userData: result } as LoginResult;
  } catch (error) {
    return {
      success: false,
      error: "Unknown error",
      status: 0,
    } as LoginResult;
  }
};
