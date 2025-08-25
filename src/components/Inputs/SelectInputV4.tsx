import React from "react";

interface SelectInputProps {
  name: string;
  placeholder?: string;
  className?: string;
  placeholderClassName?: string;
  isIcon?: boolean;
  icon?: React.ReactNode;
  labelText?: string;
  labelClassName?: string;
  onClick?: () => void;
  value?: string;
}

const SelectInputV4 = ({
  name,
  placeholder,
  className,
  placeholderClassName,
  isIcon = false,
  icon,
  labelText,
  labelClassName,
  onClick,
  value
}: // onBlur,
SelectInputProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    onClick?.();
  };

  return (
    <div className="flex-1 w-full">
      <label
        htmlFor={name}
        className={`text-[16px] leading-[23px] font-semibold text-text-body-muted ${labelClassName}`}
      >
        {labelText}
      </label>

      <div
        onClick={handleClick}
        className={`mt-3 relative py-[14.5px] px-3 bg-[#F4F6F9] rounded-md ${className}`}
      >
        <div
          className={`text-text-natural-gray-7 text-[15px] leading-[15px] font-medium ${placeholderClassName}`}
        >
          {value || placeholder || "Select an option"}
        </div>

        {isIcon && icon && (
          <div className="absolute top-1/2 -translate-y-1/2 right-3  w-[14px] h-[8px]">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInputV4;
