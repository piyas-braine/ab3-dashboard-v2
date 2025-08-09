import React from "react";

import avatarImage from "@/assets/images/patients/patient-avatar.png";
import avatarImage2 from "@/assets/images/patients/patient-avatar-2.png";
import avatarImage3 from "@/assets/images/medical-specialist-1.png";
import avatarImage4 from "@/assets/images/patients/patient-avatar-4.png";
import avatarImage5 from "@/assets/images/patients/patient-avatar-5.png";

import SelectPatient from "../patients/SelectPatient";

const SelectPatientModal = ({
    selectedPatient,
    setSelectedPatient
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedPatient: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSelectedPatient: React.Dispatch<React.SetStateAction<any>>
}) => {
  return (
    <div
      className="p-4 pt-[7px] pb-2.5 pr-[7px] absolute z-[800] top-[55px] -left-[3px] max-w-[351px] mx-auto w-full h-[353px] bg-bg-default-white rounded-lg"
      style={{
        boxShadow: "0px 0px 77px 0px #0C1A4B2E",
      }}
    >
      <div className="pt-[9px] pb-1.5 w-full h-full flex flex-col gap-[14px] overflow-y-auto invite-old-patient-modal-scrollbar">
        <SelectPatient
          email="jadwiga_kulinska@gmail.com"
          name="Jadwiga Kulinska"
          image={avatarImage}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="dr_jhone123@gmail.com"
          name="Dr Jhone"
          image={avatarImage4}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="magdalena_jhblonka@gmail.com"
          name="Magdalena Jablonka"
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="heather_wright@gmail.com"
          name="Heather Wright"
          image={avatarImage3}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="christ_jhonathan@gmail.com"
          name="Christ Jonathan"
          image={avatarImage5}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="darrell_steward@gmail.com"
          name="Darrell Steward"
          image={avatarImage2}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="jadwiga_kulinska@gmail.com"
          name="Jadwiga Kulinska"
          image={avatarImage}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="dr_jhone123@gmail.com"
          name="Dr Jhone"
          image={avatarImage4}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="magdalena_jhblonka@gmail.com"
          name="Magdalena Jablonka"
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="heather_wright@gmail.com"
          name="Heather Wright"
          image={avatarImage3}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="christ_jhonathan@gmail.com"
          name="Christ Jonathan"
          image={avatarImage5}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <SelectPatient
          email="magdalena_jhblonka@gmail.com"
          name="Magdalena Jablonka"
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
      </div>
    </div>
  );
};

export default SelectPatientModal;
