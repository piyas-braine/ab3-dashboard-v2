import Image, { StaticImageData } from "next/image";
import React from "react";

import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";

type PatientTableRowProps = {
  patientImage: StaticImageData | string;
  patientName: string;
  lastVisit: string;
  organizationImage: StaticImageData | string;
  organizationName: string;
  team: string;
  age: string;
  status: string;
  doctorImage: StaticImageData | string;
  doctorName: string;
  doctorRole: string;
};

const PatientTableRaw = ({
  patientImage,
  patientName,
  lastVisit,
  organizationImage,
  organizationName,
  team,
  age,
  status,
  doctorImage,
  doctorName,
  doctorRole,
}: PatientTableRowProps) => {
  return (
    <div
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5 xl-py-0 shadow-[inset_0px_-1px_0px_0px_#EDF2F7]"
      style={{
        gridTemplateColumns:
          "0.17fr 0.13fr 0.18fr 0.10fr 0.07fr 0.11fr 0.15fr 0.09fr",
      }}
    >
      <div className="pl-6 flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-3 min-w-0 text-center xl:text-left">
        <Image
          width={24}
          height={24}
          src={patientImage}
          alt={patientName}
          className="w-6 h-6 rounded-full flex-shrink-0"
        />
        <TableBodyHeading>{patientName}</TableBodyHeading>
      </div>

      <div className="pl-6 flex items-center justify-center xl:justify-start min-w-0 text-center xl:text-left">
        <TableBodyText className="text-text-table-body-light">
          {lastVisit}
        </TableBodyText>
      </div>

      <div className="pl-6 flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-2 min-w-0 text-center xl:text-left">
        <Image
          width={28}
          height={28}
          src={organizationImage}
          alt={organizationName}
          className="w-7 h-7 rounded-full flex-shrink-0"
        />
        <TableBodyHeading className="text-text-table-body-light">
          {organizationName}
        </TableBodyHeading>
      </div>

      <div className="pl-6 flex items-center justify-center xl:justify-start min-w-0 text-center xl:text-left">
        <TableBodyHeading className="text-text-table-body-light">
          {team} Team
        </TableBodyHeading>
      </div>

      <div className="pl-6 flex items-center justify-center xl:justify-start min-w-0 text-center xl:text-left">
        <TableBodyText className="text-text-table-body-light">
          {age}
        </TableBodyText>
      </div>

      <div className="pl-[18px] flex items-center justify-center xl:justify-start min-w-0 text-center xl:text-left">
        <div className="bg-[#DEFFDC] py-[5px] px-[14px] text-[#0AB100] text-[14px] leading-[19px] font-medium rounded-[44px] whitespace-nowrap">
          {status}
        </div>
      </div>

      <div className="pl-[19px] flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-2.5 min-w-0 text-center xl:text-left">
        <div className="relative w-9 h-9 flex-shrink-0">
          <Image
            width={36}
            height={36}
            src={doctorImage}
            alt="Doctor"
            className="w-9 h-9 rounded-full"
          />
          <div className="absolute top-[1.66px] right-[1.66px] bg-bg-default-success w-[6.65px] h-[6.65px] rounded-full"></div>
        </div>

        <div className="space-y-[3px] min-w-0">
          <div className="text-[12px] leading-[100%] font-semibold xl:truncate">
            {doctorName}
          </div>
          <div className="text-[12px] leading-[100%] font-normal xl:truncate">
            {doctorRole}
          </div>
        </div>
      </div>

      <div className="xl:pl-6 flex items-center justify-center xl:justify-start min-w-0 text-center xl:text-left">
        <span className="truncate">
          <div className="w-9 h-9 rounded-[4px] flex justify-center items-center border border-border-light">
            <div className="w-6 h-6">
              <ActionMenuIcon />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default PatientTableRaw;
