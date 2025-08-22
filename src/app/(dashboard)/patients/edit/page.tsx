import H3 from "@/components/Typography/H3";
import React from "react";

import profilePicAvatarImage from "@/assets/images/profile-avatar.png";
import Image from "next/image";
import H2 from "@/components/Typography/H2";
import EditIcon from "@/components/Svgs/EditIcon";
import TextBody from "@/components/Typography/TextBody";
import VerifiedIcon from "@/components/Svgs/VerifiedIcon";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import CrossIcon from "@/components/Svgs/CrossIcon";
import FilledButton from "@/components/Buttons/FilledButton";
import PlusIcon from "@/components/Svgs/PlusIcon";
import BasicProfileInfo from "@/components/patients/edit/BasicProfileInfo";
import EmergencyContact from "@/components/patients/edit/EmergencyContact";
import NHSInfo from "@/components/patients/edit/NHSInfo";

const EditPatientProfilePage = () => {
  return (
    <div className="p-[30px] pb-12">
      <section>
        <H3 className="text-text-heading-dark">Profile Picture</H3>

        <div
          className="mt-[18px] p-[30px] w-fit bg-bg-default-white flex justify-start items-center gap-6 rounded-2xl"
          style={{
            boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
          }}
        >
          <div className="w-[82px] h-[82px]">
            <Image
              src={profilePicAvatarImage}
              alt="Profile Picture"
              width={82}
              height={82}
              className="w-full h-full rounded-full"
            />
          </div>

          <div>
            <H2 className="text-text-heading-dark">Kaily Nickson</H2>

            <div className="mt-1.5 flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-8">
              <div className="flex justify-start items-center gap-2.5">
                <div className="w-4 h-4">
                  <EditIcon />
                </div>

                <TextBody
                  variant="small"
                  weight="semibold"
                  className="text-text-body-muted"
                >
                  Edit Profile
                </TextBody>
              </div>

              <div className="flex justify-start items-center gap-2">
                <div className="w-4 h-4">
                  <VerifiedIcon />
                </div>

                <TextBody
                  variant="small"
                  weight="semibold"
                  className="text-text-default-success"
                >
                  Edit Profile
                </TextBody>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BasicProfileInfo />

      <EmergencyContact />

      <NHSInfo />

      <section
        className="mt-[18px] px-[30px] pt-[18px] pb-3 bg-bg-default-white flex justify-end items-center gap-2.5 rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <OutlineButton
          text="Cancel"
          icon={<CrossIcon className="!fill-[#16192C]" />}
          isIcon={true}
          className="!w-fit text-text-default-dark border !border-border-light !px-[20px] !py-3"
        />

        <FilledButton
          text="Save"
          icon={<PlusIcon />}
          isIcon={true}
          className="!w-fit !px-[20px] !py-3"
        />
      </section>
    </div>
  );
};

export default EditPatientProfilePage;
