import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import SelectInputV3 from "../Inputs/SelectInputV3";
import SelectOrganizationModal from "../Modals/SelectOrganizationModal";
import TickIcon from "../Svgs/TickIcon";

const InviteModalPatientOrganization = () => {
  const searchParams = useSearchParams();

  const role = searchParams.get("role");

  const [isSelectOrganizationModalOpen, setIsSelectOrganizationModalOpen] =
    useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(
    "Select Organization"
  );

  const selectOrganizationInputRef = useRef<HTMLInputElement>(null);
  const organizationModalRef = useRef<HTMLDivElement>(null);

  const [dropdownPosOrganization, setDropdownPosOrganization] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (isSelectOrganizationModalOpen && selectOrganizationInputRef.current) {
      const rect = selectOrganizationInputRef.current.getBoundingClientRect();

      const modalHeight = organizationModalRef.current?.getBoundingClientRect();

      console.log(modalHeight);

      setDropdownPosOrganization({
        top: rect.bottom,
        bottom: rect.bottom + rect.height,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [isSelectOrganizationModalOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        organizationModalRef.current &&
        !organizationModalRef.current.contains(e.target as Node)
      ) {
        setIsSelectOrganizationModalOpen(false); // close the modal
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {role === "Super Admin" ? (
        <div className="relative flex justify-start items-center gap-2.5">
          <h4 className="text-[#595959] text-[12px] leading-[100%] font-semibold">
            Organization:
          </h4>

          <div>
            <div ref={selectOrganizationInputRef}>
              <SelectInputV3
                placeholder={selectedOrganization}
                onClick={() => setIsSelectOrganizationModalOpen(true)}
              />
            </div>

            {isSelectOrganizationModalOpen &&
              (window.innerHeight > 1150 ? (
                <div
                  style={{
                    position: "fixed",
                    top: dropdownPosOrganization.top,
                    left: dropdownPosOrganization.left,
                    width: dropdownPosOrganization.width,
                    zIndex: 9999,
                  }}
                  onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
                >
                  <SelectOrganizationModal
                    selectedOrganization={selectedOrganization}
                    setSelectedOrganization={setSelectedOrganization}
                    setIsSelectOrganizationModalOpen={
                      setIsSelectOrganizationModalOpen
                    }
                  />
                </div>
              ) : (
                <div
                  style={{
                    position: "fixed",
                    top:
                      window.innerHeight > 680
                        ? dropdownPosOrganization.top - 368 - 38
                        : dropdownPosOrganization.top - 240 - 38,
                    left: dropdownPosOrganization.left,
                    width: dropdownPosOrganization.width,
                    zIndex: 9999,
                  }}
                  onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
                  ref={organizationModalRef}
                >
                  <SelectOrganizationModal
                    selectedOrganization={selectedOrganization}
                    setSelectedOrganization={setSelectedOrganization}
                    setIsSelectOrganizationModalOpen={
                      setIsSelectOrganizationModalOpen
                    }
                  />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-start items-center gap-2.5">
          <div className="w-5 h-5 rounded-[3px] bg-bg-default-primary flex justify-center items-center">
            <div className="w-[10.52px] h-2">
              <TickIcon className="fill-white" />
            </div>
          </div>

          <h4 className="text-[#595959] text-[12px] leading-[100%] font-semibold">
            Invite to This Organization
          </h4>
        </div>
      )}
    </div>
  );
};

export default InviteModalPatientOrganization;
