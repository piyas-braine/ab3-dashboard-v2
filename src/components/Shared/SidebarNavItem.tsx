import React from "react";
import NavLinkText from "../Typography/NavLinkText";
import CaptionText from "../Typography/CaptionText";

type SidebarNavItemProps = {
  icon: React.ReactNode;
  navItemText: string;
  navItemLink: string;
  statNumber?: number;
  isActive?: boolean;
  isStat?: boolean;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
};

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
}: SidebarNavItemProps) => {
  return (
    <div
      className={`relative pl-6 pr-[21px] ${
        isActive ? "py-[17px]" : "py-4"
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

        {isStat && statNumber && (
          <div className="py-[2px] px-2.5 text-text-default-white rounded-[100px] text-nowrap">
            <CaptionText className="text-text-primary-blue">
              {statNumber.toString()}
            </CaptionText>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarNavItem;
