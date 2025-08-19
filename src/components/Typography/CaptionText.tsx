import { TTypography } from "@/types/TTypography";
import React from "react";

const CaptionText = ({
  children,
  className,
}: TTypography) => {
  return (
    <span className={`font-bold text-[12px] leading-[100%] ${className}`}>
      {children}
    </span>
  );
};

export default CaptionText;
