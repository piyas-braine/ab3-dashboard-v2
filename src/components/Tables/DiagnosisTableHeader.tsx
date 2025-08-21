import React from "react";

const DiagnosisTableHeader = () => {
  return (
    <div
      className="bg-bg-table-head text-text-table-head grid text-left w-full"
      style={{
        gridTemplateColumns: "144fr 294fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        Code
      </div>
      <div className="py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0">
        title
      </div>
    </div>
  );
};

export default DiagnosisTableHeader;
