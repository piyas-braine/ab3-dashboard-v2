import React from "react";
import PatientStatIcon from "../Svgs/PatientStatIcon";
import TimeStatIcon from "../Svgs/TimeStatIcon";

type StatCardProps = {
  statTitle: string;
  statNumber: string;
  statPercentage: string;
  statIconClassName: string;
  isPositive?: boolean;
  isTimeIcon?: boolean;
};

const StatCard = ({
  statTitle,
  statNumber,
  statPercentage,
  statIconClassName,
  isPositive = true,
  isTimeIcon = false,
}: StatCardProps) => {
  return (
    <div
      className="sm:flex-1 min-w-[220px] bg-bg-surface-primary  pt-4 pb-[19px] px-6 rounded-2xl"
      style={{
        boxShadow: "0px 3px 8px -1px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-medium text-[12px] leading-[100%]">
            {statTitle}
          </h4>
          <h3 className="mt-[5px] font-bold text-[20px] leading-[137%]">
            {statNumber}
          </h3>
        </div>
        <div
          className={`${statIconClassName} p-[14px] flex justify-center items-center rounded-full`}
        >
          <div className="w-[18px] h-[18px]">
            {isTimeIcon ? <TimeStatIcon /> : <PatientStatIcon />}
          </div>
        </div>
      </div>

      <div className="mt-2.5 flex justify-start items-center gap-4">
        <div
          className={`${
            isPositive
              ? "bg-bg-default-success-soft text-bg-default-success"
              : "bg-bg-default-danger-soft text-bg-default-danger"
          } rounded-md py-1 px-2.5 text-[10px] leading-[16px] font-bold `}
        >
          {statPercentage}
        </div>

        <div className="text-text-body-muted text-[10px] leading-[16px] font-medium">
          since last month
        </div>
      </div>
    </div>
  );
};

export default StatCard;
