import React from "react";

const OutlineButton = ({
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
      className={`p-4 py-[15px] w-full border border-border-primary-blue bg-bg-surface-primary flex justify-center items-center rounded-lg cursor-pointer ${className}`}
    >
      <span className="text-text-primary-blue text-[14px] leading-[14px] font-semibold">
        {text}
      </span>
    </button>
  );
};

export default OutlineButton;
