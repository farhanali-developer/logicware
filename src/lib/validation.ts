import { isValidPhoneNumber } from "libphonenumber-js";

export const NAME_PATTERN = /^[A-Za-z][A-Za-z'\-. ]{0,59}$/;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Strips characters that are never valid in a person's name, for live-typing filters. */
export function sanitizeNameInput(value: string): string {
  return value.replace(/[^A-Za-z'\-. ]/g, "");
}

export function validateName(value: string, fieldLabel: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return `${fieldLabel} is required.`;
  if (!NAME_PATTERN.test(trimmed)) {
    return `${fieldLabel} can only contain letters, spaces, apostrophes, and hyphens.`;
  }
  return null;
}

export function validateEmail(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "Email address is required.";
  if (trimmed.length > 254) return "Email address is too long.";
  if (!EMAIL_PATTERN.test(trimmed)) return "Enter a valid email address.";
  return null;
}

/**
 * `value` is expected to be the E.164 string produced by react-phone-number-input
 * (e.g. "+13025550101"), which already encodes the selected country.
 */
export function validatePhone(value: string, required: boolean): string | null {
  const trimmed = value.trim();
  if (!trimmed) return required ? "Phone number is required." : null;
  if (!isValidPhoneNumber(trimmed)) {
    return "Enter a valid phone number for the selected country.";
  }
  return null;
}

export function validateRequiredText(
  value: string,
  fieldLabel: string,
  opts?: { min?: number; max?: number }
): string | null {
  const trimmed = value.trim();
  const min = opts?.min ?? 1;
  const max = opts?.max ?? 2000;
  if (!trimmed) return `${fieldLabel} is required.`;
  if (trimmed.length < min) return `${fieldLabel} must be at least ${min} characters.`;
  if (trimmed.length > max) return `${fieldLabel} must be under ${max} characters.`;
  return null;
}

export function validateOptionalText(value: string, fieldLabel: string, max = 2000): string | null {
  if (!value) return null;
  if (value.trim().length > max) return `${fieldLabel} must be under ${max} characters.`;
  return null;
}

export function validateChoice(value: string, allowed: readonly string[], fieldLabel: string): string | null {
  if (!allowed.includes(value)) return `Select a valid ${fieldLabel.toLowerCase()}.`;
  return null;
}

export const MAX_PDF_BYTES = 8 * 1024 * 1024; // 8MB

export interface PdfCheckResult {
  error: string | null;
}

/** Client-side File API check: extension + declared MIME type + size. Not spoof-proof; the server re-checks magic bytes. */
export function validatePdfFile(file: File | null, required: boolean, fieldLabel: string): PdfCheckResult {
  if (!file) return { error: required ? `${fieldLabel} is required.` : null };
  if (file.size === 0) return { error: `${fieldLabel} appears to be empty.` };
  if (file.size > MAX_PDF_BYTES) return { error: `${fieldLabel} must be smaller than 8MB.` };
  const nameOk = /\.pdf$/i.test(file.name);
  const typeOk = file.type === "application/pdf" || file.type === "";
  if (!nameOk || !typeOk) return { error: `${fieldLabel} must be a PDF file.` };
  return { error: null };
}
