import PopupText from "@/components/Popups/PopupText";
import InviteCallIcon from "@/components/Svgs/InviteCallIcon";
import InviteEmailIcon from "@/components/Svgs/InviteEmailIcon";
import LandMarkIcon from "@/components/Svgs/LandMarkIcon";
import H3 from "@/components/Typography/H3";
import H5 from "@/components/Typography/H5";
import TextBody from "@/components/Typography/TextBody";
import Image from "next/image";
import React from "react";

import organizationLogo1 from "@/assets/images/patients/organization-1.png";
import organizationLogo2 from "@/assets/images/patients/organization-2.png";
import organizationLogo3 from "@/assets/images/patients/organization-3.png";

import patientAvatar3 from "@/assets/images/patients/patient-avatar-2.png";

const PatientInformation = () => {
  return (
    <section>
      <H3 className="text-text-heading-dark">Patient Information</H3>

      <div
        className="mt-[18px] bg-bg-default-white rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div className="p-[30px] w-full">
          <div className="w-full flex flex-col sm:flex-row justify-start items-center sm:items-start gap-[23px]">
            <div>
              {true ? (
                <Image
                  src={patientAvatar3}
                  alt="Darrell Steward"
                  width={100}
                  height={100}
                  className="min-w-[100px] min-h-[100px] w-[100px] h-[100px] rounded-full"
                />
              ) : (
                <div className="w-[100px] h-[100px] bg-bg-primary-blue rounded-full flex justify-center items-center">
                  <H5 className="text-text-default-white">
                    {"Darrell Steward"?.split(" ")?.[0].charAt(0)}
                    {"Darrell Steward"?.split(" ")?.[1]?.charAt(0)}
                  </H5>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-[23px]">
              <div className="flex-1">
                <H3 className="text-text-default-dark">Darrell Steward</H3>

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

              <div className="flex-1 flex flex-col items-start">
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

                <div className="mt-4 flex flex-col xl:flex-row justify-end xl:items-center gap-6">
                  <div className="flex justify-start items-center gap-2.5">
                    <div className="w-[18px] h-[18px]">
                      <InviteCallIcon />
                    </div>

                    <TextBody
                      variant="small"
                      weight="semibold"
                      className="text-text-body-muted text-nowrap"
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
                      className="text-text-body-muted text-nowrap"
                    >
                      darrell.steward@email.com
                    </TextBody>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[30px] flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start gap-[51px]">
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
                    className="min-w-8 min-h-8 w-8 h-8 peer"
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
                    className="min-w-8 min-h-8 w-8 h-8 peer"
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
                    className="min-w-8 min-h-8 w-8 h-8 peer"
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

              <div className="mt-3 bg-[#E1E8FF] px-6 py-1.5 rounded-[44px] text-[12px] leading-[16px] font-medium text-text-primary-blue text-nowrap">
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

          <div className="mt-[66px] flex justify-center items-center gap-3">
            <div className="w-8 h-2 bg-[#3461FF] rounded-3xl"></div>
            <div className="w-8 h-2 border border-[#0C32B780] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInformation;
