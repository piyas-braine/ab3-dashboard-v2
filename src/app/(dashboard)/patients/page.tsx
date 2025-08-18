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
import InvitePatient from "@/components/Modals/InvitePatient";

const PatientsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isInviteOldPatientModalOpen, setIsInviteOldPatientModalOpen] =
    useState(false);

  const { register } = useForm();

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
              { label: "Inactive", value: "inactive" },
              { label: "Resolved", value: "resolved" },
            ]}
            className="w-full"
          />

          <SelectInputV2
            name="fitness"
            labelText="Fitness"
            placeholder="Select Fitness"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "Resolved", value: "resolved" },
            ]}
            className="w-full"
          />

          <SelectInputV2
            name="team"
            labelText="Team"
            placeholder="Select Team"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "Resolved", value: "resolved" },
            ]}
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-[30px] bg-bg-surface-primary rounded-t-2xl rounded-b-2xl">
        <div className="px-6 py-[18px] shadow-[inset_0px_-1px_0px_0px_#EDF2F7]">
          <H6 className="text-[#1F2D3D]">Patients Record</H6>
        </div>

        <TableScrollGrabber>
          <div className="relative overflow-x-auto">
            <div className="table w-full h-full border border-border-light min-w-[750px] lg:min-w-full">
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
            </div>
          </div>
        </TableScrollGrabber>

        <div className="px-6 pt-[19px] pb-[18px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
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
          {/* <InvitePatient setIsInviteOldPatientModalOpen={setIsInviteOldPatientModalOpen} /> */}
        </div>
      )}
    </div>
  );
};

export default PatientsPage;
