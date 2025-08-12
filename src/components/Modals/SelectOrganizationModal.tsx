import React from "react";
import InputSearchIcon from "../Svgs/InputSearchIcon";
import SelectOrganization from "../patients/SelectOrganization.";

import organization1 from "@/assets/images/patients/organization-2.png";
import organization2 from "@/assets/images/patients/organization-1.png";
import organization3 from "@/assets/images/patients/organization-3.png";
import organization4 from "@/assets/images/organization-5.png";
import organization5 from "@/assets/images/organization-6.png";
import organization6 from "@/assets/images/organization-4.png";

const SelectOrganizationModal = ({
  selectedOrganization,
  setSelectedOrganization,
  setIsSelectOrganizationModalOpen,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedOrganization: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedOrganization: React.Dispatch<React.SetStateAction<any>>;
  setIsSelectOrganizationModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  const [searchOrganization, setSearchOrganization] = React.useState("");

  return (
    <div
      className="p-4 w-[263px] max-h-[240px] [@media(min-height:600px)]:max-h-[368px] absolute z-[500] top-2 -left-[14px] bg-bg-default-white rounded-lg"
      style={{ boxShadow: "0px 0px 77px 0px #0C1A4B2E" }}
    >
      <div
        className={`relative z-10 bg-bg-default-white rounded-md`}
        style={{
          boxShadow: "0px 0px 1px 0px #32324733, 0px 1px 2px 0px #32324714",
        }}
      >
        <input
          type="search"
          className={`py-[11px] px-[17px] pl-[41px] w-full`}
          value={searchOrganization || ""}
          onChange={(e) => setSearchOrganization(e.target.value)}
        />

        <label
          htmlFor="searchTeam"
          className="absolute -z-10 top-1/2 -translate-y-1/2 left-3 flex justify-start items-center gap-3"
        >
          <div className="w-4 h-4">
            <InputSearchIcon />
          </div>

          {!searchOrganization && (
            <span className="text-text-input-placeholder-default text-[15px] leading-[15px] font-medium">
              Search ...
            </span>
          )}
        </label>
      </div>

      <div className="mt-[15px] w-full max-h-[150px] [@media(min-height:600px)]:max-h-[282px] h-full overflow-y-auto select-organization-scrollbar">
        <div className="-mt-1 space-y-[14px]">
          <SelectOrganization
            organizationName="Manchester United"
            organizationImage={organization1}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Enhanced"
            organizationImage={organization2}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="England"
            organizationImage={organization3}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Liverpool"
            organizationImage={organization4}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Aston Villa"
            organizationImage={organization5}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Arsenal"
            organizationImage={organization6}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />

          <SelectOrganization
            organizationName="Manchester United"
            organizationImage={organization1}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Enhanced"
            organizationImage={organization2}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="England"
            organizationImage={organization3}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Liverpool"
            organizationImage={organization4}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Aston Villa"
            organizationImage={organization5}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
          <SelectOrganization
            organizationName="Arsenal"
            organizationImage={organization6}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            setIsSelectOrganizationModalOpen={setIsSelectOrganizationModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOrganizationModal;
