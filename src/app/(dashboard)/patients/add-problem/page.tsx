"use client";

import FilledButton from "@/components/Buttons/FilledButton";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import DateInput from "@/components/Inputs/DateInput";
import RadioInput from "@/components/Inputs/RadioInput";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import UploadInputV2 from "@/components/Inputs/UploadInputV2";
import CalenderIcon2 from "@/components/Svgs/CalenderIcon2";
import CrossIcon from "@/components/Svgs/CrossIcon";
import PlusIcon from "@/components/Svgs/PlusIcon";
import SearchIcon from "@/components/Svgs/SearchIcon";
import H5 from "@/components/Typography/H5";
import Image from "next/image";
import React, { useState } from "react";

import patientBodyImage from "@/assets/images/patients/patient-body.png";
import BodyMarkLocationPopup from "@/components/Popups/BodyMarkLocationPopup";
import SearchDiagnosisModal from "@/components/Modals/SearchDiagnosisModal";
import { TDiagnosis } from "@/types/TDiagnosis";
import SelectedDiagnosisTableHeader from "@/components/Tables/SelectedDiagnosisTableHeader";
import SelectedDiagnosisTableRow from "@/components/Tables/SelectedDiagnosisTableRow";

const AddPatientProblemPage = () => {
  const [isSearchDiagnosisModalOpen, setIsSearchDiagnosisModalOpen] =
    useState(false);
  const [isBodyMarkPopupOpen, setIsBodyMarkPopupOpen] = useState(false);

  const [category, setCategory] = useState("Injury");
  const [severity, setSeverity] = useState("Major");
  const [playingCondition, setPlayingCondition] = useState("Fit");
  const [patientVisibility, setPatientVisibility] = useState("Yes");
  const [visibility, setVisibility] = useState("All");

  const [selectedDiagnosis, setSelectedDiagnosis] = useState<TDiagnosis[]>([]);

  return (
    <div className="p-[30] bg-bg-surface-secondary rounded-md">
      <div
        className="p-[30px] bg-bg-surface-primary rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-8">
          <div className="flex-1">
            <DateInput
              name="searchPatient"
              placeholder="Select Date"
              labelText="Date of onset"
              isIcon={true}
              icon={<CalenderIcon2 />}
              className="!pt-3 !pb-4 placeholder:!text-text-natural-gray-8"
              iconClassName="!top-3 !translate-y-0 !w-[19px] !h-4"
              calenderPosition="end"
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
            onClick={() => setIsSearchDiagnosisModalOpen(true)}
          />
        </div>

        <div className="mt-[23px]">
          {selectedDiagnosis?.length > 0 && <SelectedDiagnosisTableHeader />}
          {selectedDiagnosis?.map((diagnosis, index) => {
            return (
              <SelectedDiagnosisTableRow
                key={index}
                _id={diagnosis._id}
                diagnosisCode={diagnosis.diagnosisCode}
                diagnosisName={diagnosis.diagnosisName}
                selectedDiagnosis={selectedDiagnosis}
                setSelectedDiagnosis={setSelectedDiagnosis}
              />
            );
          })}
        </div>

        <div className="mt-[42px]">
          <TextAreaInput
            name="problemDescription"
            labelText="Additional Diagnosis Details (if there’s no details just type “none”)"
            placeholder="Please add more details about the diagnosis here especially if you don’t find the march code. also here add if there anything more than the diagnosis."
          />
        </div>

        <div className="mt-[42px]">
          <H5 className="text-text-body-muted leading-[23px]">
            Mark Injury Location
          </H5>

          <div className="relative sm:ml-[96.5px] px-[65.5px] py-6">
            <div className="relative w-[141px] h-[322px]">
              <Image
                src={patientBodyImage}
                alt="Patient Body"
                className="w-full h-full"
              />

              <div
                onMouseOver={() => setIsBodyMarkPopupOpen(true)}
                onMouseOut={() => setIsBodyMarkPopupOpen(false)}
                className="w-4 h-4 rounded-full bg-[#FFB71C] absolute top-[43px] left-[36.5px]"
              ></div>

              {isBodyMarkPopupOpen && (
                <div className="absolute -left-[187px] top-[5px]">
                  <BodyMarkLocationPopup
                    injuryName="Shoulder Injury"
                    InjuryDescription="Symptoms such as persistent pain, weakness, stiffness, or a popping sensation can help guide the diagnosis."
                    setIsBodyMarkPopupOpen={setIsBodyMarkPopupOpen}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-[42px]">
          <TextAreaInput
            name="problemDescription"
            labelText="Initial Assessment"
            placeholder="Please enter details about assessment."
          />
        </div>

        <div className="mt-[42px]">
          <UploadInputV2 />
        </div>

        <div className="mt-[42px] flex flex-col md:flex-row justify-start items-start gap-[30px]">
          <div className="flex-1">
            <div>
              <H5 className="text-text-body-muted">Severity</H5>

              <div className="mt-6 flex flex-wrap justify-start items-center gap-[28px]">
                <RadioInput
                  name="problemSeverity"
                  labelText="Major"
                  checked={severity === "Major"}
                  onChange={() => setSeverity("Major")}
                />

                <RadioInput
                  name="problemSeverity"
                  labelText="Minor"
                  checked={severity === "Minor"}
                  onChange={() => setSeverity("Minor")}
                />
              </div>
            </div>

            <div className="mt-[42px]">
              <H5 className="text-text-body-muted">Patient Visibility</H5>

              <div className="mt-6 flex flex-wrap justify-start items-center gap-[28px]">
                <RadioInput
                  name="patientVisibility"
                  labelText="Yes"
                  checked={patientVisibility === "Yes"}
                  onChange={() => setPatientVisibility("Yes")}
                />

                <RadioInput
                  name="patientVisibility"
                  labelText="No"
                  checked={patientVisibility === "No"}
                  onChange={() => setPatientVisibility("Yes")}
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div>
              <H5 className="text-text-body-muted">
                Can the player still play?
              </H5>

              <div className="mt-6 flex flex-wrap justify-start items-center gap-[28px]">
                <RadioInput
                  name="playingCondition"
                  labelText="Fit to play"
                  checked={playingCondition === "Fit"}
                  onChange={() => setPlayingCondition("Fit")}
                />

                <RadioInput
                  name="playingCondition"
                  labelText="Unable to play"
                  checked={playingCondition === "Unfit"}
                  onChange={() => setPlayingCondition("Unfit")}
                />

                <RadioInput
                  name="playingCondition"
                  labelText="Recovery"
                  checked={playingCondition === "Recovery"}
                  onChange={() => setPlayingCondition("Recovery")}
                />
              </div>
            </div>

            <div className="mt-[42px]">
              <H5 className="text-text-body-muted">Visibility</H5>

              <div className="mt-6 flex flex-wrap xl:flex-nowrap justify-start items-center gap-[28px]">
                <RadioInput
                  name="visibility"
                  labelText="All"
                  checked={visibility === "All"}
                  onChange={() => setVisibility("All")}
                />

                <RadioInput
                  name="visibility"
                  labelText="Medics and Mental Health Only"
                  checked={visibility === "Medics and Mental Health Only"}
                  onChange={() =>
                    setVisibility("Medics and Mental Health Only")
                  }
                />

                <RadioInput
                  name="visibility"
                  labelText="Medics Only"
                  checked={visibility === "Medics Only"}
                  onChange={() => setVisibility("Medics Only")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-end items-center gap-2.5">
          <OutlineButton
            text="Cancel"
            className="!w-fit !border-border-light !px-[19px] !py-[11px] text-text-default-dark"
            icon={<CrossIcon className="!fill-[#16192C]" />}
            isIcon={true}
          />
          <FilledButton
            text="Save"
            className="!w-fit !px-5 !py-3"
            icon={<PlusIcon />}
            isIcon={true}
          />
        </div>
      </div>

      {isSearchDiagnosisModalOpen && (
        <div className="fixed inset-0 z-[500] bg-[#1E52DC99]">
          <SearchDiagnosisModal
            selectedDiagnosis={selectedDiagnosis}
            setSelectedDiagnosis={setSelectedDiagnosis}
            setIsSearchDiagnosisModalOpen={setIsSearchDiagnosisModalOpen}
          />
        </div>
      )}
    </div>
  );
};

export default AddPatientProblemPage;
