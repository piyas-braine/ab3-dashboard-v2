"use client";

import React, { useState } from "react";
import H6 from "@/components/Typography/H6";
import { useSearchParams } from "next/navigation";
import TableScrollGrabber from "@/components/Shared/TableScrollGrabber";
import PatientTableHeaderSuperAdmin from "@/components/Tables/PatientTableHeaderSuperAdmin";
import { patientsData } from "@/data/patientsData";
import PatientTableRawSuperAdmin from "@/components/Tables/PatientTableRowSuperAdmin";
import PatientTableHeaderPhysio from "@/components/Tables/PatientTableHeaderPhysio";
import { patientsDataPhysio } from "@/data/patientDataPhysio";
import PatientTableRawPhysio from "@/components/Tables/PatientTableRowPhysio";
import PatientTableRaw from "@/components/Tables/PatientTableRow";
import Pagination from "@/components/Shared/Pagination";
import PatientTableHeader from "@/components/Tables/PatientTableHeader";
import InviteOldPatientModal from "@/components/Modals/InviteOldPatientModal";
import { useForm } from "react-hook-form";
import TextInputV2 from "@/components/Inputs/TextInputV2";
import PlusIcon from "@/components/Svgs/PlusIcon";
import ButtonBase from "@/components/Typography/ButtonBase";
import SelectInputV2 from "@/components/Inputs/SelectInputV2";

const PatientsRecord = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isInviteOldPatientModalOpen, setIsInviteOldPatientModalOpen] =
    useState(false);

  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const { register } = useForm();

  return (
    <>
      <section>
        <div className="mt-[30px] flex flex-col sm:flex-row justify-between items-center gap-4">
          <TextInputV2
            name="searchPatient"
            placeholder="Search Patient"
            isIcon={true}
            className="max-w-[544px] w-full"
            register={register("searchPatient")}
          />

          <button
            onClick={() => setIsInviteOldPatientModalOpen(true)}
            className={`py-3 px-5 rounded-[6px] ${
              role === "Physio" ? "bg-bg-natural-gray-8" : "bg-bg-primary-blue"
            } flex justify-start items-center gap-2 cursor-pointer text-nowrap`}
            disabled={role === "Physio"}
          >
            <div className="w-3 h-3">
              <PlusIcon />
            </div>
            <ButtonBase className="text-text-default-white">
              Invite New Patient
            </ButtonBase>
          </button>
        </div>

        <div className="mt-[30px]">
          <div className="w-full flex justify-between items-center">
            <h4 className="text-text-body-muted text-[16px] leading-[23px] font-semibold">
              Filters
            </h4>
            <button className="text-text-primary-blue text-[14px] leading-[23px] font-semibold">
              Clear Filters
            </button>
          </div>

          <div className="mt-3 w-full flex flex-col md:flex-row justify-stretch md:items-center gap-[32px]">
            <SelectInputV2
              name="status"
              labelText="Status"
              placeholder="Select Status"
              options={[
                { label: "Active", value: "active" },
                { label: "Onboarding", value: "onboarding" },
                { label: "In Transfer", value: "inTransfer" },
                { label: "Archived", value: "archived" },
              ]}
              className="w-full"
            />

            <SelectInputV2
              name="fitness"
              labelText="Fitness"
              placeholder="Select Fitness"
              options={[
                { label: "Fit", value: "fit" },
                { label: "Injured", value: "injured" },
                { label: "Recovery", value: "recovery" },
              ]}
              className="w-full"
            />

            <SelectInputV2
              name="team"
              labelText="Team"
              placeholder="Select Team"
              options={[
                { label: "U18", value: "U18" },
                { label: "U19", value: "U19" },
                { label: "U20", value: "U20" },
                { label: "U21", value: "U21" },
              ]}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section
        className="mt-[30px] mb-[48px] bg-bg-surface-primary rounded-t-2xl rounded-b-2xl"
        style={{
          boxShadow: "0px 3px 8px -1px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div
          className="px-6 py-[18px]"
          style={{
            boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
          }}
        >
          <H6 className="text-[#1F2D3D]">
            {role === "Physio" && "My "} Patients Record
          </H6>
        </div>

        <TableScrollGrabber>
          <div className="relative z-[10] overflow-x-auto overflow-y-hidden">
            <div className="table w-full h-full min-w-[750px] lg:min-w-full">
              {role === "Super Admin" ? (
                <>
                  {/* Header Row */}
                  <PatientTableHeaderSuperAdmin />

                  {/* Body Row */}
                  {patientsData.map((patientData, index) => {
                    return (
                      <PatientTableRawSuperAdmin
                        key={index}
                        patientImage={patientData?.patientImage}
                        patientName={patientData?.patientName}
                        playerFitStatus={patientData?.playerFitStatus}
                        playerJoinDate={patientData?.playerJoinDate}
                        notificationNumber={patientData?.notificationNumber}
                        organizations={patientData?.organizations}
                        teams={patientData?.teams}
                        status={patientData?.status}
                        lastUpdated={patientData?.lastUpdated}
                        isLastAddOrg={index >= 4}
                        isLastAddTeam={index >= 4}
                        isLastAction={index >= 6}
                      />
                    );
                  })}
                </>
              ) : role === "Physio" ? (
                <>
                  {/* Header Row */}
                  <PatientTableHeaderPhysio />

                  {/* Body Row */}
                  {patientsDataPhysio.map((patientData, index) => {
                    return (
                      <PatientTableRawPhysio
                        key={index}
                        patients={patientData?.patients}
                        status={patientData?.status}
                        lastUpdated={patientData?.lastUpdated}
                        isLastAction={index >= 6}
                        isLastViewPatientDetails={index >= 7}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {/* Header Row */}
                  <PatientTableHeader />

                  {/* Body Row */}
                  {patientsData.map((patientData, index) => {
                    return (
                      <PatientTableRaw
                        key={index}
                        patientImage={patientData?.patientImage}
                        patientName={patientData?.patientName}
                        playerFitStatus={patientData?.playerFitStatus}
                        playerJoinDate={patientData?.playerJoinDate}
                        notificationNumber={patientData?.notificationNumber}
                        teams={patientData?.teams}
                        status={patientData?.status}
                        lastUpdated={patientData?.lastUpdated}
                        isLastAction={index >= 6}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </TableScrollGrabber>

        <div className="px-3 py-[9px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h4 className="text-[14px] font-normal leading-[23px] text-text-body-muted">
            Showing 10 items out of 250 results found
          </h4>

          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {isInviteOldPatientModalOpen && (
        <div
          className="fixed z-[10001] left-0 top-0 w-full h-full bg-[#1E52DC99] px-4 lg:px-0"
          style={{
            boxShadow: "0px 4px 20px -2px #32324714, 0px 0px 1px 0px #0C1A4B1A",
          }}
        >
          <InviteOldPatientModal
            setIsInviteOldPatientModalOpen={setIsInviteOldPatientModalOpen}
          />
        </div>
      )}
    </>
  );
};

export default PatientsRecord;
