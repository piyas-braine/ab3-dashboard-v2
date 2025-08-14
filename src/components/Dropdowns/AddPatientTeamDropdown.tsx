import React from "react";
import TextInputV2 from "../Inputs/TextInputV2";
import CrossIcon2 from "../Svgs/CrossIcon2";

import CrossIcon3 from "../Svgs/CrossIcon3";
import PopUpTextV2 from "../Popups/PopupTextV2";
import SingleTeam from "../patients/SingleTeam";
import AddPatientTeamDropdownItem from "./AddPatientTeamDropdownItem";

const AddPatientTeamDropdown = ({
  teams,
  setIsAddTeamOpen,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  teams: any;
  setIsAddTeamOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="p-4 w-[368px] h-[408px] bg-bg-default-white rounded-lg"
      style={{
        boxShadow: "0px 0px 77px 0px #0C1A4B2E",
      }}
    >
      <div
        className="px-[18px] py-3 w-full bg-bg-table-head flex justify-between items-center gap-4"
        style={{
          boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
        }}
      >
        <h4 className="text-text-table-head text-[11px] leading-[16px] tracking-[6%] font-semibold uppercase">
          Team
        </h4>

        <div onClick={() => setIsAddTeamOpen(false)} className="w-3 h-3 cursor-pointer">
          <CrossIcon2 />
        </div>
      </div>

      <div className="mb-[14px] flex justify-start items-start">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          teams?.map((team: any, index: number) => {
            return (
              <div
                key={index}
                className="px-4 py-3"
                style={{
                  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
                }}
              >
                <div
                  className="relative group p-2 w-fit bg-bg-default-white rounded-full"
                  style={{
                    boxShadow: "7px 8px 34px 0px #1D1C231A",
                  }}
                >
                  <SingleTeam teamName={team} />

                  <div className="absolute -top-[1px] -right-[11px] bg-bg-primary-blue w-4 h-4 rounded-full flex justify-center items-center">
                    <div className="w-2 h-2">
                      <CrossIcon3 />
                    </div>
                  </div>

                  <div
                    className={`absolute z-[50] top-[64px] left-1 group-hover:opacity-100 opacity-0 transition-all duration-[400ms] ease-in-out`}
                  >
                    <PopUpTextV2 text={`${team} Team`} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>

      <TextInputV2
        name="searchOrganization"
        placeholder="Search..."
        isIcon={true}
        className="!py-[14px] !pl-[41px]"
        iconClassName="left-[17px]"
      />

      <div className="mt-1 max-h-[204px] h-[204px] overflow-y-auto add-team-scrollbar">
        <div className="pt-2 space-y-3">
          <AddPatientTeamDropdownItem name="U20" />
          <AddPatientTeamDropdownItem name="U19" />
          <AddPatientTeamDropdownItem name="U18" />
          <AddPatientTeamDropdownItem name="U21" />
          <AddPatientTeamDropdownItem name="U20" />
          <AddPatientTeamDropdownItem name="U19" />
          <AddPatientTeamDropdownItem name="U18" />
          <AddPatientTeamDropdownItem name="U21" />
        </div>
      </div>
    </div>
  );
};

export default AddPatientTeamDropdown;
