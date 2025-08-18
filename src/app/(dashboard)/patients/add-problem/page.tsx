"use client";

import FilledButton from "@/components/Buttons/FilledButton";
import DateInput from "@/components/Inputs/DateInput";
import RadioInput from "@/components/Inputs/RadioInput";
import CalenderIcon2 from "@/components/Svgs/CalenderIcon2";
import SearchIcon from "@/components/Svgs/SearchIcon";
import H5 from "@/components/Typography/H5";
import React, { useState } from "react";

const AddPatientProblemPage = () => {
  const [category, setCategory] = useState("Injury");

  return (
    <div className="p-[30] bg-bg-surface-secondary rounded-md">
      <div
        className="p-[30px] bg-bg-surface-primary"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div className="flex justify-center items-center gap-8">
          <div className="flex-1">
            <DateInput
              name="searchPatient"
              placeholder="Select Date"
              labelText="Date of onset"
              isIcon={true}
              icon={<CalenderIcon2 />}
              className="!pt-3 !pb-4 placeholder:!text-text-natural-gray-8"
              iconClassName="!top-3 !translate-y-0 !w-[19px] !h-4"
            />
          </div>

          <div className="flex-1">
            <H5 className="text-text-body-muted">Category</H5>

            <div className="mt-6 flex justify-start items-center gap-[28px]">
              <RadioInput
                name="problemCategory"
                labelText="Injury"
                checked={category === "Injury"}
                onChange={() => setCategory("Injury")}
              />

              <RadioInput
                name="problemCategory"
                labelText="illness"
                checked={category === "illness"}
                onChange={() => setCategory("illness")}
              />
            </div>
          </div>
        </div>

        <div className="mt-[42px] flex justify-start items-center gap-4">
          <H5 className="text-text-body-muted">Search Diagnosis</H5>

          <FilledButton
            text="Search"
            isIcon={true}
            icon={<SearchIcon />}
            className="!w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default AddPatientProblemPage;
