import Image from "next/image";
import React from "react";

import medicalSpecialistImage from "@/assets/images/medical-specialist-1.png";

const MedicalSpecialistCard = () => {
  return (
    <div>
      <div className="relative w-9 h-9">
        <Image src={medicalSpecialistImage} alt={"Medical Specialist"} />

        <div className="absolute -top-1 -right-1 bg-bg-default-white w-5 h-5 flex justify-center items-center rounded-full">
          <div className="bg-bg-default-success w-[6.65px] h-[6.65px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MedicalSpecialistCard;
