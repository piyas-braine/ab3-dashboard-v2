import Link from "next/link";
import React from "react";

const NavLinkText = ({
  href,
  children,
  isActive = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`text-[14px] text-text-default-white font-semibold leading-[100%] ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLinkText;
