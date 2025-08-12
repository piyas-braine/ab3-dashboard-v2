import React from "react";
import TextBody from "../Typography/TextBody";
import Image from "next/image";
import H5 from "../Typography/H5";
import H3 from "../Typography/H3";
import LandMarkIcon from "../Svgs/LandMarkIcon";
import InviteCallIcon from "../Svgs/InviteCallIcon";
import InviteEmailIcon from "../Svgs/InviteEmailIcon";

import organizationLogo1 from "@/assets/images/patients/organization-1.png";
import organizationLogo2 from "@/assets/images/patients/organization-2.png";
import organizationLogo3 from "@/assets/images/patients/organization-3.png";
import PopupText from "../Popups/PopupText";
import InviteModalPatientOrganization from "./InviteModalPatientOrganization";
import InviteModalPatientTeam from "./InviteModalPatientTeam";

const InviteModalPatientSummary = ({
  selectedPatient,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedPatient: any;
}) => {
  return (
    <div className="pt-[29px]">
      <TextBody
        variant="regular"
        weight="semibold"
        className="!leading-[23px] text-text-body-muted"
      >
        Patient Summary
      </TextBody>

      <div
        className="pt-[30px] pb-[72px] bg-bg-default-white rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div className="px-[30px] flex flex-col min-[850px]:flex-row justify-between items-center min-[850px]:items-start gap-10">
          <div className="flex flex-col sm:flex-row justify-start items-center min-[850px]:items-start gap-[23px]">
            <div>
              {selectedPatient?.image ? (
                <Image
                  src={selectedPatient?.image}
                  alt={selectedPatient?.name}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] rounded-full"
                />
              ) : (
                <div className="w-[100px] h-[100px] bg-bg-primary-blue rounded-full flex justify-center items-center">
                  <H5 className="text-text-default-white">
                    {selectedPatient?.name.split(" ")?.[0].charAt(0)}
                    {selectedPatient?.name?.split(" ")?.[1]?.charAt(0)}
                  </H5>
                </div>
              )}
            </div>

            <div>
              <H3 className="text-text-default-dark">
                {selectedPatient?.name}
              </H3>

              <p className="mt-2.5 text-text-body-muted text-[10px] leading-[10px] font-medium tracking-[-0.5%]">
                Last online: 10 days ago
              </p>

              <div className="mt-[18px] flex justify-start items-center gap-2.5">
                <div className="w-[18px] h-[18px]">
                  <LandMarkIcon />
                </div>

                <TextBody
                  variant="small"
                  weight="semibold"
                  className="text-text-body-muted"
                >
                  London, UK
                </TextBody>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center min-[850px]:justify-start items-center gap-3">
              <TextBody
                variant="small"
                weight="semibold"
                className="text-text-body-muted"
              >
                Patient ID:
              </TextBody>

              <H3 className="text-text-default-dark">AB3-019234</H3>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-end items-center gap-6">
              <div className="flex justify-start items-center gap-2.5">
                <div className="w-[18px] h-[18px]">
                  <InviteCallIcon />
                </div>

                <TextBody
                  variant="small"
                  weight="semibold"
                  className="text-text-body-muted"
                >
                  +44 7901 234567
                </TextBody>
              </div>

              <div className="flex justify-start items-center gap-2.5">
                <div className="w-[23px] h-[16px]">
                  <InviteEmailIcon />
                </div>

                <TextBody
                  variant="small"
                  weight="semibold"
                  className="text-text-body-muted"
                >
                  {selectedPatient?.email}
                </TextBody>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[21px] mt-[30px] flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start gap-7">
          {/* Gender */}
          <div>
            <TextBody
              variant="small"
              className="text-text-body-muted !font-medium !leading-[100%]"
            >
              Gender
            </TextBody>

            <div className="mt-3 bg-[#E1E8FF] px-6 py-1.5 rounded-[44px] text-[12px] leading-[16px] font-medium text-text-primary-blue">
              Male
            </div>
          </div>

          {/* Organizations */}
          <div>
            <TextBody
              variant="small"
              className="text-text-body-muted !font-medium !leading-[100%]"
            >
              Organizations
            </TextBody>

            <div className="mt-3 flex justify-start items-center gap-2">
              <div className="relative">
                <Image
                  src={organizationLogo1}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 peer"
                />

                <div className="opacity-0 peer-hover:opacity-100 absolute -bottom-[48px] lett-[7px] transition-all duration-[400ms] ease-in-out">
                  <PopupText text="Enhanced" />
                </div>
              </div>

              <div className="relative">
                <Image
                  src={organizationLogo2}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 peer"
                />

                <div className="opacity-0 peer-hover:opacity-100 absolute -bottom-[48px] lett-[7px] transition-all duration-[400ms] ease-in-out">
                  <PopupText text="Manchester United" />
                </div>
              </div>

              <div className="relative">
                <Image
                  src={organizationLogo3}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 peer"
                />

                <div className="opacity-0 peer-hover:opacity-100 absolute -bottom-[48px] lett-[7px] transition-all duration-[400ms] ease-in-out">
                  <PopupText text="England" />
                </div>
              </div>
            </div>
          </div>

          {/* Teams */}
          <div>
            <TextBody
              variant="small"
              className="text-text-body-muted !font-medium !leading-[100%]"
            >
              Teams
            </TextBody>

            <div className="mt-3 flex justify-start items-center gap-2">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-bg-default-primary flex justify-center items-center peer">
                  <H5 className="text-text-default-white">IA</H5>
                </div>

                <div className="opacity-0 peer-hover:opacity-100 absolute -bottom-[48px] lett-[9px] transition-all duration-[400ms] ease-in-out">
                  <PopupText text="Independent Athlete" />
                </div>
              </div>

              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#52D5BA] flex justify-center items-center peer">
                  <H5 className="text-text-default-white">U2</H5>
                </div>

                <div className="opacity-0 peer-hover:opacity-100 absolute -bottom-[48px] lett-[9px] transition-all duration-[400ms] ease-in-out">
                  <PopupText text="Under 20" />
                </div>
              </div>

              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#FB6B18] flex justify-center items-center peer">
                  <H5 className="text-text-default-white">D</H5>
                </div>

                <div className="opacity-0 peer-hover:opacity-100 absolute -bottom-[48px] lett-[9px] transition-all duration-[400ms] ease-in-out">
                  <PopupText text="D Team" />
                </div>
              </div>
            </div>
          </div>

          {/* Age */}
          <div>
            <TextBody
              variant="small"
              className="text-text-body-muted !font-medium !leading-[100%]"
            >
              Age
            </TextBody>

            <div className="mt-3 bg-[#E1E8FF] px-6 py-1.5 rounded-[44px] text-[12px] leading-[16px] font-medium text-text-primary-blue">
              20 Years
            </div>
          </div>

          {/* Languages */}
          <div>
            <TextBody
              variant="small"
              className="text-text-body-muted !font-medium !leading-[100%]"
            >
              Languages
            </TextBody>

            <div className="mt-3 flex justify-start items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FFAF2A] flex justify-center items-center">
                <H5 className="text-text-default-white">EN</H5>
              </div>

              <div className="w-9 h-9 rounded-full bg-bg-default-primary flex justify-center items-center">
                <H5 className="text-text-default-white">FR</H5>
              </div>

              <div className="w-9 h-9 rounded-full bg-[#52D5BA] flex justify-center items-center">
                <H5 className="text-text-default-white">GR</H5>
              </div>
            </div>
          </div>

          {/* Nationality */}
          <div>
            <TextBody
              variant="small"
              className="text-text-body-muted !font-medium !leading-[100%]"
            >
              Nationality
            </TextBody>

            <div className="mt-3 bg-[#E1E8FF] px-6 py-1.5 rounded-[44px] text-[12px] leading-[16px] font-medium text-text-primary-blue">
              England
            </div>
          </div>

          {/* NHS No */}
          <div>
            <TextBody
              variant="small"
              className="text-text-body-muted !font-medium !leading-[100%]"
            >
              NHS No
            </TextBody>

            <div className="mt-3 bg-[#E1E8FF] px-6 py-1.5 rounded-[44px] text-[12px] leading-[16px] font-medium text-text-primary-blue">
              9239274
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[26px] flex justify-start items-center gap-[44px]">
        <div>
          <TextBody
            variant="regular"
            weight="semibold"
            className="!leading-[23px] text-text-default-dark"
          >
            Assign to:
          </TextBody>

          <div className="mt-[21px] ml-0.5 flex flex-col sm:flex-row justify-start items-center gap-[42px]">
            <InviteModalPatientOrganization />
            <InviteModalPatientTeam />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteModalPatientSummary;
