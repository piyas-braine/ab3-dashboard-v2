import React from "react";

const TableBodyText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`font-normal text-[14px] leading-[20px] ${className}`}>
      {children}
    </span>
  );
};

export default TableBodyText;
