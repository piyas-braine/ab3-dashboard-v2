import H3 from "@/components/Typography/H3";
import Image from "next/image";

import organizationLogo1 from "@/assets/images/patients/organization-1.png";
import ProblemCategoryBadge from "@/components/Badges/ProblemCategoryBadge";
import MessageIcon from "@/components/Svgs/MessageIcon";
import SummaryScheduleIcon from "@/components/Svgs/SummaryScheduleIcon";
import ConsultantCard from "@/components/Cards/ConsultantCard";

import doctorAvatarImage from "@/assets/images/patients/doctor-1.png";
import H5 from "@/components/Typography/H5";
import TextBody from "@/components/Typography/TextBody";

import patientBodyImage from "@/assets/images/patients/patient-body-2.png";

const PatientSummary = () => {
  return (
    <section className="mt-[32px]">
      <H3 className="text-text-heading-dark">Patient Information</H3>

      <div
        className="mt-[18px] p-[30px] bg-bg-default-white flex flex-col md:flex-row justify-between items-center md:items-start gap-[30px] rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div>
          {/* Organization Information */}
          <div className="flex flex-col sm:flex-row md:flex-col min-[1100px]:flex-row justify-between items-start sm:items-center md:items-start min-[1100px]:items-center gap-4">
            <div className="flex justify-start items-center gap-2.5">
              <div className="w-[85px] h-[85px] rounded-full">
                <Image
                  src={organizationLogo1}
                  alt="OrganizationImage"
                  width={85}
                  height={85}
                  className="min-w-[85px] min-h-[85px] w-[85px] h-[85px] rounded-full"
                />
              </div>
              <div>
                <h4 className="text-[14px] leading-[22px] font-semibold text-[#1E52DB]">
                  Enhanced
                </h4>

                <h4 className="mt-1 text-[16px] leading-[100%] font-semibold text-text-natural-gray-4">
                  Independent Athlete
                </h4>

                <p className="mt-2 text-[9px] leading-[100%] font-medium text-text-natural-gray-7">
                  Since January 2008
                </p>
              </div>
            </div>

            <div
              className="px-6 py-1.5 bg-[#EAE0FF] rounded-[44px] text-[12px] leading-[100%] font-medium text-[#7F57D5] text-nowrap"
              style={{
                boxShadow: "0px 20px 54px 0px #1E52DB14",
              }}
            >
              Fit To Play
            </div>
          </div>

          {/* Problems By Category */}
          <div className="mt-6 flex flex-col sm:flex-row md:flex-col xl:flex-row justify-between items-start sm:items-center md:items-start xl:items-center gap-4">
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4">
              <ProblemCategoryBadge
                problemNumber={2}
                problemCategory="Active Problems"
              />
              <ProblemCategoryBadge
                problemNumber={4}
                problemCategory="Injuries this Season"
              />
            </div>

            <div className="flex justify-end items-center gap-3">
              <div className="w-9 h-9 bg-bg-default-primary flex justify-center items-center rounded-full">
                <div className="w-[19px] h-[16px]">
                  <MessageIcon />
                </div>
              </div>

              <div className="w-9 h-9 bg-[#FB6B18] flex justify-center items-center rounded-full">
                <div className="w-[19px] h-[16px]">
                  <SummaryScheduleIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mt-8 flex justify-start items-center gap-4">
            <h4 className="text-text-default-dark text-[16px] leading-[137%] font-semibold">
              Alerts:
            </h4>

            <div className="px-4 py-1.5 bg-bg-soft-danger rounded-[44px]">
              <span className="text-text-danger text-[12px] leading-[100%] font-medium">
                Allergic to penecillin
              </span>
            </div>
          </div>

          {/* Consultants */}

          <div className="mt-6">
            <h4 className="text-text-default-dark text-[16px] leading-[137%] font-semibold">
              Consultant:
            </h4>

            <div className="mt-4 flex flex-wrap justify-start items-center gap-8">
              <ConsultantCard
                doctorAvatarImage={doctorAvatarImage}
                doctorName="Dr Steve Nickson"
                doctorSpecialty="Lead Physician"
              />
              <ConsultantCard
                doctorAvatarImage={doctorAvatarImage}
                doctorName="Dr Steve Nickson"
                doctorSpecialty="Lead Physician"
              />
              <ConsultantCard
                doctorAvatarImage={doctorAvatarImage}
                doctorName="Dr Steve Nickson"
                doctorSpecialty="Lead Physician"
              />
              <ConsultantCard
                doctorAvatarImage={doctorAvatarImage}
                doctorName="Dr Steve Nickson"
                doctorSpecialty="Lead Physician"
              />
              <ConsultantCard
                doctorAvatarImage={doctorAvatarImage}
                doctorName="Dr Steve Nickson"
                doctorSpecialty="Lead Physician"
              />
            </div>
          </div>

          {/* Private Patient Note */}
          <div className="mt-9">
            <H5 className="text-text-default-dark">Private Patient Notes:</H5>
            <TextBody
              variant="small"
              className="mt-[13px] pb-3 text-text-body-muted"
            >
              A professional football player has been facing challenges due to a
              severe allergy condition that affects his performance and overall
              well-being. The allergy, triggered by certain environmental
              factors or food substances, has caused symptoms such as skin
              irritation, breathing difficulties, and fatigue during training
              and matches.
            </TextBody>
          </div>
        </div>

        <div className="rounded-md">
          <div className="w-[290.67px] h-[436px] border-8 border-sm border-white">
            <Image
              src={patientBodyImage}
              alt="Patient Body"
              width={290.67}
              height={436}
              className="w-[290.67px] h-[436px] rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSummary;
