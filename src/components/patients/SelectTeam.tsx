import { StaticImageData } from "next/image";
import React from "react";
import InviteTickIcon from "@/components/Svgs/InviteTickIcon";

type SelectTeamProps = {
  teamName: string;
  image?: StaticImageData | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedTeam: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedTeam: React.Dispatch<React.SetStateAction<any>>;
  setIsSelectTeamModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectTeam = ({
  teamName,
  selectedTeam,
  setSelectedTeam,
  setIsSelectTeamModalOpen,
}: SelectTeamProps) => {
  return (
    <div
      onClick={() => {
        setSelectedTeam(teamName);
        setIsSelectTeamModalOpen(false);
      }}
      className="group w-full flex justify-between items-center pr-3 cursor-pointer"
    >
      <h4 className="text-text-body-light text-[14px] leading-[20px] font-medium">
        {teamName}
      </h4>

      <div
        className={`group-hover:opacity-100 ${
          selectedTeam === teamName ? "opacity-100" : "opacity-0"
        } w-[10.06px] h-2`}
      >
        <InviteTickIcon />
      </div>
    </div>
  );
};

export default SelectTeam;
