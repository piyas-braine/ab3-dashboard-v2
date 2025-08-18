import Image, { StaticImageData } from "next/image";
import React from "react";
import PatientFitBadge from "@/components/Badges/PatientFitBadge";
import { TTeam } from "@/types/TTeam";

type SinglePatientProps = {
  patientImage: string | StaticImageData;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  teams: TTeam[];
};

const SinglePatient = ({
  patientImage,
  patientName,
  playerFitStatus,
}: SinglePatientProps) => {
  return (
    <div className="relative w-6 h-6">
      <Image
        src={patientImage}
        alt={patientName}
        width={24}
        height={24}
        className="w-full h-full rounded-full"
      />

      <div className="absolute -bottom-0.5 -right-0.5">
        <PatientFitBadge status={playerFitStatus} />
      </div>
    </div>
  );
};

export default SinglePatient;
