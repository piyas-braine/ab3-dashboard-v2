import { TTeam } from "@/types/TTeam";
import { StaticImageData } from "next/image";

export type TSinglePatientProps = {
  patientImage: string | StaticImageData;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  teams: TTeam[];
};