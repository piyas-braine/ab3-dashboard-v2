import { TButtonProps } from "@/types/TButton";
import React from "react";

const FilledButton = ({
  text,
  className = "",
  textClassName = "",
  isIcon = false,
  icon,
  isDisabled = false,
  onClick,
}: TButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 w-full bg-bg-primary-blue flex justify-center items-center gap-2 rounded-lg cursor-pointer ${className}`}
      disabled={isDisabled}
    >
      {isIcon && <div className="w-3 h-3">{icon}</div>}
      <span
        className={`text-text-default-white text-[14px] leading-[14px] font-semibold ${textClassName}`}
      >
        {text}
      </span>
    </button>
  );
};

export default FilledButton;
