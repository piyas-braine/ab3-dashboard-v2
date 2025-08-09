import React, { useEffect, useState } from "react";
import InputSearchIcon from "../Svgs/InputSearchIcon";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextInputV2Props = {
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
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
  register,
  error,
  value,
  onChange,
  isIcon = false,
}: TextInputV2Props) => {
  const [hasValue, setHasValue] = useState(false);

  // Keep internal state in sync with value prop
  useEffect(() => {
    if (value !== undefined) {
      setHasValue(value.trim().length > 0);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.trim().length > 0);
    if (onChange) onChange(e);
    if (register?.onChange) register.onChange(e); // Support react-hook-form
  };

  return (
    <div
      className={`relative z-10 bg-bg-default-white rounded-md ${className}`}
      style={{
        boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
    >
      <input
        type={type}
        className={`py-[16.5px] ${isIcon ? "pl-10 pr-3" : "px-3"} w-full`}
        {...(register ? { ...register, onChange: handleChange } : {})}
        {...(value !== undefined ? { value } : {})}
        onChange={value === undefined ? handleChange : onChange}
      />

      <label
        htmlFor={name}
        className="absolute -z-10 top-1/2 -translate-y-1/2 left-3 flex justify-start items-center gap-3"
      >
        {isIcon && (
          <div className="w-4 h-4">
            <InputSearchIcon />
          </div>
        )}

        {!hasValue && (
          <span className="text-text-natural-gray-8 text-[15px] leading-[15px] font-medium">
            {placeholder}
          </span>
        )}
      </label>

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default TextInputV2;
