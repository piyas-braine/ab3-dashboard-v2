import SelectDownArrowIcon from "../Svgs/SelectDownArrowIcon";

interface SelectInputProps {
  placeholder?: string;
  className?: string;
  onClick?: () => void;
}

const SelectInputV3 = ({
  placeholder,
  className,
  onClick,
}: // onBlur,
SelectInputProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    onClick?.();
  };

  return (
    <div className="flex-1 flex justify-start items-center gap-4 rounded-[1px]">
      <div
        onClick={handleClick}
        className={`relative w-[200px] h-[30px] rounded-md text-text-default-dark text-[10px] leading-[10px] font-semibold tracking-[-0.5px] ${className} pt-[7px] pb-[9px] px-[11px] border border-border-light flex justify-between items-center`}
      >
        <div className="text-text-default-dark text-[10px] leading-[10px] font-semibold tracking-[-0.5px]">
          {placeholder || "Select an option"}
        </div>

        <div className="w-[8px] h-[8px]">
          <SelectDownArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default SelectInputV3;
