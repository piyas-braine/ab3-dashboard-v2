import { useState } from "react";
import FilledButton from "../Buttons/FilledButton";
import OutlineButton from "../Buttons/OutlinedButton";
import InputSearchIcon from "../Svgs/InputSearchIcon";
import H2 from "../Typography/H2";
import SelectPatientModal from "./SelectPatientModal";
import WarningIcon from "../Svgs/WarningIcon";
import TextBody from "../Typography/TextBody";
import InviteModalPatientSummary from "../patients/InviteModalPatientSummary";
import InvitePatientCloseIcon from "../Svgs/InvitePatientCloseIcon";
import Image from "next/image";

import inviteSuccessImage from "@/assets/images/invite-success.png";

import CrossIcon from "../Svgs/CrossIcon";

const InviteOldPatientModal = ({
  setIsInviteOldPatientModalOpen,
}: {
  setIsInviteOldPatientModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSelectPatientModalOpen, setIsSelectPatientModalOpen] =
    useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [isInvitationSent, setIsInvitationSent] = useState(false);

  // console.log(selectedPatient);

  return (
    <div
      className={`relative max-w-[1000px] mx-auto my-[122px] p-[30px] w-full max-h-[70vh] bg-bg-default-white rounded-lg ${selectedPatient ? "overflow-y-auto" : ""}`}
      style={{
        boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
    >
      <H2 className="text-text-default-dark">Invite New Patient</H2>

      {!isInvitationSent ? (
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
              />

              <div className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4">
                <InputSearchIcon isBlue={true} />
              </div>

              {isSelectPatientModalOpen && (
                <SelectPatientModal
                  selectedPatient={selectedPatient}
                  setSelectedPatient={setSelectedPatient}
                />
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
      ) : (
        <div className="mt-[32px] max-w-[432px] mx-auto flex flex-col items-center">
          <div className="w-[121px] h-[120px]">
            <Image
              src={inviteSuccessImage}
              alt="Invite Success"
              width={121}
              height={120}
              className="w-full h-full rounded-full"
            />
          </div>

          <H2 className="mt-[51px] text-text-default-dark">
            Invite Sent Success.
          </H2>

          <p className="text-[16px] leading-[150%] tracking-[-1.1%] font-medium text-center">
            Your invitation sent to the patient successfully, he can check
            through email.
          </p>
        </div>
      )}

      {!isInvitationSent && selectedPatient && (
        <InviteModalPatientSummary selectedPatient={selectedPatient} />
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
