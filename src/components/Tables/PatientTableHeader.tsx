import React from "react";

const PatientTableHeader = () => {
  return (
    <div
      className="bg-bg-table-head grid text-left w-full shadow-[inset_0px_-1px_0px_0px_#EDF2F7]"
      style={{
        gridTemplateColumns:
          "0.17fr 0.13fr 0.18fr 0.10fr 0.07fr 0.11fr 0.15fr 0.09fr",
      }}
    >
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        Patient
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        Last Visit
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        organization
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        team
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        age
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        status
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        Doctor
      </div>
      <div className="py-[18px] xl:pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0 text-wrap text-center xl:text-left">
        Action
      </div>
    </div>
  );
};

export default PatientTableHeader;
