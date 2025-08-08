import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextInputProps = {
  name: string;
  labelText?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  name,
  labelText,
  placeholder,
  type = "text",
  className,
  register,
  error,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <div className="h-[71px]">
      <label
        htmlFor={name}
        className="text-[14px] leading-[100%] font-medium text-text-body-light"
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        className={`mt-2 w-full h-[46px] bg-bg-surface-primary rounded-md p-4 pt-[14px] pb-[16px] ${className}`}
        style={{
          boxShadow: "0px 0px 1px 0px #32324733, 0px 1px 2px 0px #32324714",
        }}
        {...register}
        {...(value !== undefined ? { value, onChange } : {})}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default TextInput;
