"use client";

import Image from "next/image";
import React from "react";

import ab3MedicalLogo from "@/assets/svgs/ab3-medical-logo.svg";
import SidebarNavItem from "./SidebarNavItem";

import DashboardIcon from "../Svgs/DashboardIcon";
import OrganizationIcon from "../Svgs/OrganizationIcon";
import PatientsIcon from "../Svgs/PatientsIcon";
import TeamsIcon from "../Svgs/TeamsIcon";
import ProductsIcon from "../Svgs/ProductsIcon";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-full">
      <div className="mt-7 ml-6 w-[81px] h-[50.57px]">
        <Image
          src={ab3MedicalLogo}
          alt="Ab3 Medical Logo"
          width={81}
          height={50.58}
          className="object-contain"
        />
      </div>

      <div className="mt-[33.43px]">
        <SidebarNavItem
          icon={<DashboardIcon isActive={pathname === "/dashboard"} />}
          navItemText="Dashboard"
          navItemLink="/dashboard"
          isActive={pathname === "/dashboard"}
        />
        <SidebarNavItem
          icon={
            <OrganizationIcon isActive={pathname === "/organizations"} />
          }
          navItemText="Organizations"
          navItemLink="/organizations"
          iconClassName="w-[18px]"
          isActive={pathname === "/organizations"}
        />
        <SidebarNavItem
          icon={<PatientsIcon isActive={pathname === "/patients"} />}
          navItemText="Patients"
          navItemLink="/patients"
          isStat={true}
          statNumber={126}
          isActive={pathname === "/patients"}
        />
        <SidebarNavItem
          icon={<TeamsIcon isActive={pathname === "/teams"} />}
          navItemText="Teams"
          navItemLink="/teams"
          isActive={pathname === "/teams"}
        />
        <SidebarNavItem
          icon={<ProductsIcon isActive={pathname === "/products"} />}
          navItemText="Products"
          navItemLink="/products"
          isActive={pathname === "/products"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
