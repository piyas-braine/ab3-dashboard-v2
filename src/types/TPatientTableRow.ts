import { TOrganization } from "@/types/TOrganization";
import { TTeam } from "@/types/TTeam";
import { StaticImageData } from "next/image";

export type TPatientTableRowProps = {
  patientImage: StaticImageData | string;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  organizations: TOrganization[];
  teams: TTeam[];
  status: string;
  lastUpdated: string;
  isLastAddOrg?: boolean;
  isLastAddTeam?: boolean;
  isLastAction: boolean;
};
