import H5 from "@/components/Typography/H5";
import { TTextInput } from "@/types/TTextInput";
import React from "react";

const TextAreaInput = ({
  name,
  labelText,
  placeholder,
  className,
  register,
  //   error,
  value,
  onChange,
}: TTextInput) => {
  return (
    <div>
      <label htmlFor={name}>
        <H5 className="text-text-body-muted">{labelText}</H5>
      </label>
      <textarea
        name={name}
        className={`mt-[9px] w-full h-[207px] bg-bg-surface-secondary rounded-md px-3 py-6 placeholder-text-natural-gray-8 text-text-natural-gray-2 text-[15px] leading-[18px] font-medium resize none ${className}`}
        {...register}
        {...(value !== undefined ? { value, onChange } : {})}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaInput;
