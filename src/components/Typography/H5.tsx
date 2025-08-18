import { TTypography } from "@/types/TTypography";
import React from "react";

const H5 = ({
  children,
  className,
}: TTypography) => {
  return (
    <h3 className={`font-semibold text-[16px] leading-[25px] ${className}`}>
      {children}
    </h3>
  );
};

export default H5;
