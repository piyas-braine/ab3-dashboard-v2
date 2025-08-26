"use client";

import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import H2 from "@/components/Typography/H2";
import NavbarChatIcon from "@/components/Svgs/NavbarChatIcon";

import NavbarNotificationIcon from "@/components/Svgs/NavbarNotificationIcon";
import navbarAvatarImage from "@/assets/images/navbar-avatar.png";

import Image from "next/image";
import NavbarDownArrow from "@/components/Svgs/NavbarDownArrow";
import DropDownMenu from "@/components/Shared/DropDownMenu";

import ProfileIcon from "@/components/Svgs/ProfileIcon";
import ProfileSupportIcon from "@/components/Svgs/ProfileSupportIcon";
import ProfileSettingIcon from "@/components/Svgs/ProfileSettingIcon";
import ProfileLogOutIcon from "@/components/Svgs/ProfileLogOutIcon";
import { TMenuItem } from "@/types/TDropDownMenu";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useGetMeQuery, useLogOutMutation } from "@/store/apis/User";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: userData } = useGetMeQuery(undefined);
  const [logOut] = useLogOutMutation();

  const logOutUser = async () => {
    try {
      await logOut().unwrap();

      console.log("Logged out");
    } catch (error) {
      console.log(error);
    }
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useClickOutside(
    [dropdownRef],
    () => {
      setIsDropdownOpen(false);
    },
    isDropdownOpen
  );

  const menuItems: TMenuItem[] = [
    {
      icon: <ProfileIcon />,
      text: "Profile",
      href: "/profile",
    },
    {
      icon: <ProfileSupportIcon />,
      text: "Support",
      href: "/support",
    },
    {
      icon: <ProfileSettingIcon />,
      text: "Settings",
      href: "/setting",
    },
    {
      icon: <ProfileLogOutIcon />,
      text: "Logout",
      isLink: false,
      onClick: () => {
        logOutUser();
      },
    },
  ];

  console.log("User Data:", userData);

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
          {pathname?.startsWith("/patients/problem")
            ? "View Problem"
            : pathname?.split("/")[1]}
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

        <div
          ref={dropdownRef}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative"
        >
          <div className="flex justify-end items-center gap-2.5 cursor-pointer">
            <div className="w-[41px] h-[41px]">
              <Image
                src={userData?.data?.avatar || navbarAvatarImage}
                alt="Ab3 Medical Logo"
                width={41}
                height={41}
                className="w-full h-full rounded-full"
              />
            </div>

            <h3 className="text-[14px] leading-[23px] font-semibold text-text-body-light">
              {userData?.data?.name || " Marie Claire"}
            </h3>

            <div className="w-4 h-4">
              <NavbarDownArrow />
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-[62.56px] -right-4">
              <DropDownMenu
                menuItems={menuItems}
                style={{
                  boxShadow:
                    "0px 3px 8px -1px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
