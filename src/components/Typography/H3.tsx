import React from "react";

const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={`font-semibold text-[20px] leading-[137%] ${className}`}>
      {children}
    </h3>
  );
};

export default H3;
