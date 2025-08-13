import { TMenuItem } from "@/types/TDropDownMenu";
import Link from "next/link";
import React from "react";

const DropDownMenuItem = ({
  icon,
  text,
  href,
  isLink = true,
  onClick,
}: TMenuItem) => {
  return (
    <>
      {isLink && href ? (
        <Link
          href={href}
          className="pt-2.5 pb-[7px] px-[11px] flex justify-start items-center gap-3"
        >
          <div className="w-4 h-4">{icon}</div>

          <h4 className="text-text-natural-gray-4 text-[14px] leading-[100%] font-medium">
            {text}
          </h4>
        </Link>
      ) : (
        <button
          onClick={() => (onClick ? onClick() : {})}
          className="pt-2.5 pb-[7px] px-[11px] flex justify-start items-center gap-3 cursor-pointer"
        >
          <div className="w-4 h-4">{icon}</div>

          <h4 className="text-text-natural-gray-4 text-[14px] leading-[100%] font-medium">
            {text}
          </h4>
        </button>
      )}
    </>
  );
};

export default DropDownMenuItem;
