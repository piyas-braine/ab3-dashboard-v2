import { useState } from "react";
import FilledButton from "@/components/Buttons/FilledButton";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import H2 from "@/components/Typography/H2";
import InviteModalPatientSummary from "@/components/patients/InviteModalPatientSummary";
import InvitePatientCloseIcon from "@/components/Svgs/InvitePatientCloseIcon";

import CrossIcon from "@/components/Svgs/CrossIcon";
import InvitePatientSuccess from "../patients/InvitePatientSuccess";
import InviteNewPatientModal from "./InviteNewPatientModal";
import InviteSendIcon from "@/components/Svgs/InviteSendIcon";
import InviteOldPatient from "@/components/patients/InviteOldPatient";

const InviteOldPatientModal = ({
  setIsInviteOldPatientModalOpen,
}: {
  setIsInviteOldPatientModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [formDataNewPatient, setFormDataNewPatient] = useState(null);

  const [isNewPatientInvite, setIsNewPatientInvite] = useState(false);

  const [isInvitationSent, setIsInvitationSent] = useState(false);

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
        <InviteNewPatientModal
          setIsInviteNewPatientModalOpen={setIsInviteOldPatientModalOpen}
        />
      ) : (
        <>
          <InviteOldPatient
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
            setIsNewPatientInvite={setIsNewPatientInvite}
          />

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
            onClick={() => setIsInvitationSent(true)}
            text="Send Invite"
            className={`!w-fit !px-5 !py-3 ${
              selectedPatient || isNewPatientInvite
                ? ""
                : "!bg-bg-natural-gray-9"
            } rounded-md`}
            icon={<InviteSendIcon />}
            isIcon={true}
            isDisabled={!isNewPatientInvite && !selectedPatient}
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
