import TextInputV2 from "../Inputs/TextInputV2";
import AddPatientTeamDropdownItem from "./AddPatientTeamDropdownItem";

import AddStaffDropdownItem from "./AddStaffDropdownItem";

import patientImage1 from "@/assets/images/patients/patient-avatar.png";
import patientImage2 from "@/assets/images/patients/patient-avatar-4.png";
import patientImage3 from "@/assets/images/medical-specialist-1.png";
import patientImage5 from "@/assets/images/patients/patient-avatar-9.png";
import patientImage6 from "@/assets/images/patients/patient-avatar-10.png";
import CrossIcon2 from "../Svgs/CrossIcon2";

const AddTeamDropdown = ({ teams }: { teams: string[] }) => {
  const staffs = [
    { name: "Jadwiga Kulinska", image: patientImage1 },
    { name: "Jhone Levis", image: patientImage2 },
  ];

  return (
    <div
      className="sm:max-w-[490px] sm:min-w-[490px] max-h-[90vh] py-4 w-full bg-bg-default-white overflow-y-auto add-team-2-scrollbar rounded-lg"
      style={{ boxShadow: "0px 0px 77px 0px #0C1A4B2E" }}
    >
      <div className="px-4 flex justify-between items-start">
        <div
          className="flex-1 px-6 py-3 w-full bg-bg-table-head"
          style={{
            boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
          }}
        >
          <h4 className="text-text-table-head text-[11px] leading-[16px] tracking-[6%] font-semibold uppercase">
            Team
          </h4>
        </div>

        <div
          className="flex-1 px-6 py-3 w-full bg-bg-table-head"
          style={{
            boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
          }}
        >
          <h4 className="text-text-table-head text-[11px] leading-[16px] tracking-[6%] font-semibold uppercase">
            Staff
          </h4>
        </div>
      </div>

      <div className="px-4 flex justify-between items-start">
        <div className="flex-1">
          {teams?.map((team, index) => {
            return (
              <div
                key={index}
                className="px-6 py-3 w-full"
                style={{
                  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
                }}
              >
                <h4 className="text-text-body-light text-[11px] leading-[16px] tracking-[6%] font-semibold capitalize">
                  {team} Team
                </h4>
              </div>
            );
          })}
        </div>

        <div className="flex-1">
          {staffs?.map((staff, index) => {
            return (
              <div
                key={index}
                className="pl-6 pr-1 py-3 w-full flex justify-between items-center"
                style={{
                  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
                }}
              >
                <h4 className="text-text-body-light text-[11px] leading-[16px] tracking-[6%] font-semibold capitalize">
                  {staff.name}
                </h4>

                <div className="w-3 h-3 cursor-pointer">
                  <CrossIcon2 />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[14px] pl-4 pr-1 flex flex-col sm:flex-row justify-between items-start gap-[11px]">
        <div className="flex-1">
          <div className="pr-[3px]">
            <TextInputV2
              name="searchOrganization"
              placeholder="Search..."
              isIcon={true}
              className="!py-[14px] !pl-[41px]"
              iconClassName="left-[17px]"
            />
          </div>

          <div className="mt-[11px] max-h-[309px] h-[309px] overflow-y-auto add-team-2-scrollbar">
            <div className="-mt-[3px] space-y-2">
              <AddPatientTeamDropdownItem
                name="U20"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U19"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U18"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U21"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U20"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U19"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U18"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U21"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />

              <AddPatientTeamDropdownItem
                name="U20"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U19"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U18"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U21"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U20"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U19"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U18"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
              <AddPatientTeamDropdownItem
                name="U21"
                className="!w-8 !h-8 !text-[10px] !leading-[100%] !font-bold"
                teams={teams}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 pr-1">
          <div className="pr-3">
            <TextInputV2
              name="searchOrganization"
              placeholder="Search..."
              isIcon={true}
              className="!py-[14px] !pl-[41px]"
              iconClassName="!left-[17px]"
            />
          </div>

          <div className="mt-[11px] max-h-[309px] h-[309x] overflow-y-auto add-team-2-scrollbar">
            <div className="pt-[3px] space-y-[14px] pr-1.5">
              <AddStaffDropdownItem
                image={patientImage1}
                name="Jadwiga Kulinska"
              />

              <AddStaffDropdownItem image={patientImage2} name="Jhone Levis" />

              <AddStaffDropdownItem
                image={patientImage3}
                name="Heather Wright"
              />

              <AddStaffDropdownItem name="Magdalena Jablonka" />

              <AddStaffDropdownItem
                image={patientImage5}
                name="Christ Jonathan"
              />
              <AddStaffDropdownItem
                image={patientImage6}
                name="Naithen Mickal"
              />

              <AddStaffDropdownItem name="Magdalena Jablonka" />

              <AddStaffDropdownItem
                image={patientImage5}
                name="Christ Jonathan"
              />
              <AddStaffDropdownItem
                image={patientImage6}
                name="Naithen Mickal"
              />

              <AddStaffDropdownItem
                image={patientImage1}
                name="Jadwiga Kulinska"
              />

              <AddStaffDropdownItem image={patientImage2} name="Jhone Levis" />

              <AddStaffDropdownItem
                image={patientImage3}
                name="Heather Wright"
              />

              <AddStaffDropdownItem name="Magdalena Jablonka" />

              <AddStaffDropdownItem
                image={patientImage5}
                name="Christ Jonathan"
              />
              <AddStaffDropdownItem
                image={patientImage6}
                name="Naithen Mickal"
              />

              <AddStaffDropdownItem name="Magdalena Jablonka" />

              <AddStaffDropdownItem
                image={patientImage5}
                name="Christ Jonathan"
              />
              <AddStaffDropdownItem
                image={patientImage6}
                name="Naithen Mickal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamDropdown;
