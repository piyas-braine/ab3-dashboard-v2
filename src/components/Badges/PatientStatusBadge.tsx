import React from "react";

const PatientStatusBadge = ({ status }: { status: string }) => {
  const getPatientStatusColor = (status: string) => {
    switch (status) {
      case "Onboarding":
        return "bg-bg-soft-purple text-[#7564F7]";
      case "Active":
        return "bg-bg-soft-success text-text-success";
      case "In Transfer":
        return "bg-[#FFF7DA] text-[#CFA100] ";
      case "Transferred":
        return "bg-[#DFF1FF] text-[#469CDE]";
      case "Archived":
        return "bg-bg-natural-gray-9 text-[#868686]";
    }
  };

  return (
    <div
      className={`px-4 py-1.5 rounded-[44px] text-[12px] leading-[16px] font-medium ${getPatientStatusColor(
        status
      )}`}
    >
      {status}
    </div>
  );
};

export default PatientStatusBadge;
