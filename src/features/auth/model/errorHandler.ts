import type { ErrorResponse } from "./types";

export const errorHandler = (status: number): string => {
  if (status === 400) return "Некорректные данные";
  if (status === 401) return "Неверный логин или пароль";
  if (status === 429) return "Слишком много попыток. Попробуйте позже";
  if (status === 500) return "Ошибка сервера";

  return "Неизвестная ошибка";
};
