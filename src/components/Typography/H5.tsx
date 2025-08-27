import { TTypography } from "@/types/TTypography";
import React from "react";

type H5Props = TTypography & React.HTMLAttributes<HTMLHeadingElement>;

const H5 = ({ children, className, ...props }: H5Props) => {
  return (
    <h5
      className={`font-semibold text-[16px] leading-[25px] ${className}`}
      {...props}
    >
      {children}
    </h5>
  );
};

export default H5;
