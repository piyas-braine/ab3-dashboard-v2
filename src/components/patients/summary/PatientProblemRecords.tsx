"use client";

import FilledButton from "@/components/Buttons/FilledButton";
import TableScrollGrabber from "@/components/Shared/TableScrollGrabber";
import PlusIcon from "@/components/Svgs/PlusIcon";
import ProblemTableHeader from "@/components/Tables/ProblemTableHeader";
import ProblemTableRow from "@/components/Tables/ProblemTableRow";
import H3 from "@/components/Typography/H3";
import { useGetAllProblemQuery } from "@/store/apis/Problem";
import { TProblem } from "@/types/TProblem";
import Link from "next/link";
import React from "react";

const PatientProblemRecords = () => {
  const {data: problemsData} = useGetAllProblemQuery(undefined);

  return (
    <section
      className="mt-[32px] p-[30px] bg-bg-surface-primary rounded-2xl"
      style={{
        boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <H3 className="text-text-heading-dark">Problem</H3>

        <Link href="/patients/add-problem">
          <FilledButton
            isIcon={true}
            icon={<PlusIcon />}
            text="Add New Problem"
            className="!w-fit !px-5 !py-3 !rounded-md"
          />
        </Link>
      </div>

      <div className="mt-4">
        <TableScrollGrabber>
          <div className="pb-[150px] relative z-[10] overflow-x-auto overflow-y-hidden">
            <div className="table w-full h-full min-w-[750px] lg:min-w-full">
              <ProblemTableHeader />

              <div>
                {problemsData?.data?.map((problem: TProblem, index: number) => {
                  return (
                    <ProblemTableRow
                      key={index}
                      _id={problem?._id}
                      problemName={problem?.problemName}
                      severity={problem?.severity}
                      category={problem?.category}
                      isVisibleToPatient={problem?.isVisibleToPatient}
                      updatedAt={problem?.updatedAt}
                      status={problem?.status}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </TableScrollGrabber>
      </div>
    </section>
  );
};

export default PatientProblemRecords;
