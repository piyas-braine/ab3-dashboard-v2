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
import SidebarBadge from "../Badges/SidebarBadge";
import MedicalSpecialistCard from "../Cards/MedicalSpecialistCard";

import medicalSpecialistImage from "@/assets/images/medical-specialist-1.png";
import medicalSpecialistImage2 from "@/assets/images/patients/patient-avatar.png";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="py-7 w-full min-h-full bg-bg-primary-blue">
      <div className="ml-6 w-[81px] h-[50.57px]">
        <Image
          src={ab3MedicalLogo}
          alt="Ab3 Medical Logo"
          width={81}
          height={50.57}
          className="w-[81px] h-[50.57px]"
        />
      </div>

      <div className="mt-[19.43px] ml-5 w-[210px] h-[1px] bg-[#FFFFFF12]"></div>

      <div className="mt-[13px]">
        <SidebarNavItem
          icon={<DashboardIcon />}
          navItemText="Dashboard"
          navItemLink="/dashboard"
          isActive={pathname === "/dashboard"}
        />
        <SidebarNavItem
          icon={<OrganizationIcon />}
          navItemText="Organizations"
          navItemLink="/organizations"
          iconClassName="w-[18px]"
          isActive={pathname === "/organizations"}
        />
        <SidebarNavItem
          icon={<PatientsIcon />}
          navItemText="Patients"
          navItemLink="/patients"
          isStat={true}
          statNumber={126}
          isActive={pathname === "/patients"}
        />
        <SidebarNavItem
          icon={<TeamsIcon />}
          navItemText="Teams"
          navItemLink="/teams"
          isActive={pathname === "/teams"}
        />
        <SidebarNavItem
          icon={<ProductsIcon />}
          navItemText="Products"
          navItemLink="/products"
          isActive={pathname === "/products"}
        />
      </div>

      <div className="mt-[19.43px] ml-5 w-[210px] border border-[#FFFFFF12]"></div>

      <div className="ml-6 mt-[34px] flex justify-start items-center gap-4">
        <h4 className="text-text-default-white text-[11px] font-semibold leading-[100%] tracking-[3%] uppercase">
          Medical Specialist
        </h4>
        <SidebarBadge statNumber={5} />
      </div>

      <div className="ml-6 mt-6 mr-[26px] space-y-4">
        <MedicalSpecialistCard
          medicalSpecialistImage={medicalSpecialistImage}
          medicalSpecialistName="Marie Claire"
          medicalSpecialistLocation="Paris, FR"
          isActive={true}
        />

        <MedicalSpecialistCard
          medicalSpecialistName="Michael Jordan"
          medicalSpecialistLocation="Bucharest, RO"
        />

        <MedicalSpecialistCard
          medicalSpecialistImage={medicalSpecialistImage}
          medicalSpecialistName="Marie Claire"
          medicalSpecialistLocation="Paris, FR"
          isActive={true}
        />

        <MedicalSpecialistCard
          medicalSpecialistImage={medicalSpecialistImage2}
          medicalSpecialistName="Heather Wright"
          medicalSpecialistLocation="London, UK"
          isActive={true}
        />

        <MedicalSpecialistCard
          medicalSpecialistImage={medicalSpecialistImage}
          medicalSpecialistName="Marie Claire"
          medicalSpecialistLocation="Paris, FR"
          isActive={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;
