import Image from "next/image";
import React from "react";

import TextBody from "@/components/Typography/TextBody";
import SidebarChatIcon from "@/components/Svgs/SidebarChatIcon";
import H5 from "@/components/Typography/H5";
import { TMedicalSpecialistCardProps } from "@/types/TMedicalSpecialistCard";

const MedicalSpecialistCard = ({
  medicalSpecialistImage,
  medicalSpecialistName,
  medicalSpecialistLocation,
  isActive = false,
}: TMedicalSpecialistCardProps) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex justify-start items-center gap-4">
        <div
          className={`relative w-9 h-9 ${
            !medicalSpecialistImage &&
            "flex justify-center items-center bg-bg-default-warning-soft"
          } rounded-full`}
        >
          {medicalSpecialistImage ? (
            <Image
              src={medicalSpecialistImage}
              alt={medicalSpecialistName}
              width={36}
              height={36}
              className="w-full h-full"
            />
          ) : (
            <H5 className="text-text-default-warning">MJ</H5>
          )}

          {isActive && (
            <div className="absolute -top-[1.5px] -right-[1.5px] bg-bg-default-white w-[14px] h-[14px] flex justify-center items-center rounded-full">
              <div className="bg-bg-default-success w-[6.65px] h-[6.65px] rounded-full"></div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start">
          <TextBody
            variant="small"
            weight="semibold"
            className="text-text-default-white !text-[14px] !leading-[23px]"
          >
            {medicalSpecialistName}
          </TextBody>

          <TextBody variant="extraSmall" className="text-[#8AAAFF]">
            {medicalSpecialistLocation}
          </TextBody>
        </div>
      </div>

      <div className="w-4 h-4">
        <SidebarChatIcon />
      </div>
    </div>
  );
};

export default MedicalSpecialistCard;
