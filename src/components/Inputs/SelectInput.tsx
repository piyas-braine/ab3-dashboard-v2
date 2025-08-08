import { FieldError } from "react-hook-form";
import SelectArrowIcon from "../Svgs/SelectArrowIcon";

type SelectOption = {
  label: string;
  value: string;
};

interface SelectInputProps {
  name: string;
  labelText?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  error?: FieldError;
  value?: string;
  options?: SelectOption[];
}

const SelectInput = ({
  name,
  labelText,
  placeholder,
  type = "text",
  className,
  register,
  error,
  value,
  options = [],
}: SelectInputProps) => {
  return (
    <div className="h-[71px]">
      <label
        htmlFor={name}
        className="text-[14px] leading-[100%] font-medium text-text-body-light"
      >
        {labelText}
      </label>

      <select
        className={`mt-2 relative w-full h-[46px] bg-bg-surface-primary rounded-md text-text-input-placeholder-default text-[15px] leading-[15px] font-medium ${className} p-4 pt-[14px] pb-[16px]`}
        style={{
          boxShadow: "0px 0px 1px 0px #32324733, 0px 1px 2px 0px #32324714",
        }}
      >
        <option
          value=""
          disabled
          selected
          hidden
          className="text-text-input-placeholder-default text-[15px] leading-[15px] font-medium"
        >
          {placeholder || "Select an option"}
        </option>

        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}

        <div className="absolute top-[17px] bottom-[18px] right-2.5 w-[11px] h-[11px]">
          <SelectArrowIcon />
        </div>
      </select>
    </div>
  );
};

export default SelectInput;
