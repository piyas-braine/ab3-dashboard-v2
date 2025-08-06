import React from "react";

const TableBodyHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`font-semibold text-[12px] leading-[20px] ${className}`}>
      {children}
    </span>
  );
};

export default TableBodyHeading;
