import { TTypography } from "@/types/TTypography";
import React from "react";

const TableBodyText = ({
  children,
  className,
}: TTypography) => {
  return (
    <span className={`font-normal text-[14px] leading-[20px] ${className}`}>
      {children}
    </span>
  );
};

export default TableBodyText;
