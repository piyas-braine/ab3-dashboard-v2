import React, { useEffect, useRef, useState } from "react";
import SelectInputV3 from "@/components/Inputs/SelectInputV3";
import SelectTeamModal from "@/components/Modals/SelectTeamModal";

const InviteModalPatientTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState("Select Team");
  const [isSelectTeamModalOpen, setIsSelectTeamModalOpen] = useState(false);

  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    width: 0,
  });

  const selectTeamInputRef = useRef<HTMLInputElement>(null);

  const teamModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSelectTeamModalOpen && selectTeamInputRef.current) {
      const rect = selectTeamInputRef.current.getBoundingClientRect();

      setDropdownPos({
        top: rect.bottom,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [isSelectTeamModalOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        teamModalRef.current &&
        !teamModalRef.current.contains(e.target as Node)
      ) {
        setIsSelectTeamModalOpen(false); // close the modal
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-start items-center gap-2.5">
      <h4 className="text-[#595959] text-[12px] leading-[100%] font-semibold">
        Team
      </h4>

      <div>
        <div ref={selectTeamInputRef}>
          <SelectInputV3
            placeholder={selectedTeam}
            onClick={() => setIsSelectTeamModalOpen(true)}
          />
        </div>

        {isSelectTeamModalOpen &&
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
              <SelectTeamModal
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
                setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
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
              <SelectTeamModal
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
                setIsSelectTeamModalOpen={setIsSelectTeamModalOpen}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default InviteModalPatientTeam;
