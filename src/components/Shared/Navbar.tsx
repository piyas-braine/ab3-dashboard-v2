"use client";

import { usePathname } from "next/navigation";
import React from "react";
import H2 from "../Typography/H2";
import NavbarChatIcon from "../Svgs/NavbarChatIcon";

import NavbarNotificationIcon from "../Svgs/NavbarNotificationIcon";
import navbarAvatarImage from "@/assets/images/navbar-avatar.png";

import Image from "next/image";
import NavbarDownArrow from "../Svgs/NavbarDownArrow";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const pathname = usePathname();

  return (
    <nav className="p-[30px] py-[18.5px] border-b border-border-light flex flex-col sm:flex-row justify-between items-center gap-10">
      <div className="flex justify-start items-center gap-4">
        {/* Hamburger Menu for Mobile */}
        <button
          className="p-2 px-4 rounded-md bg-bg-primary-blue text-white lg:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <H2 className="capitalize !text-text-heading-dark">
          {pathname?.slice(1)}
        </H2>
      </div>

      <div
        className="py-2.5 px-4 flex justify-end items-center gap-5 rounded-[30px]"
        style={{ boxShadow: "14px 17px 40px 4px #7090B014" }}
      >
        <div className="w-4 h-4">
          <NavbarChatIcon />
        </div>
        <div className="w-4 h-4">
          <NavbarNotificationIcon />
        </div>

        <div className="flex justify-end items-center gap-2.5">
          <div className="w-[41px] h-[41px]">
            <Image
              src={navbarAvatarImage}
              alt="Ab3 Medical Logo"
              width={41}
              height={41}
              className="w-full h-full rounded-full"
            />
          </div>

          <h3 className="text-[14px] leading-[23px] font-semibold text-text-body-light">
            Marie Claire
          </h3>

          <div className="w-4 h-4">
            <NavbarDownArrow />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
