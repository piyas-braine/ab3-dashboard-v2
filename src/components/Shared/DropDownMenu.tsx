import React from "react";
import { TDropDownMenuProps, TMenuItem } from "@/types/TDropDownMenu";
import DropDownMenuItem from "@/components/Shared/DropDownMenuItem";

const DropDownMenu = ({ menuItems, className, style }: TDropDownMenuProps) => {
  return (
    <div
      className={`p-3 w-[206px] bg-bg-default-white rounded-2xl flex flex-col items-start justify-center gap-1.5 ${className}`}
      style={style}
    >
      {menuItems?.map((menuItem: TMenuItem, index: number) => (
        <DropDownMenuItem
          key={index}
          icon={menuItem.icon}
          text={menuItem.text}
          href={menuItem.href}
          isLink={menuItem.isLink}
          onClick={menuItem.onClick}
        />
      ))}
    </div>
  );
};

export default DropDownMenu;
