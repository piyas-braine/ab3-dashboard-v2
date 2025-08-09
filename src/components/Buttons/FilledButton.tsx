import React from "react";
import InviteSendIcon from "../Svgs/InviteSendIcon";

const FilledButton = ({
  text,
  className = "",
  isIcon = false,
  isDisabled = false,
  onClick,
}: {
  text: string;
  className?: string;
  isIcon?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 w-full bg-bg-primary-blue flex justify-center items-center gap-2 rounded-lg cursor-pointer ${className}`}
      disabled={isDisabled}
    >
      {isIcon && (
        <div className="w-3 h-3">
          <InviteSendIcon />
        </div>
      )}
      <span className="text-text-default-white text-[14px] leading-[14px] font-semibold">
        {text}
      </span>
    </button>
  );
};

export default FilledButton;
