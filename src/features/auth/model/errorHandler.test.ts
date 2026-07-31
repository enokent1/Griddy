import { describe, expect, test } from "vitest";
import { errorHandler } from "./errorHandler";

describe("errorHandler", () => {
  const errors = [
    { error: 400, errorMessage: "Некорректные данные" },
    { error: 401, errorMessage: "Неверный логин или пароль" },
    { error: 429, errorMessage: "Слишком много попыток. Попробуйте позже" },
    { error: 500, errorMessage: "Ошибка сервера" },
    { error: 0, errorMessage: "Неизвестная ошибка" },
  ];

  test.each(errors)("should fail with %s error", ({ error, errorMessage }) => {
    const result = errorHandler(error);
    expect(result).toBe(errorMessage);
  });
});

