import Image, { StaticImageData } from "next/image";
import React from "react";

import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import PatientStatusBadge from "../Badges/PatientStatusBadge";

import doctorAvatarImage from "@/assets/images/patients/doctor-1.png";
import SinglePatient from "../patients/SinglePatient";

type patient = {
  patientImage: StaticImageData | string;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  teams: string[];
};

type PatientTableRowSuperAdminProps = {
  patients: patient[];
  status: string;
  lastUpdated: string;
};

const PatientTableRawPhysio = ({
  patients,
  status,
  lastUpdated,
}: PatientTableRowSuperAdminProps) => {
  return (
    <div
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5 xl-py-0"
      style={{
        gridTemplateColumns: "0.1622fr 0.3604fr 0.1982fr 0.1667fr 0.1153fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="px-6 flex items-center justify-start gap-3 min-w-0">
        <div className="relative w-9 h-9">
          <Image
            src={doctorAvatarImage}
            alt="Assigned Doctor"
            width={36}
            height={36}
            className="min-w-9 min-h-9 w-full h-full rounded-full"
          />

          <div className="absolute top-[1.66px] right-[1.66px] w-[6.65px] h-[6.65px] bg-bg-default-success rounded-full"></div>
        </div>
        <h4 className="text-text-natural-gray-4 text-[12px] leading-[100%] font-semibold text-nowrap">
          To me
        </h4>
      </div>

      <div className="pl-6 flex items-center justify-start gap-2 min-w-0">
        {patients?.map((patient, index) => (
          <div key={index}>
            <SinglePatient
              patientImage={patient.patientImage}
              patientName={patient.patientName}
              playerFitStatus={patient.playerFitStatus}
              playerJoinDate={patient.playerJoinDate}
              notificationNumber={patient.notificationNumber}
              teams={patient.teams}
            />
          </div>
        ))}
      </div>

      <div className="pl-[18px] flex items-center justify-start min-w-0">
        <PatientStatusBadge status={status} />
      </div>

      <div className="xl:pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light">
          {lastUpdated}
        </TableBodyText>
      </div>

      <div className="px-6 flex items-center justify-start min-w-0">
        <div className="w-9 h-9 rounded-[4px] flex justify-center items-center border border-border-light">
          <div className="min-w-6 min-h-6 w-6 h-6">
            <ActionMenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTableRawPhysio;
