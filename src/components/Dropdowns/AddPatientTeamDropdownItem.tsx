import React from "react";
import SingleTeam from "../patients/SingleTeam";
import TickIcon from "../Svgs/TickIcon";
import { TTeam } from "@/types/TTeam";

const AddPatientTeamDropdownItem = ({
  id,
  name,
  className,
  teams,
  setTeamsData,
}: {
  id: number;
  name: string;
  className?: string;
  teams: TTeam[];
  setTeamsData?: React.Dispatch<React.SetStateAction<TTeam[]>>;
}) => {
  const addTeam = (team: TTeam) => {
    const isExist = teams.find((t) => t.id === team.id || t.name === team.name);

    if (isExist) return;

    if (setTeamsData) {
      setTeamsData([...teams, team]);
    }
  };

  const isSelected = teams.some((t) => t.id === id);

  return (
    <div className="group px-4 w-full flex justify-between items-center gap-4">
      <div
        onClick={() =>
          addTeam({
            id,
            name,
          })
        }
        className="flex justify-start items-center gap-2 cursor-pointer"
      >
        <SingleTeam
          teamName={name}
          className={`w-10 h-10 text-[12px] leading-[16px] font-semibold ${className}`}
        />
        <h4 className="text-text-body-light text-nowrap text-[14px] leading-[20px] font-medium">
          {name} Team
        </h4>
      </div>

      <div
        className={`w-[10.06px] h-2 opacity-0 group-hover:opacity-100 ${
          isSelected && "!opacity-100"
        }`}
      >
        <TickIcon />
      </div>
    </div>
  );
};

export default AddPatientTeamDropdownItem;
