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
      className={`text-[14px] ${
        isActive ? "text-text-primary-blue" : "text-text-body-light"
      } font-semibold leading-[100%] ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLinkText;
