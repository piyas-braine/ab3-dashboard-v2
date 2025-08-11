import React from "react";
import InputSearchIcon from "../Svgs/InputSearchIcon";
import SelectTeam from "../patients/SelectTeam";

const SelectTeamModal = ({
  selectedTeam,
  setSelectedTeam,
  setIsSelectTeamModalOpen,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedTeam: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedTeam: React.Dispatch<React.SetStateAction<any>>;
  setIsSelectTeamModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchTeam, setSearchTeam] = React.useState("");

  return (
    <div
      className="p-4 w-[263px] max-h-[238px] absolute z-[500] top-2 -left-[14px] bg-bg-default-white rounded-lg"
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
          value={searchTeam || ""}
          onChange={(e) => setSearchTeam(e.target.value)}
        />

        <label
          htmlFor="searchTeam"
          className="absolute -z-10 top-1/2 -translate-y-1/2 left-3 flex justify-start items-center gap-3"
        >
          <div className="w-4 h-4">
            <InputSearchIcon />
          </div>

          {!searchTeam && (
            <span className="text-text-input-placeholder-default text-[15px] leading-[15px] font-medium">
              Search ...
            </span>
          )}
        </label>
      </div>

      <div className="mt-[14px] w-full max-h-[152px] h-full overflow-y-auto select-team-scrollbar">
        <div className="-mt-1 space-y-[14px]">
          <SelectTeam
            teamName="U18 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U19 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U20 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U21 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U22 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U18 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U19 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U20 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U21 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />

          <SelectTeam
            teamName="U22 Team"
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectTeamModal;
