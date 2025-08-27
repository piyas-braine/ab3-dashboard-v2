import ProblemNotes from "@/components/patients/problem/ProblemNotes";
import ViewPatientsDetails from "@/components/patients/problem/ViewPatientsDetails";
import React from "react";

const ViewProblemDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div className="p-[30px] bg-bg-surface-secondary">
      <ViewPatientsDetails id={id} />

      <ProblemNotes />
    </div>
  );
};

export default ViewProblemDetailsPage;
