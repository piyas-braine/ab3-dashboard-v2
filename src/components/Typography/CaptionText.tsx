import React from "react";

const CaptionText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`font-bold text-[12px] leading-[100%] ${className}`}>
      {children}
    </span>
  );
};

export default CaptionText;
