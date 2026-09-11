"use client";

import PhoneInput, { type Country } from "react-phone-number-input";
import * as flags from "country-flag-icons/react/3x2";
import "react-phone-number-input/style.css";

interface PhoneFieldProps {
  id: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string | null;
  placeholder?: string;
  defaultCountry?: Country;
}

export default function PhoneField({
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder = "Phone number",
  defaultCountry = "US",
}: PhoneFieldProps) {
  return (
    <div className={`lw-phone-input ${error ? "lw-field-error" : ""}`}>
      <PhoneInput
        id={id}
        name={name}
        international
        defaultCountry={defaultCountry}
        flags={flags}
        value={value}
        onChange={(next) => onChange(next ?? "")}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
}
