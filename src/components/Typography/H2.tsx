import { TTypography } from "@/types/TTypography";
import React from "react";

const H2 = ({ children, className }: TTypography) => {
  return (
    <h2 className={`font-semibold text-[28px] leading-[136%] ${className}`}>
      {children}
    </h2>
  );
};

export default H2;
