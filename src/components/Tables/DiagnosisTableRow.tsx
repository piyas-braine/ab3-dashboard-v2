"use client";

import React from "react";

import TableBodyText from "@/components/Typography/TableBodyText";

import { TDiagnosis } from "@/types/TDiagnosis";
import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import CrossIcon from "@/components/Svgs/CrossIcon";

const DiagnosisTableRow = ({
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
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5 xl-py-0"
      style={{
        gridTemplateColumns: "144fr 294fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="pl-6 flex items-center justify-between gap-3 min-w-0">
        <TableBodyText className="text-text-body-light">
          {diagnosisCode}
        </TableBodyText>
      </div>

      <div className="pl-6 w-full flex items-center justify-between min-w-0">
        <TableBodyHeading className="text-text-body-light">
          {diagnosisName}
        </TableBodyHeading>

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

export default DiagnosisTableRow;
