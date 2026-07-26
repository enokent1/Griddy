import { describe, expect, test } from "vitest";
import { validateUsername, validatePassword } from "./validators.ts";

describe("validateUsername", () => {
  describe("valid usernames", () => {
    const validUsernames = [
      "abc123",
      "qwertyuio",
      "abcdefghijklmnopqrst",
      "abcdef",
    ];

    test.each(validUsernames)("accepts valid username %s", (username) => {
      const result = validateUsername(username);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });
  });

  describe("invalid usernames", () => {
    const invalidUsernames = [
      ["1UserName", "Логин не должен начинаться с цифры."],
      ["jfnfhfmdlsjchfyrhdbcjd", "Логин должен быть от 6 до 20 символов."],
      ["djfnd", "Логин должен быть от 6 до 20 символов."],
      ["username@", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username!", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username#", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username$", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username%", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username^", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username&", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username*", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username()", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["username.", "Логин не должен содержать спецсимволы: !@#$%^&*()."],
      ["тестLogin", "Логин должен содержать только латиницу."],
      ["user name", "Логин не должен содержать пробелов."],
    ];

    test.each(invalidUsernames)(
      "rejects username %s with error %s",
      (username, error) => {
        const result = validateUsername(username);
        expect(result.isValid).toBe(false);
        expect(result.error).toBe(error);
      },
    );
  });
});

describe("validatePassword", () => {
  describe("valid passwords", () => {
    const validPasswords = [
      "Abc123!@",
      "Password1!",
      "A1!bcdefg",
      "Abc123!@#$%^&*()",
      "A1!bcdefghijklmnopqrstuvwxyz",
    ];

    test.each(validPasswords)("accept valid password %s", (password) => {
      const result = validatePassword(password);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });
  });

  describe("invalid passwords", () => {
    const invalidPasswords = [
      ["", "Пароль должен быть от 8 до 32 символов."],
      ["A1!b", "Пароль должен быть от 8 до 32 символов."],
      ["A1!Fgbcdefghijklmnopqrstuvwxyz123", "Пароль должен быть от 8 до 32 символов."],
      ["abc123!@#", "Пароль должен содержать хотя бы одну заглавную букву."],
      ["AVC123!@#", "Пароль должен содержать хотя бы одну строчную букву."],
      ["Abcdefgh!", "Пароль должен содержать хотя бы одну цифру."],
      ["ABCdef123", "Пароль должен содержать хотя бы один спецсимвол: !@#$%^&*()."],
      ["Abcde 123!", "Пароль не должен содержать пробелов."],
      ["Пароль123!", "Пароль должен содержать только латиницу."]
    ];

    test.each(invalidPasswords)(
      "rejects password %s with error %s",
      (password, error) => {
        const result = validatePassword(password);
        expect(result.isValid).toBe(false);
        expect(result.error).toBe(error);
      },
    );
  });
});
