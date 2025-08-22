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
import H5 from "@/components/Typography/H5";
import Image from "next/image";
import React, { useRef, useState } from "react";

import patientBodyImage from "@/assets/images/patients/patient-body.png";
import BodyMarkLocationPopup from "@/components/Popups/BodyMarkLocationPopup";
import { TDiagnosis } from "@/types/TDiagnosis";
import SelectedDiagnosisTableHeader from "@/components/Tables/SelectedDiagnosisTableHeader";
import SelectedDiagnosisTableRow from "@/components/Tables/SelectedDiagnosisTableRow";
import { Controller, useForm } from "react-hook-form";
import { TProblem } from "@/types/TProblem";

import { format } from "date-fns";
import { useCreateProblemMutation } from "@/store/apis/Problem";
import TextInputV4 from "@/components/Inputs/TextInputV4";
import InputSearchIcon from "@/components/Svgs/InputSearchIcon";
import SearchDiagnosisDropdown from "@/components/Dropdowns/SearchDianosisDropdown";
import { useClickOutside } from "@/hooks/useClickOutside";
import { toast } from "react-toastify";

const AddPatientProblemPage = () => {
  const [isSearchDiagnosisDropdownOpen, setIsSearchDiagnosisDropdownOpen] =
    useState(false);
  const [isBodyMarkPopupOpen, setIsBodyMarkPopupOpen] = useState(false);

  const [selectedDiagnosis, setSelectedDiagnosis] = useState<TDiagnosis[]>([]);

  const searchDiagnosisRef = useRef<HTMLDivElement>(null);

  const [createProblem] = useCreateProblemMutation();

  const { register, handleSubmit, control, watch } = useForm<TProblem>({
    defaultValues: {
      problemName: "",
      dateOfInjury: new Date(),
      diagnosis: [],
      category: "Injury",
      description: "",
      initialAssessment: "",
      bodyLocation: "Shoulder",
      problemImage:
        "https://unsplash.com/photos/ice-cream-truck-parked-outdoors-during-the-day-ODXOROjPeds",
      severity: "Major",
      playingStatus: "Fit",
      isVisibleToPatient: true,
      visibleTo: "All",
      status: "New Problem",
    },
  });

  const onSubmit = async (data: TProblem) => {
    const problemData = {
      ...data,
      diagnosis: selectedDiagnosis.map((diagnosis) => ({
        _id: diagnosis._id,
      })),
      isVisibleToPatient:
        String(data.isVisibleToPatient) === "true" ? true : false,
    };

    // console.log(problemData);

    try {
      const response = await createProblem(problemData);

      if (response?.error) {
        throw new Error(JSON.stringify(response.error));
      }

      toast.success("Problem added successfully!");
      window.location.href = "/patients/summary";
    } catch (error) {
      console.log(error);
      toast.error("Problem could not be added!");
    }
  };

  useClickOutside(
    [searchDiagnosisRef],
    () => setIsSearchDiagnosisDropdownOpen(false),
    isSearchDiagnosisDropdownOpen
  );

  return (
    <div className="p-[30] bg-bg-surface-secondary rounded-md">
      <div
        className="p-[30px] bg-bg-surface-primary rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-8">
            <div className="flex-1">
              <Controller
                name="dateOfInjury"
                control={control}
                render={({ field }) => (
                  <DateInput
                    name="searchPatient"
                    placeholder="Select Date"
                    labelText="Date of onset"
                    isIcon={true}
                    icon={<CalenderIcon2 />}
                    className="!pt-3 !pb-4 placeholder:!text-text-natural-gray-8"
                    iconClassName="!top-3 !translate-y-0 !w-[19px] !h-4"
                    calenderPosition="end"
                    onDateSelect={(date) => {
                      field.onChange(date ? format(date, "yyyy-MM-dd") : "");
                    }}
                    selectedDate={
                      field.value ? new Date(field.value) : undefined
                    }
                  />
                )}
              />
            </div>

            <div className="flex-1">
              <H5 className="text-text-body-muted">Category</H5>

              <div className="mt-6 flex justify-start items-center gap-[28px]">
                <RadioInput
                  name="category"
                  labelText="Injury"
                  value="Injury"
                  register={register("category")}
                  checked={watch("category") === "Injury"}
                />

                <RadioInput
                  name="category"
                  labelText="Illness"
                  value="Illness"
                  register={register("category")}
                  checked={watch("category") === "Illness"}
                />
              </div>
            </div>
          </div>

          <div className="mt-[42px] flex flex-col sm:flex-row justify-start sm:items-center gap-4">
            <div
              ref={searchDiagnosisRef}
              className="relative flex-1 flex justify-start items-center gap-4"
            >
              <div
                onClick={() => setIsSearchDiagnosisDropdownOpen(true)}
                className="w-full"
              >
                <TextInputV4
                  name="searchDiagnosis"
                  labelText="Search Diagnosis"
                  placeholder="Type code or title of diagnosis"
                  isIcon={true}
                  icon={<InputSearchIcon isBlue={true} />}
                  className="placeholder:!text-text-natural-gray-8"
                  labelClassName="text-text-body-light !text-[14px] !leading-[100%] font-medium !pt-[12px]"
                />
              </div>

              {isSearchDiagnosisDropdownOpen && (
                <div className="absolute z-10 left-3 top-20">
                  <SearchDiagnosisDropdown
                    selectedDiagnosis={selectedDiagnosis}
                    setSelectedDiagnosis={setSelectedDiagnosis}
                  />
                </div>
              )}
            </div>

            <div className="flex-1">
              <TextInputV4
                name="problemName"
                labelText="Problem Name"
                placeholder="Enter problem name"
                className="placeholder:!text-text-natural-gray-8"
                labelClassName="text-text-body-light !text-[14px] !leading-[100%] font-medium !pt-[12px]"
                register={register("problemName")}
              />
            </div>
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
              name="description"
              labelText="Additional Diagnosis Details (if there’s no details just type “none”)"
              placeholder="Please add more details about the diagnosis here especially if you don’t find the march code. also here add if there anything more than the diagnosis."
              register={register("description")}
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
              name="initialAssessment"
              labelText="Initial Assessment"
              placeholder="Please enter details about assessment."
              register={register("initialAssessment")}
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
                    name="severity"
                    labelText="Major"
                    value="Major"
                    register={register("severity")}
                    checked={watch("severity") === "Major"}
                  />

                  <RadioInput
                    name="severity"
                    labelText="Minor"
                    value="Minor"
                    register={register("severity")}
                    checked={watch("severity") === "Minor"}
                  />
                </div>
              </div>

              <div className="mt-[42px]">
                <H5 className="text-text-body-muted">Patient Visibility</H5>

                <div className="mt-6 flex flex-wrap justify-start items-center gap-[28px]">
                  <RadioInput
                    name="isVisibleToPatient"
                    labelText="Yes"
                    value="true"
                    register={register("isVisibleToPatient")}
                    checked={String(watch("isVisibleToPatient")) === "true"}
                  />

                  <RadioInput
                    name="isVisibleToPatient"
                    labelText="No"
                    value="false"
                    register={register("isVisibleToPatient")}
                    checked={String(watch("isVisibleToPatient")) === "false"}
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
                    name="playingStatus"
                    labelText="Fit to play"
                    value="Fit"
                    register={register("playingStatus")}
                    checked={watch("playingStatus") === "Fit"}
                  />

                  <RadioInput
                    name="playingStatus"
                    labelText="Unable to play"
                    value="Injured"
                    register={register("playingStatus")}
                    checked={watch("playingStatus") === "Injured"}
                  />

                  <RadioInput
                    name="playingStatus"
                    labelText="In Recovery"
                    value="In Recovery"
                    register={register("playingStatus")}
                    checked={watch("playingStatus") === "In Recovery"}
                  />
                </div>
              </div>

              <div className="mt-[42px]">
                <H5 className="text-text-body-muted">Visibility</H5>

                <div className="mt-6 flex flex-wrap xl:flex-nowrap justify-start items-center gap-[28px]">
                  <RadioInput
                    name="visibleTo"
                    labelText="All"
                    value="All"
                    register={register("visibleTo")}
                    checked={watch("visibleTo") === "All"}
                  />

                  <RadioInput
                    name="visibleTo"
                    labelText="Medics and Mental Health Only"
                    value="Medics and Mental Health Only"
                    register={register("visibleTo")}
                    checked={
                      watch("visibleTo") === "Medics and Mental Health Only"
                    }
                  />

                  <RadioInput
                    name="visibleTo"
                    labelText="Medics Only"
                    value="Medics Only"
                    register={register("visibleTo")}
                    checked={watch("visibleTo") === "Medics Only"}
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
        </form>
      </div>
    </div>
  );
};

export default AddPatientProblemPage;
