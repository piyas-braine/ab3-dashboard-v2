import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import PatientFitBadge from "../Badges/PatientFitBadge";
import PatientStatusBadge from "../Badges/PatientStatusBadge";
import SidebarBadge from "../Badges/SidebarBadge";
import PlayerFitPopupText from "../Popups/PlayerFitPopupText";
import SingleOrganization from "../patients/SingleOrganization";
import OrganizationAddIcon from "../Svgs/OrganizationAddIcon";
import DropDownMenu from "../Shared/DropDownMenu";

import EditIcon from "../Svgs/EditIcon";
import EyeIcon from "../Svgs/EyeIcon";
import TransferIcon from "../Svgs/TransferIcon";
import ArchiveIcon from "../Svgs/ArchiveIcon";
import { TMenuItem } from "@/types/TDropDownMenu";

type Organization = {
  name: string;
  image: string | StaticImageData;
};

type PatientTableRowSuperAdminProps = {
  patientImage: StaticImageData | string;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  organizations: Organization[];
  teams: string[];
  status: string;
  lastUpdated: string;
};

const PatientTableRawSuperAdmin = ({
  patientImage,
  patientName,
  playerFitStatus,
  playerJoinDate,
  notificationNumber,
  organizations,
  // teams,
  status,
  lastUpdated,
}: PatientTableRowSuperAdminProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems: TMenuItem[] = [
    {
      icon: <EyeIcon />,
      text: "View",
      isLink: false,
      onClick: () => {
        console.log("View");
      },
    },
    {
      icon: <EditIcon />,
      text: "Edit",
      isLink: false,
      onClick: () => {
        console.log("Edit");
      },
    },
    {
      icon: <TransferIcon />,
      text: "Transfer",
      isLink: false,
      onClick: () => {
        console.log("Transfer");
      },
    },
    {
      icon: <ArchiveIcon />,
      text: "Archive",
      isLink: false,
      onClick: () => {
        console.log("Archive");
      },
    },
  ];

  return (
    <div
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5 xl-py-0"
      style={{
        gridTemplateColumns: "0.3063fr 0.1982fr 0.2342fr 0.1730fr 0.0883fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="px-6 flex items-center justify-between gap-3 min-w-0">
        <div className="flex justify-start items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              width={24}
              height={24}
              src={patientImage}
              alt={patientName}
              className="w-6 h-6 rounded-full flex-shrink-0"
            />

            <div className="absolute -right-[2px] -bottom-[2px] peer">
              <PatientFitBadge status={playerFitStatus} />
            </div>

            <div className="absolute left-[2px] bottom-4 opacity-0 peer-hover:opacity-100 transition-all duration-[400ms] ease-in-out">
              <PlayerFitPopupText
                text={
                  playerFitStatus === "Fit"
                    ? "Fit to Play"
                    : playerFitStatus === "Injured"
                    ? "Not Fit to Play"
                    : "In Recover"
                }
                subText={`Joined - ${playerJoinDate}`}
              />
            </div>
          </div>
          <TableBodyHeading>{patientName}</TableBodyHeading>
        </div>
        {notificationNumber > 0 && (
          <SidebarBadge statNumber={notificationNumber} />
        )}
      </div>

      <div className="pl-6 flex items-center justify-start gap-2 min-w-0">
        {organizations?.map((organization, index) => (
          <div key={index}>
            <SingleOrganization
              organizationImage={organization.image}
              organizationName={organization.name}
            />
          </div>
        ))}

        <div
          className={`w-8 h-8 bg-bg-primary-blue rounded-full flex justify-center items-center`}
        >
          <OrganizationAddIcon />
        </div>
      </div>

      <div className="pl-[18px] flex items-center justify-start min-w-0">
        <PatientStatusBadge status={status} />
      </div>

      <div className="xl:pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light">
          {lastUpdated}
        </TableBodyText>
      </div>

      <div className="xl:px-6 flex items-center justify-start min-w-0">
        <div className="relative">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-9 h-9 rounded-[4px] flex justify-center items-center border border-border-light cursor-pointer"
          >
            <div className="min-w-6 min-h-6 w-6 h-6">
              <ActionMenuIcon />
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-[500] top-[42px] -right-0">
              <DropDownMenu
                menuItems={menuItems}
                className="!w-[155px]"
                style={{
                  boxShadow: "0px 0px 77px 0px #0C1A4B1F",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientTableRawSuperAdmin;
