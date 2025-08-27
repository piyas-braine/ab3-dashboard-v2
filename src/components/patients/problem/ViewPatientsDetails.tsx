"use client";

import ProblemStatusBadge from "@/components/Badges/ProblemStatusBadge";
import ConsultantCard from "@/components/Cards/ConsultantCard";
import PatientHiddenIcon from "@/components/Svgs/PatientHiddenIcon";
import PatientVisibleIcon from "@/components/Svgs/PatientVisibleIcon";
import H3 from "@/components/Typography/H3";
import H5 from "@/components/Typography/H5";
import TextBody from "@/components/Typography/TextBody";
import React from "react";

import doctorAvatarImage from "@/assets/images/patients/doctor-1.png";
import FilledButton from "@/components/Buttons/FilledButton";
import { useGetProblemQuery } from "@/store/apis/Problem";
import { format } from "date-fns";

const ViewPatientsDetails = ({ id }: { id: string }) => {
  const { data: problemDetails } = useGetProblemQuery(id);

  return (
    <section>
      <H5 className="text-text-default-dark">View Patients Details</H5>

      <div
        className="mt-[18px] p-[30px] bg-bg-default-white rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        {/* General Information */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex justify-start items-center gap-3">
              <TextBody
                variant="small"
                weight="semibold"
                className="text-text-body-muted"
              >
                Patient ID:
              </TextBody>
              <H3 className="text-text-default-dark">AB3-019234</H3>
            </div>

            <div className="mt-3 flex justify-start items-center gap-4">
              <H3>{problemDetails?.data?.problemName}</H3>
              <div className="mt-0.5 w-6 h-6">
                {problemDetails?.data?.isVisibleToPatient ? (
                  <PatientVisibleIcon />
                ) : (
                  <PatientHiddenIcon />
                )}
              </div>
            </div>

            <TextBody
              variant="small"
              weight="semibold"
              className="mt-[14px] text-text-body-muted"
            >
              {problemDetails?.data?.category}
            </TextBody>
          </div>

          <div>
            <ProblemStatusBadge status={problemDetails?.data?.status} />
          </div>
        </div>

        {/* Problem Details */}
        <div className="mt-[30px] flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex justify-start items-center gap-3">
              <TextBody
                variant="small"
                weight="semibold"
                className="text-text-body-muted"
              >
                Date of Onset:
              </TextBody>

              <H5 className="text-text-default-dark !leading-[137%]">
                {problemDetails?.data?.dateOfInjury &&
                  format(
                    new Date(problemDetails.data.dateOfInjury),
                    "dd/MMM/yyyy"
                  )}
              </H5>
            </div>

            <div className="mt-4 flex justify-start items-center gap-3">
              <TextBody
                variant="small"
                weight="semibold"
                className="text-text-body-muted"
              >
                Severity:
              </TextBody>
              <H5
                className={`${
                  problemDetails?.data?.severity === "Major"
                    ? "text-text-primary-red"
                    : "text-text-semantic-3"
                } text-text-default-dark !leading-[137%]`}
              >
                {problemDetails?.data?.severity}
              </H5>
            </div>
          </div>

          <div>
            <div className="flex justify-start sm:justify-end items-center gap-3">
              <TextBody
                variant="small"
                weight="semibold"
                className="text-text-body-muted"
              >
                Visibility:
              </TextBody>

              <H5 className="text-text-default-dark !leading-[137%]">
                {problemDetails?.data?.visibleTo}
              </H5>
            </div>

            <div className="mt-4 flex justify-end items-center gap-3">
              <H5 className="text-text-default-dark !leading-[137%]">Alerts:</H5>

              <div
                className="bg-[#FFE8E8] text-[#E72828] px-4 py-1.5 rounded-[44px] text-[12px] leading-[100%] font-medium"
                style={{
                  boxShadow: "0px 20px 54px 0px #1E52DB14",
                }}
              >
                Allergic
              </div>
            </div>
          </div>
        </div>

        {/* Consultants */}
        <div className="mt-[30px]">
          <H5 className="text-text-default-dark !leading-[137%]">
            Consultant:
          </H5>

          <div className="mt-4 flex flex-wrap justify-start items-center gap-[32px]">
            <ConsultantCard
              doctorName="Dr. John Doe"
              doctorSpecialty="Lead Physician"
              doctorAvatarImage={doctorAvatarImage}
            />
            <ConsultantCard
              doctorName="Dr. John Doe"
              doctorSpecialty="Lead Physician"
              doctorAvatarImage={doctorAvatarImage}
            />
            <ConsultantCard
              doctorName="Dr. John Doe"
              doctorSpecialty="Lead Physician"
              doctorAvatarImage={doctorAvatarImage}
            />
            <ConsultantCard
              doctorName="Dr. John Doe"
              doctorSpecialty="Lead Physician"
              doctorAvatarImage={doctorAvatarImage}
            />
          </div>
        </div>

        {/* Assessment */}
        <div className="mt-[30px]">
          <H5 className="text-text-default-dark !leading-[137%]">
            Assessment:
          </H5>

          <TextBody
            variant="small"
            className="mt-[13px] text-text-body-muted !leading-[24px]"
          >
            A professional football player has been facing challenges due to a
            severe allergy condition that affects his performance and overall
            well-being. The allergy, triggered by certain environmental factors
            or food substances, has caused symptoms such as skin irritation,
            breathing difficulties, and fatigue during training and matches.
          </TextBody>
        </div>

        <div className="mt-[30px] flex justify-center">
          <FilledButton
            text="Show more"
            className="bg-bg-primary-blue !py-2.5 !w-fit !rounded-[44px]"
            textClassName="!leading-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ViewPatientsDetails;
