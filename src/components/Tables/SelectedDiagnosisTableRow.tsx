"use client";

import React from "react";

import TableBodyText from "@/components/Typography/TableBodyText";

import { TDiagnosis } from "@/types/TDiagnosis";
import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import CrossIcon from "@/components/Svgs/CrossIcon";

const SelectedDiagnosisTableRow = ({
  _id,
  diagnosisCode,
  diagnosisName,
  selectedDiagnosis,
  setSelectedDiagnosis,
}: TDiagnosis & {
  selectedDiagnosis: TDiagnosis[];
  setSelectedDiagnosis: React.Dispatch<React.SetStateAction<TDiagnosis[]>>;
}) => {
  const removeDiagnosis = (diagnosisCode: string) => {
    const updatedDiagnosis = selectedDiagnosis.filter(
      (diagnosis) => diagnosis._id !== diagnosisCode
    );

    setSelectedDiagnosis(updatedDiagnosis);
  };

  return (
    <div
      className="grid gap-1.5 text-left w-full min-h-[52px]"
      style={{
        gridTemplateColumns: "144fr 795fr 99fr",
      }}
    >
      <div
        className="bg-bg-surface-primary pl-6 py-4 flex items-center justify-between gap-3 min-w-0"
        style={{ boxShadow: "0px -1px 0px 0px #EDF2F7 inset" }}
      >
        <TableBodyText className="text-text-body-light">
          {diagnosisCode}
        </TableBodyText>
      </div>

      <div
        className="bg-bg-surface-primary pl-6 py-4 w-full flex items-center justify-between min-w-0"
        style={{ boxShadow: "0px -1px 0px 0px #EDF2F7 inset" }}
      >
        <TableBodyHeading className="text-text-body-light">
          {diagnosisName}
        </TableBodyHeading>
      </div>

      <div
        className="bg-bg-surface-primary py-4 w-full flex items-center justify-center min-w-[80px]"
        style={{ boxShadow: "0px -1px 0px 0px #EDF2F7 inset" }}
      >
        <div
          onClick={() => _id && removeDiagnosis(_id)}
          className="w-8 h-8 bg-[#FFE3E3] flex justify-center items-center rounded-full cursor-pointer"
        >
          <div className="w-3 h-3">
            <CrossIcon className="fill-[#F32448]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedDiagnosisTableRow;
