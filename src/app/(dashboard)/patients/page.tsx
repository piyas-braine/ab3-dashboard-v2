"use client";

import PatientTableHeader from "@/components/Tables/PatientTableHeader";
import PatientTableRaw from "@/components/Tables/PatientTableRow";
import H6 from "@/components/Typography/H6";
import React, { useState } from "react";

import TableScrollGrabber from "@/components/Shared/TableScrollGrabber";
import StatCard from "@/components/Cards/StatCard";
import TextInputV2 from "@/components/Inputs/TextInputV2";
import PlusIcon from "@/components/Svgs/PlusIcon";
import ButtonBase from "@/components/Typography/ButtonBase";
import SelectInputV2 from "@/components/Inputs/SelectInputV2";
import InviteOldPatientModal from "@/components/Modals/InviteOldPatientModal";
import { useForm } from "react-hook-form";
import { patientsData } from "@/data/patientsData";
import Pagination from "@/components/Shared/Pagination";
import PatientTableRawSuperAdmin from "@/components/Tables/PatientTableRowSuperAdmin";
import PatientTableHeaderSuperAdmin from "@/components/Tables/PatientTableHeaderSuperAdmin";
import { useSearchParams } from "next/navigation";
import PatientTableHeaderPhysio from "@/components/Tables/PatientTableHeaderPhysio";
import PatientTableRawPhysio from "@/components/Tables/PatientTableRowPhysio";
import { patientsDataPhysio } from "@/data/patientDataPhysio";

const PatientsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isInviteOldPatientModalOpen, setIsInviteOldPatientModalOpen] =
    useState(false);

  const { register } = useForm();

  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div className="px-4 py-[30px] sm:p-[30px] w-full h-full">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between sm:items-start gap-[30px]">
        <StatCard
          statTitle="Total Patients"
          statNumber="24,368"
          statPercentage="+13%"
          statIconClassName="bg-bg-default-tertiary"
        />

        <StatCard
          statTitle="Active Patients"
          statNumber="9,023"
          statPercentage="+20%"
          statIconClassName="bg-bg-default-primary"
        />

        <StatCard
          statTitle="Resolved Patients"
          statNumber="15,345"
          statPercentage="+40%"
          statIconClassName="bg-bg-default-info"
        />

        <StatCard
          statTitle="Recurring Patients"
          statNumber="398"
          statPercentage="-4%"
          statIconClassName="bg-bg-default-warning"
          isPositive={false}
          isTimeIcon={true}
        />
      </div>

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
          className="py-3 px-5 rounded-[6px] bg-bg-primary-blue flex justify-start items-center gap-2 cursor-pointer text-nowrap"
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

      <div
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
          <div className="relative overflow-x-auto">
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
      </div>

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
    </div>
  );
};

export default PatientsPage;
