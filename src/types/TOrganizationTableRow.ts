import { TTeam } from "@/types/TTeam";
import { StaticImageData } from "next/image";

export type TOrganizationTableRowProps = {
  tableRef: React.RefObject<HTMLDivElement | null>;
  organizationImage: StaticImageData | string;
  organizationName: string;
  organizationStatus: string;
  organizationJoinDate: string;
  playerNumber: number;
  teams: TTeam[];
  country: string;
  lastUpdated: string;
  isLastAction: boolean;
};
