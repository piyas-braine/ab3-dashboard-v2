import React from "react";
import CrossIcon2 from "../Svgs/CrossIcon2";

import PopUpTextV2 from "../Popups/PopupTextV2";
import SingleTeam from "../patients/SingleTeam";
import H6 from "../Typography/H6";
import SidebarBadge from "../Badges/SidebarBadge";
import TextBody from "../Typography/TextBody";
import { TTeam } from "@/types/TTeam";

const ViewPatientDetailsDropdown = ({
  patientName,
  statNumber,
  patientFitStatus,
  patientJoinDate,
  teams,
  setIsViewPatientDetailsOpen,
}: {
  patientName: string;
  statNumber: number;
  patientFitStatus: string;
  patientJoinDate: string;
  teams: TTeam[];
  setIsViewPatientDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="p-4 w-[292px] bg-bg-default-white rounded-2xl"
      style={{ boxShadow: "0px 0px 77px 0px #0C1A4B2E" }}
    >
      <div
        onClick={() => setIsViewPatientDetailsOpen(false)}
        className="flex justify-end items-center"
      >
        <div className="w-3 h-3 cursor-pointer">
          <CrossIcon2 />
        </div>
      </div>

      <div className="mt-[14px] flex justify-between items-center">
        <H6 className="text-text-body-light">{patientName}</H6>

        <SidebarBadge statNumber={statNumber} />
      </div>

      <div className="mt-[14px] w-full h-[1px] bg-[#E2E7EE]"></div>

      <div className="mt-[14px] flex justify-between items-center">
        <TextBody
          variant="extraSmall"
          weight="semibold"
          className="text-text-natural-gray-2 leading-[16px]"
        >
          {patientFitStatus}
        </TextBody>

        <TextBody
          variant="small"
          className="text-[#868686] !text-[10px] !leading-[100%]"
        >
          {patientJoinDate}
        </TextBody>
      </div>

      <div
        className="mt-[14px] px-[18px] py-3 w-full bg-bg-table-head"
        style={{
          boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
        }}
      >
        <h4 className="text-text-table-head text-[11px] leading-[16px] tracking-[6%] font-semibold uppercase">
          Team
        </h4>
      </div>

      <div
        className="mb-[14px] px-4 w-fit flex justify-start items-start"
        style={{
          boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
        }}
      >
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          teams?.map((team: any, index: number) => {
            return (
              <div key={index} className={`py-3 ${index !== 0 && "pl-3"}`}>
                <div
                  className="relative group p-2 w-fit bg-bg-default-white rounded-full"
                  style={{
                    boxShadow: "7px 8px 34px 0px #1D1C231A",
                  }}
                >
                  <SingleTeam teamName={team?.name} />
                  <div
                    className={`absolute z-[50] top-[64px] left-1 group-hover:opacity-100 opacity-0 transition-all duration-[400ms] ease-in-out`}
                  >
                    <PopUpTextV2 text={`${team?.name} Team`} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ViewPatientDetailsDropdown;
