import React from "react";
import UploadIcon from "../Svgs/UploadIcon";

const FilledButton = ({
  text,
  className = "",
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 w-full bg-bg-primary-blue flex justify-center items-center rounded-lg cursor-pointer ${className}`}
    >
      <span className="text-text-default-white text-[14px] leading-[14px] font-semibold">
        {text}
      </span>
    </button>
  );
};

export default FilledButton;
