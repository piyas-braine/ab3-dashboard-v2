import Image from "next/image";
import React from "react";
import InviteTickIcon from "@/components/Svgs/InviteTickIcon";
import { TSelectOrganizationProps } from "@/types/TSelectOrganization";

const SelectOrganization = ({
  organizationName,
  organizationImage,
  selectedOrganization,
  setSelectedOrganization,
  setIsSelectOrganizationModalOpen,
}: TSelectOrganizationProps) => {
  return (
    <div
      onClick={() => {
        setSelectedOrganization(organizationName);
        setIsSelectOrganizationModalOpen(false);
      }}
      className="group w-full flex justify-between items-center gap-4 pr-[8.94px] cursor-pointer"
    >
      <div className="flex justify-start items-center gap-4">
        <Image
          src={organizationImage}
          alt={organizationName}
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <h4 className="text-text-body-light text-[14px] leading-[20px] font-medium">
          {organizationName}
        </h4>
      </div>

      <div
        className={`group-hover:opacity-100 ${
          selectedOrganization === organizationName
            ? "opacity-100"
            : "opacity-0"
        } w-[10.06px] h-2`}
      >
        <InviteTickIcon />
      </div>
    </div>
  );
};

export default SelectOrganization;
