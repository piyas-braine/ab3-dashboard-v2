import { TTypography } from "@/types/TTypography";
import React from "react";

const H6 = ({
  children,
  className,
}: TTypography) => {
  return (
    <h6 className={`font-semibold text-[14px] leading-[24px] ${className}`}>
      {children}
    </h6>
  );
};

export default H6;
