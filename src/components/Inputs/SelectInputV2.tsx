import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import SelectArrowIcon from "@/components/Svgs/SelectArrowIcon";

type SelectOption = {
  label: string;
  value: string;
};

interface SelectInputProps {
  name: string;
  labelText?: string;
  placeholder?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: SelectOption[];
}

const SelectInputV2 = ({
  name,
  labelText,
  placeholder,
  className,
  register,
  // error,
  value,
  onChange,
  options = [],
}: SelectInputProps) => {
  return (
    <div className="flex-1 flex flex-col md:flex-row justify-start items-start md:items-center gap-4">
      <label
        htmlFor={name}
        className="text-[14px] leading-[20px] font-medium !text-text-body-light"
      >
        {labelText}
      </label>

      <div className="w-full relative">
        <select
          className={`appearance-none relative w-full bg-bg-default-white rounded-md text-text-natural-gray-8 text-[15px] leading-[15px] font-medium ${className} py-4 px-3`}
          style={{
            boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
          }}
          {...register}
          {...(value !== undefined ? { value, onChange } : {})}
        >
          <option
            value=""
            disabled
            selected
            hidden
            className="text-text-natural-gray-8 text-[15px] leading-[15px] font-medium"
          >
            {placeholder || "Select an option"}
          </option>

          {options?.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="text-text-natural-gray-8 text-[15px] leading-[15px] font-medium"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute top-[18px] bottom-[18px] right-3 w-[11px] h-[11px]">
          <SelectArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default SelectInputV2;
