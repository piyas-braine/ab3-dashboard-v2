import React from "react";

const OutlineButton = ({
  text,
  className = "",
  icon,
  isIcon = false,
  isDisabled = false,
  onClick,
}: {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  isIcon?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 py-[15px] w-full border border-border-primary-blue bg-bg-surface-primary flex justify-center items-center gap-2 rounded-lg cursor-pointer ${className}`}
      disabled={isDisabled}
    >
      {isIcon && (
        <div className="w-2.5 h-2.5">
          {icon}
        </div>
      )}
      <span className="text-[14px] leading-[14px] font-semibold">{text}</span>
    </button>
  );
};

export default OutlineButton;
