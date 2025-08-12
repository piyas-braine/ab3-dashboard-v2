import React from "react";

import avatarImage from "@/assets/images/patients/patient-avatar.png";
import avatarImage2 from "@/assets/images/patients/patient-avatar-2.png";
import avatarImage3 from "@/assets/images/medical-specialist-1.png";
import avatarImage4 from "@/assets/images/patients/patient-avatar-4.png";
import avatarImage5 from "@/assets/images/patients/patient-avatar-5.png";

import SelectPatient from "../patients/SelectPatient";
import PlusIcon from "../Svgs/PlusIcon";
import ButtonBase from "../Typography/ButtonBase";

const SelectPatientModal = ({
  selectedPatient,
  setSelectedPatient,
  setIsNewPatientInvite,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedPatient: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedPatient: React.Dispatch<React.SetStateAction<any>>;
  setIsNewPatientInvite: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="p-4 pt-[7px] pb-2.5 pr-[7px] absolute z-50 -left-[3px] -ml-7 min-[400px]:ml-0 min-w-[351px] sm:max-w-[351px] max-h-[403px] mx-auto w-full h-[30vh] [@media(min-height:540px)]:h-[40vh] [@media(min-height:680px)]:h-[50vh] bg-bg-default-white rounded-lg"
      style={{
        boxShadow: "0px 0px 77px 0px #0C1A4B2E",
      }}
    >
      <div className="pt-[9px] pb-1.5 max-w-full w-full max-h-[336px] h-[68%] [@media(min-height:520px)]h-[75%] [@media(min-height:600px)]:h-[82%] [@media(min-height:680px)]:h-[87.5%] flex flex-col gap-[14px] overflow-y-auto invite-old-patient-modal-scrollbar">
        <SelectPatient
          id={1}
          email="jadwiga_kulinska@gmail.com"
          name="Jadwiga Kulinska"
          image={avatarImage}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={2}
          email="dr_jhone123@gmail.com"
          name="Dr Jhone"
          image={avatarImage4}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={3}
          email="magdalena_jhblonka@gmail.com"
          name="Magdalena Jablonka"
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={4}
          email="heather_wright@gmail.com"
          name="Heather Wright"
          image={avatarImage3}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={5}
          email="christ_jhonathan@gmail.com"
          name="Christ Jonathan"
          image={avatarImage5}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={6}
          email="darrell_steward@gmail.com"
          name="Darrell Steward"
          image={avatarImage2}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={7}
          email="jadwiga_kulinska@gmail.com"
          name="Jadwiga Kulinska"
          image={avatarImage}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={8}
          email="dr_jhone123@gmail.com"
          name="Dr Jhone"
          image={avatarImage4}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={9}
          email="magdalena_jhblonka@gmail.com"
          name="Magdalena Jablonka"
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={10}
          email="heather_wright@gmail.com"
          name="Heather Wright"
          image={avatarImage3}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={11}
          email="christ_jhonathan@gmail.com"
          name="Christ Jonathan"
          image={avatarImage5}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          id={12}
          email="magdalena_jhblonka@gmail.com"
          name="Magdalena Jablonka"
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
      </div>

      <button
        onClick={() => {
          setIsNewPatientInvite(true);
        }}
        className="mt-2 mr-4 w-full sm:w-[319px] py-3 px-5 rounded-[6px] bg-bg-primary-blue flex justify-center items-center gap-2 cursor-pointer"
      >
        <div className="w-3 h-3">
          <PlusIcon />
        </div>
        <ButtonBase className="text-text-default-white">
          Invite New Patient
        </ButtonBase>
      </button>
    </div>
  );
};

export default SelectPatientModal;
