import { TTypography } from "@/types/TTypography";
import React from "react";

const ButtonBase = ({
  children,
  className,
}: TTypography) => {
  return (
    <div className={`text-[12px] leading-[12px] font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default ButtonBase;
