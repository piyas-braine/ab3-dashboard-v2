import React from "react";
import NavLinkText from "@/components/Typography/NavLinkText";
import SidebarBadge from "@/components/Badges/SidebarBadge";
import { TSidebarNavItemProps } from "@/types/TSidebarNavItem";

const SidebarNavItem = ({
  icon,
  navItemText,
  navItemLink,
  statNumber,
  isActive = false,
  isStat = false,
  className,
  textClassName,
  iconClassName,
}: TSidebarNavItemProps) => {
  return (
    <div
      className={`relative pl-6 pr-[21px] ${
        isActive ? "py-[17px] bg-[#FFFFFF14]" : "py-4"
      } flex justify-start items-center gap-5 ${className}`}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-bg-default-white"></div>
      )}
      <div className={`w-4 h-4 ${iconClassName}`}>{icon}</div>
      <div className="w-full flex justify-between items-center">
        <NavLinkText
          href={navItemLink}
          isActive={isActive}
          className={textClassName}
        >
          {navItemText}
        </NavLinkText>

        {isStat && statNumber && <SidebarBadge statNumber={statNumber} />}
      </div>
    </div>
  );
};

export default SidebarNavItem;
