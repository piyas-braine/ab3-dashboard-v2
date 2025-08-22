import React from "react";
import UploadIcon from "@/components/Svgs/UploadIcon";
import { TButtonProps } from "@/types/TButton";

const TextButton = ({
  text,
  className = "",
  onClick,
}: TButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-[13px] px-[17px] flex justify-between items-center gap-2.5 ${className}`}
    >
      <div className="w-[12px] h-[12px]">
        <UploadIcon />
      </div>

      <span className="text-xs leading-[12px] font-semibold text-text-default-dark">
        {text}
      </span>
    </button>
  );
};

export default TextButton;
