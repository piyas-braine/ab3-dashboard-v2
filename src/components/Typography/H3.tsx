import { TTypography } from "@/types/TTypography";
import React from "react";

const H3 = ({ children, className }: TTypography) => {
  return (
    <h3 className={`font-semibold text-[20px] leading-[137%] ${className}`}>
      {children}
    </h3>
  );
};

export default H3;
