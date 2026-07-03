export type LoginPayload = {
  username: string;
  password: string;
};

export type ValidationResult = {
  isValid: boolean;
  error?: string;
};

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export type User = Omit<LoginResponse, "accessToken" | "refreshToken">;

export type LoginResult =
  | { success: true; userData: LoginResponse }
  | { success: false; error: string };

export interface ErrorResponse {
  message?: string;
}
