import React from "react";

const SelectedDiagnosisTableHeader = () => {
  return (
    <div
      className=" text-text-table-head grid gap-1.5 text-left w-full"
      style={{
        gridTemplateColumns: "144fr 795fr 99fr",
      }}
    >
      <div
        className="bg-bg-table-head py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0"
        style={{ boxShadow: "0px -1px 0px 0px #EDF2F7 inset" }}
      >
        Code
      </div>
      <div
        className="bg-bg-table-head py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-0"
        style={{ boxShadow: "0px -1px 0px 0px #EDF2F7 inset" }}
      >
        title
      </div>

      <div
        className="bg-bg-table-head py-[18px] pl-6 uppercase text-[11px] leading-[16px] tracking-[6%] font-semibold min-w-[80px]"
        style={{ boxShadow: "0px -1px 0px 0px #EDF2F7 inset" }}
      >
        ACTION
      </div>
    </div>
  );
};

export default SelectedDiagnosisTableHeader;
