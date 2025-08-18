import H5 from "@/components/Typography/H5";
import { TTextInput } from "@/types/TTextInput";
import React from "react";

const RadioInput = ({
  name,
  labelText,
  checked,
  onChange,
}: TTextInput & {
  checked?: boolean;
  onChange?: () => void;
}) => {
  return (
    <label className="flex justify-start items-center gap-2 cursor-pointer relative">
      {/* Hidden input for accessibility */}
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="absolute w-0 h-0 opacity-0"
      />

      {/* Custom radio UI */}
      <div className="w-5 h-5 bg-bg-default-primary flex justify-center items-center rounded-full">
        <div className="w-4 h-4 bg-bg-default-white flex justify-center items-center rounded-full">
          {checked && (
            <div className="w-2.5 h-2.5 bg-bg-default-primary rounded-full"></div>
          )}
        </div>
      </div>

      <H5 className="text-text-default-dark text-[14px] leading-[22px] font-normal">
        {labelText}
      </H5>
    </label>
  );
};

export default RadioInput;