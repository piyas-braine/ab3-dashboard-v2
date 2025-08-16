import React from "react";
import InputSearchIcon from "../Svgs/InputSearchIcon";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextInputV2Props = {
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
  iconClassName?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isIcon?: boolean;
};

const TextInputV2 = ({
  name,
  placeholder,
  type = "text",
  className,
  iconClassName,
  register,
  error,
  value,
  onChange,
  isIcon = false,
}: TextInputV2Props) => {
  return (
    <div className="w-full relative">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
        {...(value !== undefined ? { value, onChange } : {})}
        className={`py-[16.5px] px-3 pl-10 w-full bg-bg-default-white placeholder-text-text-natural-gray-8 text-text-natural-gray-2 text-[15px] leading-[15px] font-medium rounded-md ${className}`}
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      />

      {isIcon && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 ${iconClassName}`}
        >
          <InputSearchIcon />
        </div>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default TextInputV2;
