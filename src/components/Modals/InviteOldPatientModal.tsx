import { useEffect, useRef, useState } from "react";
import FilledButton from "@/components/Buttons/FilledButton";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import InputSearchIcon from "@/components/Svgs/InputSearchIcon";
import H2 from "@/components/Typography/H2";
import SelectPatientModal from "@/components/Modals/SelectPatientModal";
import WarningIcon from "@/components/Svgs/WarningIcon";
import TextBody from "@/components/Typography/TextBody";
import InviteModalPatientSummary from "@/components/patients/InviteModalPatientSummary";
import InvitePatientCloseIcon from "@/components/Svgs/InvitePatientCloseIcon";

import CrossIcon from "@/components/Svgs/CrossIcon";
import InvitePatientSuccess from "@/components/patients/InvitePatientSuccess";
import InviteSendIcon from "@/components/Svgs/InviteSendIcon";

const InviteOldPatientModal = ({
  setIsInviteOldPatientModalOpen,
}: {
  setIsInviteOldPatientModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const selectPatientInputRef = useRef<HTMLInputElement>(null);
  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    left: -400,
    width: 0,
    zIndex: -100,
  });

  const [isSelectPatientModalOpen, setIsSelectPatientModalOpen] =
    useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [isNewPatientInvite, setIsNewPatientInvite] = useState(false);

  const [isInvitationSent, setIsInvitationSent] = useState(false);

  useEffect(() => {
    if (isSelectPatientModalOpen && selectPatientInputRef.current) {
      const rect = selectPatientInputRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom, // account for page scroll
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
  }, [isSelectPatientModalOpen]);

  return (
    <div
      className={`relative max-w-[1000px] mx-auto my-[122px] p-[30px] w-full max-h-[65vh] bg-bg-default-white rounded-lg overflow-y-auto`}
      style={{
        boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
    >
      <H2 className="text-text-default-dark">Invite New Patient</H2>

      {isInvitationSent ? (
        <InvitePatientSuccess />
      ) : isNewPatientInvite ? (
        <div>Invite New Patient</div>
      ) : (
        <>
          <div className="mt-[29px]">
            <h4 className="text-text-body-muted text-[16px] leading-[23px] font-semibold">
              Email Address
            </h4>

            <div className="mt-[9px] flex flex-col md:flex-row justify-start md:items-end gap-8">
              <div className={`relative z-10 max-w-[454px] w-full h-[55px]`}>
                <input
                  type={"email"}
                  className={`py-4 px-3 w-full h-full bg-[#F4F6F9] rounded-md placeholder-text-[#B4B4B4] text-text-natural-gray-2 text-[15px] leading-[15px] font-medium focus:outline-none`}
                  name="patientEmail"
                  style={{
                    boxShadow:
                      "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                  }}
                  placeholder="Select Patient"
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  value={(selectedPatient as any)?.email}
                  onFocus={() => setIsSelectPatientModalOpen(true)}
                  onBlur={() => {
                    setTimeout(() => setIsSelectPatientModalOpen(false), 150);
                  }}
                  ref={selectPatientInputRef}
                />

                <div className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4">
                  <InputSearchIcon isBlue={true} />
                </div>

                {isSelectPatientModalOpen && (
                  <div
                    style={{
                      position: "fixed",
                      top: dropdownPos.top,
                      left: dropdownPos.left,
                      width: dropdownPos.width,
                      zIndex: dropdownPos.zIndex,
                    }}
                  >
                    <SelectPatientModal
                      selectedPatient={selectedPatient}
                      setSelectedPatient={setSelectedPatient}
                      setIsNewPatientInvite={setIsNewPatientInvite}
                    />
                  </div>
                )}
              </div>

              {selectedPatient && (
                <div
                  className="py-5 px-6 w-fit bg-bg-default-white flex justify-start items-center gap-4 rounded-xl"
                  style={{
                    boxShadow:
                      "0px 3px 8px -1px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                  }}
                >
                  <div className="w-6 h-6">
                    <WarningIcon />
                  </div>

                  <TextBody
                    variant="small"
                    className="text-text-body-light sm:text-nowrap"
                  >
                    Patient is in the process of transferring
                  </TextBody>
                </div>
              )}
            </div>
          </div>

          {selectedPatient && (
            <InviteModalPatientSummary selectedPatient={selectedPatient} />
          )}
        </>
      )}

      <div className="mt-[38px] flex justify-end items-center gap-2.5">
        <OutlineButton
          text="Cancel"
          className={`!w-fit !py-[11px] !px-[19px] ${
            selectedPatient
              ? ""
              : "!border-border-natural-gray-8 !text-text-natural-gray-8"
          }`}
          icon={
            <CrossIcon
              className={`${
                selectedPatient && "fill-[#16192C] stroke-[#16192C]"
              }`}
            />
          }
          isIcon={true}
          onClick={() => setIsInviteOldPatientModalOpen(false)}
        />
        {!isInvitationSent && (
          <FilledButton
            onClick={() => selectedPatient && setIsInvitationSent(true)}
            text="Send Invite"
            className={`!w-fit !px-5 !py-3 ${
              selectedPatient ? "" : "!bg-bg-natural-gray-9"
            } rounded-md`}
            icon={<InviteSendIcon />}
            isIcon={true}
            isDisabled={selectedPatient ? false : true}
          />
        )}
      </div>

      <div
        onClick={() => setIsInviteOldPatientModalOpen(false)}
        className="absolute top-[30px] right-[30px] w-5 h-5 cursor-pointer"
      >
        <InvitePatientCloseIcon />
      </div>
    </div>
  );
};

export default InviteOldPatientModal;
