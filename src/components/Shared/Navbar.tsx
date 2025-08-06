"use client";

import { usePathname } from "next/navigation";
import React from "react";
import H2 from "../Typography/H2";
import ButtonBase from "../Typography/ButtonBase";
import PlusIcon from "../Svgs/PlusIcon";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const pathname = usePathname();

  return (
    <nav className="p-[30px] border-b border-border-light flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10">
      <div className="flex justify-start items-center gap-4">
        {/* Hamburger Menu for Mobile */}
        <button
          className="p-2 px-4 rounded-md bg-bg-primary-blue text-white lg:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <H2 className="capitalize">{pathname?.slice(1)}</H2>
      </div>

      <button className="py-3 px-5 rounded-[6px] bg-bg-primary-blue flex justify-start items-center gap-2">
        <div className="w-3 h-3">
          <PlusIcon />
        </div>
        <ButtonBase className="text-text-default-white">
          Invite New Patient
        </ButtonBase>
      </button>
    </nav>
  );
};

export default Navbar;
