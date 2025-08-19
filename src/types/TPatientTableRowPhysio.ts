import { TTeam } from "@/types/TTeam";
import { StaticImageData } from "next/image";

export type TPatient = {
  patientImage: StaticImageData | string;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  teams: TTeam[];
};

export type TPatientTableRowPhysioProps = {
  patients: TPatient[];
  status: string;
  lastUpdated: string;
  isLastAction: boolean;
  isLastViewPatientDetails?: boolean;
};