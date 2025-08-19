import { TNavLinkText } from "@/types/TNavLinkText";
import Link from "next/link";
import React from "react";

const NavLinkText = ({
  href,
  children,
  isActive = false,
  className,
}: TNavLinkText) => {
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
