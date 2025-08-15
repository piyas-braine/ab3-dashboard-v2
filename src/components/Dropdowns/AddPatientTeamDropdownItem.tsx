import React from "react";
import SingleTeam from "../patients/SingleTeam";
import TickIcon from "../Svgs/TickIcon";

const AddPatientTeamDropdownItem = ({
  name,
  className,
  teams,
}: {
  name: string;
  className?: string;
  teams?: string[];
}) => {
  return (
    <div className="group px-4 w-full flex justify-between items-center gap-4">
      <div className="flex justify-start items-center gap-2">
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
          teams?.includes(name) && "!opacity-100"
        }`}
      >
        <TickIcon />
      </div>
    </div>
  );
};

export default AddPatientTeamDropdownItem;
