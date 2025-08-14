import React from "react";
import SingleTeam from "../patients/SingleTeam";

const AddPatientTeamDropdownItem = ({ name }: { name: string }) => {
  return (
    <div className="w-full flex justify-start items-center gap-4">
      <SingleTeam
        teamName={name}
        className="w-10 h-10 text-[12px] leading-[16px] font-semibold "
      />
      <h4 className="text-text-body-light text-nowrap text-[14px] leading-[20px] font-medium">
        {name} Team
      </h4>
    </div>
  );
};

export default AddPatientTeamDropdownItem;
