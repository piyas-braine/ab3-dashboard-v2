import React from "react";

const PatientTableHeaderPhysio = () => {
  return (
    <div
      className="bg-bg-table-head text-text-table-head grid text-left w-full"
      style={{
        gridTemplateColumns: "0.1622fr 0.3604fr 0.1982fr 0.1667fr 0.1153fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Assigned To
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Patient
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Status
      </div>
      <div className="py-[18px] xl:pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Last Updated
      </div>
      <div className="py-[18px] font-semibold px-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        Action
      </div>
    </div>
  );
};

export default PatientTableHeaderPhysio;
