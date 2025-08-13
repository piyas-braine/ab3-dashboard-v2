import React from "react";

const PatientTableHeaderSuperAdmin = () => {
  return (
    <div
      className="bg-bg-table-head text-text-table-head grid text-left w-full"
      style={{
        gridTemplateColumns: "0.3063fr 0.1982fr 0.2342fr 0.1730fr 0.0883fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Patient
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Organization
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Status
      </div>
      <div className="py-[18px] xl:pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Last Updated
      </div>
      <div className="py-[18px] font-semibold xl:px-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        Action
      </div>
    </div>
  );
};

export default PatientTableHeaderSuperAdmin;
