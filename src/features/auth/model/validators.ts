import type { ValidationResult } from "./types";

export const validateUsername = (username: string): ValidationResult => {
  if (/\d/.test(username.charAt(0)))
    return { 
      isValid: false, 
      error: "Логин не должен начинаться с цифры." 
    };
  if (username.length < 6 || username.length > 16)
    return { 
      isValid: false, 
      error: "Логин должен быть от 6 до 16 символов." 
    };
  if (/[!@#$%^&*()]/.test(username))
    return {
      isValid: false,
      error: "Логин не должен содержать спецсимволы: !@#$%^&*()."
    };
  if (/[а-яё]/i.test(username))
    return { 
      isValid: false, 
      error: "Логин должен содержать только латиницу." 
    };
  if (/\s/.test(username))
    return { 
      isValid: false, 
      error: "Логин не должен содержать пробелов." 
    };

  return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (password.length < 8 || password.length > 32)
    return { 
      isValid: false, 
      error: "Пароль должен быть от 8 до 32 символов." 
    };
  if (!/[A-Z]/.test(password))
    return {
      isValid: false,
      error: "Пароль должен содержать хотя бы одну заглавную букву."
    };
  if (!/[a-z]/.test(password))
    return {
      isValid: false,
      error: "Пароль должен содержать хотя бы одну строчную букву."
    };
  if (!/\d/.test(password))
    return {
      isValid: false,
      error: "Пароль должен содержать хотя бы одну цифру."
    };
  if (!/[!@#$%^&*()]/.test(password))
    return {
      isValid: false,
      error: "Пароль должен содержать хотя бы один спецсимвол: !@#$%^&*()."
    };
  if (/\s/.test(password))
    return { 
      isValid: false, 
      error: "Пароль не должен содержать пробелов." 
    };
  if (/[а-яё]/i.test(password))
    return {
      isValid: false,
      error: "Пароль должен содержать только латиницу."
    };

  return { isValid: true };
};
