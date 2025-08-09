import React from "react";

const H5 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={`font-semibold text-[16px] leading-[25px] ${className}`}>
      {children}
    </h3>
  );
};

export default H5;
