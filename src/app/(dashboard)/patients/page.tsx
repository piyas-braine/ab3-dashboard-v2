"use client";

import React from "react";

import StatCard from "@/components/Cards/StatCard";
import PatientsRecord from "@/components/patients/PatientsRecord";

const PatientsPage = () => {
  
  return (
    <div className="px-4 py-[30px] sm:p-[30px] w-full h-full">
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-between sm:items-start gap-[30px]">
        <StatCard
          statTitle="Total Patients"
          statSubTitle="Manchester United"
          statNumber="24,368"
          statValue="Active"
          statIconClassName="bg-bg-default-tertiary"
        />

        <StatCard
          statTitle="Active Patients"
          statSubTitle="Under Care"
          statNumber="9,023"
          statValue="Active"
          statIconClassName="bg-bg-default-primary"
        />

        <StatCard
          statTitle="In-Progress Patients"
          statSubTitle="In Transfer"
          statNumber="15,345"
          statValue="+40%"
          statIconClassName="bg-bg-default-info"
        />

        <StatCard
          statTitle="Onboarding Patients"
          statSubTitle="Onboarded"
          statNumber="4,345"
          statValue="+40%"
          statIconClassName="bg-bg-default-warning"
        />
      </section>

      <PatientsRecord />
      
    </div>
  );
};

export default PatientsPage;
