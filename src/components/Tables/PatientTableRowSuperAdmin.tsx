import Image, { StaticImageData } from "next/image";
import React from "react";

import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import PatientFitBadge from "../Badges/PatientFitBadge";
import PatientStatusBadge from "../Badges/PatientStatusBadge";
import SidebarBadge from "../Badges/SidebarBadge";
import PlayerFitPopupText from "../Popups/PlayerFitPopupText";
import SingleOrganization from "../patients/SingleOrganization";
import OrganizationAddIcon from "../Svgs/OrganizationAddIcon";

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
  teams,
  status,
  lastUpdated,
}: PatientTableRowSuperAdminProps) => {
  return (
    <div
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5 xl-py-0 shadow-[inset_0px_-1px_0px_0px_#EDF2F7]"
      style={{
        gridTemplateColumns: "0.3063fr 0.1982fr 0.2342fr 0.1730fr 0.0883fr",
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
        <div className="w-9 h-9 rounded-[4px] flex justify-center items-center border border-border-light">
          <div className="min-w-6 min-h-6 w-6 h-6">
            <ActionMenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTableRawSuperAdmin;
