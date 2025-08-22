import SelectArrowIcon from "@/components/Svgs/SelectArrowIcon";
import { ISelectInputProps } from "@/types/ISelectInput";

const SelectInput = ({
  name,
  labelText,
  placeholder,
  className,
  register,
  error,
  value,
  onChange,
  options = [],
}: ISelectInputProps) => {
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
        {...register}
        {...(value !== undefined ? { value, onChange } : {})}
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

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default SelectInput;
