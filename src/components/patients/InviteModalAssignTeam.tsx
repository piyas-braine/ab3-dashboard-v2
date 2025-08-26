import React, { useEffect, useRef, useState } from "react";

import SelectAssignTeamModal from "../Modals/SelectAssignTeam";
import { Control, Controller } from "react-hook-form";

import { FormValues } from "../Modals/InviteNewPatientModal";
import SelectDownArrowIcon from "../Svgs/SelectDownArrowIcon";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InviteModalAssignPatientTeam = ({control}:{control: Control<FormValues, any, FormValues>} ) => {
  const [selectedAssignTeam, setSelectedAssignTeam] = useState("Assign Team");
  const [isSelectAssignTeamModalOpen, setIsSelectAssignTeamModalOpen] = useState(false);

  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    width: 0,
  });

  const selectTeamInputRef = useRef<HTMLInputElement>(null);

  const teamModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSelectAssignTeamModalOpen && selectTeamInputRef.current) {
      const rect = selectTeamInputRef.current.getBoundingClientRect();

      setDropdownPos({
        top: rect.bottom,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [isSelectAssignTeamModalOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        teamModalRef.current &&
        !teamModalRef.current.contains(e.target as Node)
      ) {
        setIsSelectAssignTeamModalOpen(false); // close the modal
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-start items-center gap-2.5">
      <div>
        <div ref={selectTeamInputRef}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState: { error } }) => (
              <div className="relative z-10 max-w-[454px] w-full h-[55px]  mb-5">
                <label className="text-text-body-muted text-[16px] leading-[23px] font-semibold mb-20">
                  Assign Team
                </label>
                <input
                  type="text"
                  {...field}
                   className={`mt-2 py-2 px-3 w-[450px] h-[50px] bg-[#F4F6F9] rounded-md placeholder-text-[#B4B4B4] text-text-natural-gray-2 text-[15px] leading-[15px] font-medium focus:outline-none ${error ? "border border-red-500" : ""
                            }`}
                  style={{
                    boxShadow:
                      "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                  }}
                  value={selectedAssignTeam}
                  onClick={() => setIsSelectAssignTeamModalOpen(true)}
                />
                <div className="absolute top-[50px] -translate-y-1/2 right-4 w-4 h-4">
                  <SelectDownArrowIcon />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </div>
            )}
          />
        </div>

        {isSelectAssignTeamModalOpen &&
          (window.innerHeight > 750 ? (
            <div
              style={{
                position: "fixed",
                top: dropdownPos.top,
                left: dropdownPos.left,
                width: dropdownPos.width,
                zIndex: 9999,
              }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
              ref={teamModalRef}
            >
              <SelectAssignTeamModal
                selectedTeam={selectedAssignTeam}
                setSelectedTeam={setSelectedAssignTeam}
                setIsSelectAssignTeamModalOpen={setIsSelectAssignTeamModalOpen}
              />
            </div>
          ) : (
            <div
              style={{
                position: "fixed",
                top: dropdownPos.top - 238 - 38,
                left: dropdownPos.left,
                width: dropdownPos.width,
                zIndex: 9999,
              }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
              ref={teamModalRef}
            >
              <SelectAssignTeamModal
                selectedTeam={selectedAssignTeam}
                setSelectedTeam={setSelectedAssignTeam}
                setIsSelectAssignTeamModalOpen={setIsSelectAssignTeamModalOpen}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default InviteModalAssignPatientTeam;
