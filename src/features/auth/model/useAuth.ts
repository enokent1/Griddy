import { ref } from "vue";
import { authenticateUser } from "../api/login";
import type { LoginPayload, User } from "./types";
import { errorHandler } from "./errorHandler";

export function useAuth() {
  const user = ref<User | null>(null);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const login = async (payload: LoginPayload): Promise<boolean> => {
    isLoading.value = true;
    error.value = null;

    try {
      const res = await authenticateUser(payload);
      if (!res.success) {
        error.value = errorHandler(res.status);
        return false;
      }

      user.value = res.userData;
      localStorage.setItem("user", JSON.stringify(res.userData));
      return true;
    } catch (err) {
      error.value = "Что-то пошло не так";
      console.error(err);
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return { login, user, isLoading, error };
}
