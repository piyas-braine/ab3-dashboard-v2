import SelectDownArrowIcon from "../Svgs/SelectDownArrowIcon";

interface SelectInputProps {
  placeholder?: string;
  className?: string;
}

const SelectInputV3 = ({ placeholder, className }: SelectInputProps) => {
  return (
    <div className="flex-1 flex justify-start items-center gap-4">
      <select
        className={`relative w-full h-[30px] rounded-md text-text-default-dark text-[10px] leading-[10px] font-semibold racking-[-0.5px] ${className} pt-[7px] pb-[9px] px-[11px] border border-border-light`}
      >
        <option
          value=""
          
          className="text-text-default-dark text-[10px] leading-[10px] font-semibold tracking-[-0.5px]"
        >
          {placeholder || "Select an option"}
        </option>

        <div className="w-[11px] h-[11px]">
          <SelectDownArrowIcon />
        </div>
      </select>
    </div>
  );
};

export default SelectInputV3;
