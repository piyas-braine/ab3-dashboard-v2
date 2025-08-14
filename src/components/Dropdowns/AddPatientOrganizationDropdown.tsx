import React from "react";
import TextInputV2 from "../Inputs/TextInputV2";
import CrossIcon2 from "../Svgs/CrossIcon2";
import Image from "next/image";
import AddPatientOrganizationDropdownItem from "./AddPatientOrganizationDropdownItem";

import organizationImage6 from "@/assets/images/organization-6.png";
import organizationImage7 from "@/assets/images/organization-7.png";
import organizationImage8 from "@/assets/images/organization-8.png";
import organizationImage9 from "@/assets/images/organization-9.png";
import organizationImage10 from "@/assets/images/organization-10.png";
import CrossIcon3 from "../Svgs/CrossIcon3";
import PopUpTextV2 from "../Popups/PopupTextV2";

const AddPatientOrganizationDropdown = ({
  organizations,
  setIsAddOrganizationOpen,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  organizations: any;
  setIsAddOrganizationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="p-4 w-[320px] sm:w-[368px] bg-bg-default-white rounded-lg"
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
          Organization
        </h4>

        <div
          onClick={() => setIsAddOrganizationOpen(false)}
          className="w-3 h-3 cursor-pointer"
        >
          <CrossIcon2 />
        </div>
      </div>

      <div className="mb-[14px] flex justify-start items-start">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          organizations?.map((organization: any, index: number) => {
            return (
              <div
                key={index}
                className="px-4 py-3"
                style={{
                  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
                }}
              >
                <div
                  className="relative group px-2.5 py-2 w-fit bg-bg-default-white rounded-full"
                  style={{
                    boxShadow: "7px 8px 34px 0px #1D1C231A",
                  }}
                >
                  <div className="w-[31px] h-9">
                    <Image
                      src={organization?.image}
                      alt={organization?.name}
                      width={31}
                      height={36}
                      className="w-full h-full"
                    />

                    <div className="absolute -top-[1px] -right-[7px] bg-bg-primary-blue w-4 h-4 rounded-full flex justify-center items-center">
                      <div className="w-2 h-2">
                        <CrossIcon3 />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute z-[50] top-[64px] left-[7px] group-hover:opacity-100 opacity-0 transition-all duration-[400ms] ease-in-out`}
                  >
                    <PopUpTextV2 text={organization?.name} />
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
        iconClassName="!left-[17px]"
      />

      <div className="mt-1 max-h-[216px] h-[216x] overflow-y-auto add-organization-scrollbar">
        <div className="pt-1 space-y-2">
          <AddPatientOrganizationDropdownItem
            image={organizationImage7}
            name="AFC Bournemouth"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage8}
            name="Brentford"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage9}
            name="Brighton & Hove Albion"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage10}
            name="Leeds United"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage6}
            name="Aston Villa"
          />

          <AddPatientOrganizationDropdownItem
            image={organizationImage7}
            name="AFC Bournemouth"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage8}
            name="Brentford"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage9}
            name="Brighton & Hove Albion"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage10}
            name="Leeds United"
          />
          <AddPatientOrganizationDropdownItem
            image={organizationImage6}
            name="Aston Villa"
          />
        </div>
      </div>
    </div>
  );
};

export default AddPatientOrganizationDropdown;
