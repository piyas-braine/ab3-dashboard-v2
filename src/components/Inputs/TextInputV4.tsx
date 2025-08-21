import { TTextInput } from "@/types/TTextInput";
import React from "react";

const TextInputV4 = ({
  name,
  placeholder,
  type = "text",
  labelClassName,
  iconClassName,
  className,
  labelText,
  isIcon,
  icon,
  register,
  //   error,
  value,
  defaultValue,
  onChange,
}: TTextInput) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className={`w-full text-text-body-muted text-[16px] leading-[23px] font-semibold`}
      >
        {labelText}
      </label>

      <div className="mt-3 w-full relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          {...register}
          {...(value !== undefined ? { value, onChange } : {})}
          className={`px-3 py-4 flex-1 w-full bg-[#F4F6F9] placeholder-text-natural-gray-77 text-text-natural-gray-2 text-[15px] leading-[15px] font-medium rounded-md ${className}`}
          defaultValue={defaultValue}
        />

        {isIcon && (
          <div className={`absolute top-1/2 -translate-y-1/2 right-3 w-[14px] h-[14px] ${iconClassName}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInputV4;
