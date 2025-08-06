import React from "react";

const H6 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h6 className={`font-semibold text-[14px] leading-[24px] ${className}`}>
      {children}
    </h6>
  );
};

export default H6;
