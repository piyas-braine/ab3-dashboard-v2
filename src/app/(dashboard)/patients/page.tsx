import PatientTableHeader from "@/components/Tables/PatientTableHeader";
import PatientTableRaw from "@/components/Tables/PatientTableRow";
import H6 from "@/components/Typography/H6";
import React from "react";

import patientAvatarImage from "@/assets/images/patients/patient-avatar.png";
import manchesterUnitedLogo from "@/assets/images/patients/manchester-united.png";
import doctorImage from "@/assets/images/patients/doctor-1.png";
import TableScrollGrabber from "@/components/Shared/TableScrollGrabber";
import StatCard from "@/components/Cards/StatCard";

const PatientsPage = () => {
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
                return (
                  <PatientTableRaw
                    key={index}
                    patientImage={patientAvatarImage}
                    patientName="Theresa Webb"
                    lastVisit="Feb 15, 2020"
                    organizationImage={manchesterUnitedLogo}
                    organizationName="Manchester United"
                    team="U20"
                    age="17 yr"
                    status="Active"
                    doctorImage={doctorImage}
                    doctorName="Dr Steve Nickson"
                    doctorRole="Physiotherapist"
                  />
                );
              })}
            </div>
          </div>
        </TableScrollGrabber>

        <div className="px-6 pt-[19px] pb-[18px]">
          <h4 className="text-[14px] font-normal leading-[23px] text-text-body-muted">
            Showing 10 items out of 250 results found
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
