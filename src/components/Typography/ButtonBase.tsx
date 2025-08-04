import React from "react";

const ButtonBase = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`text-[12px] leading-[12px] font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default ButtonBase;
