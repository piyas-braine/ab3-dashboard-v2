import { TTypography } from "@/types/TTypography";
import React from "react";

const TableBodyHeading = ({
  children,
  className,
}: TTypography) => {
  return (
    <span className={`font-semibold text-[12px] leading-[20px] ${className}`}>
      {children}
    </span>
  );
};

export default TableBodyHeading;
