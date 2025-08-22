import { StaticImageData } from "next/image";

export type TSelectTeamProps = {
  teamName: string;
  image?: StaticImageData | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedTeam: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedTeam: React.Dispatch<React.SetStateAction<any>>;
  setIsSelectTeamModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};