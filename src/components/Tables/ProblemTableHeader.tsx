import React from "react";

const ProblemTableHeader = () => {
  return (
    <div
      className="bg-bg-table-head text-text-table-head grid text-left w-full"
      style={{
        gridTemplateColumns: "270fr 114fr 124fr 152fr 155fr 145fr 90fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        PROBLEM NAME
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        severity
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        CATEGORY
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Patient Visibility
      </div>
      <div className="py-[18px] font-semibold pl-4 xl:pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        lAST UPDATES
      </div>
      <div className="py-[18px] font-semibold pl-4 xl:pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-0">
        Status
      </div>
      <div className="py-[18px] font-semibold pl-2 xl:pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] min-w-[70px]">
        Actions
      </div>
    </div>
  );
};

export default ProblemTableHeader;
