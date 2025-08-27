import FilledButton from "@/components/Buttons/FilledButton";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import SelectNoteCategoryDropdown from "@/components/Dropdowns/SelectNoteCategoryDropdown";
import DateInput from "@/components/Inputs/DateInput";
import SelectInputV4 from "@/components/Inputs/SelectInputV4";
import SwitchInput from "@/components/Inputs/SwitchInput";
import TextAreaInput from "@/components/Inputs/TextAreaInput";
import UploadInputV2 from "@/components/Inputs/UploadInputV2";
import CalenderIcon2 from "@/components/Svgs/CalenderIcon2";
import CrossIcon from "@/components/Svgs/CrossIcon";
import CrossIcon2 from "@/components/Svgs/CrossIcon2";
import PlusIcon from "@/components/Svgs/PlusIcon";
import SelectDownArrow2 from "@/components/Svgs/SelectDownArrow2";
import H2 from "@/components/Typography/H2";
import { noteCategory } from "@/data/noteCategory";
import React, { useState } from "react";

const AddNoteModal = ({
  setIsAddNoteModalOpen,
}: {
  setIsAddNoteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSelectCategoryDropdownOpen, setIsSelectCategoryDropdownOpen] =
    useState(false);

  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    label: string;
    value: string;
  } | null>(null);

  const [isHighPrivacy, setIsHighPrivacy] = useState(false);
  const [reportToCoach, setReportToCoach] = useState(false);
  const [isTreatmentObtain, setIsTreatmentObtain] = useState(false);

  return (
    <div
      style={{
        boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
      className="p-[30px] max-w-[1000px] mx-auto w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-bg-default-white rounded-2xl max-h-[90vh] overflow-y-auto"
    >
      <H2 className="text-text-default-dark">Add Note</H2>

      <div className="mt-8 flex justify-start items-center gap-8">
        <div>
          <DateInput
            name="consultationDate"
            placeholder="Select Date"
            labelText="Consultation Date"
            className="min-w-[292px] !pt-3 !pb-4 placeholder:!text-text-natural-gray-8"
            iconClassName="!top-3 !translate-y-0 !w-[19px] !h-4"
            isIcon={true}
            icon={<CalenderIcon2 />}
          />
        </div>

        <div className="relative">
          <SelectInputV4
            onClick={() => setIsSelectCategoryDropdownOpen(true)}
            name="category"
            labelText="Link To"
            placeholder="Select Category"
            isIcon={true}
            icon={<SelectDownArrow2 />}
            className="min-w-[292px]"
            value={selectedCategory?.label}
          />

          {isSelectCategoryDropdownOpen && (
            <div className="absolute top-[81px]">
              <SelectNoteCategoryDropdown
                setSelectedCategory={setSelectedCategory}
                isSelectCategoryDropdownOpen={isSelectCategoryDropdownOpen}
                setIsSelectCategoryDropdownOpen={setIsSelectCategoryDropdownOpen}
                options={
                  noteCategory as [
                    {
                      id: string;
                      label: string;
                      value: string;
                    }
                  ]
                }
              />
            </div>
          )}
        </div>

        <div>
          <SelectInputV4
            name="labels"
            labelText="Labels"
            placeholder="Choose Labels"
            isIcon={true}
            icon={<SelectDownArrow2 />}
            className="min-w-[292px]"
          />
        </div>
      </div>

      <div className="mt-[32px]">
        <TextAreaInput
          name="description"
          labelText="Details"
          placeholder="Please enter details."
        />
      </div>

      <div className="mt-[32px] flex justify-start items-center gap-3">
        {[
          "Not Satisfied",
          "Improvement",
          "Betterment",
          "Good",
          "Excellent",
        ]?.map((text, index) => {
          return (
            <div
              key={index}
              className="px-6 py-2 w-fit bg-bg-soft-blue rounded-[44px] text-text-primary-blue text-[14px] leading-[16px] font-medium"
            >
              {text}
            </div>
          );
        })}
      </div>

      <div className="mt-[32px] space-y-[18px]">
        <div className="flex justify-start items-center gap-[44px]">
          <h4 className="min-w-[270px] text-text-body-light text-[14px] leading-[100%] font-medium">
            Is this note high privacy (Doctors only)?
          </h4>

          <div className="flex justify-center items-center gap-3">
            <h6 className="text-[14px] leading-[24px] font-medium">No</h6>
            <SwitchInput checked={isHighPrivacy} onChange={setIsHighPrivacy} />
            <h6 className="text-[14px] leading-[24px] font-medium">Yes</h6>
          </div>
        </div>

        <div className="flex justify-start items-center gap-[44px]">
          <h4 className="min-w-[270px] text-text-body-light text-[14px] leading-[100%] font-medium">
            Add this to Coach Report?
          </h4>

          <div className="flex justify-center items-center gap-3">
            <h6 className="text-[14px] leading-[24px] font-medium">No</h6>
            <SwitchInput checked={reportToCoach} onChange={setReportToCoach} />
            <h6 className="text-[14px] leading-[24px] font-medium">Yes</h6>
          </div>
        </div>

        <div className="flex justify-start items-center gap-[44px]">
          <h4 className="min-w-[270px] text-text-body-light text-[14px] leading-[100%] font-medium">
            Is this treatment obtain?
          </h4>

          <div className="flex justify-center items-center gap-3">
            <h6 className="text-[14px] leading-[24px] font-medium">No</h6>
            <SwitchInput
              checked={isTreatmentObtain}
              onChange={setIsTreatmentObtain}
            />
            <h6 className="text-[14px] leading-[24px] font-medium">Yes</h6>
          </div>
        </div>
      </div>

      <div className="mt-[32px]">
        <UploadInputV2 />
      </div>

      <div className="mt-[32px] flex justify-end items-center gap-2.5">
        <OutlineButton
          onClick={() => setIsAddNoteModalOpen(false)}
          text="Cancel"
          isIcon={true}
          icon={<CrossIcon className="fill-[#16192C]" />}
          className="!border-border-light !w-fit !px-5 !py-3 !rounded-md"
          textClassName="!text-[12px] !text-[12px] !text-text-default-dark"
        />

        <FilledButton
          text="Save"
          isIcon={true}
          icon={<PlusIcon />}
          className="!w-fit !px-5 !py-3 !rounded-md"
        />
      </div>

      <div
        onClick={() => setIsAddNoteModalOpen(false)}
        className="w-5 h-5 absolute top-[30px] right-[30px] cursor-pointer"
      >
        <CrossIcon2 />
      </div>
    </div>
  );
};

export default AddNoteModal;
