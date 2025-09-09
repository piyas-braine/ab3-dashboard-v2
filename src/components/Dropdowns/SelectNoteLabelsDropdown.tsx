import { useClickOutside } from "@/hooks/useClickOutside";
import React, { useRef } from "react";

const SelectNoteLabelsDropdown = ({
  options,
  setSelectedLabels,
  isSelectLabelsDropdownOpen,
  setIsSelectLabelsDropdownOpen,
}: {
  options:
    | [
        {
          id: string;
          label: string;
          value: string;
          priority: string;
        }
      ]
    | [];
  setSelectedLabels: React.Dispatch<
    React.SetStateAction<{
      id: string;
      label: string;
      value: string;
      priority: string;
    } | null>
  >;
  isSelectLabelsDropdownOpen: boolean;
  setIsSelectLabelsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    [dropDownRef],
    () => setIsSelectLabelsDropdownOpen(false),
    isSelectLabelsDropdownOpen
  );

  const getClassName = (priority: string) => {
    switch (priority) {
      case "Important":
        return "bg-[#FFF4DF] text-[#D5850A]";
      case "Urgent":
        return "bg-[#FFF1F4] text-[#D12D4B]";
      case "Normal":
        return "bg-[#DFFFE7] text-[#339D4D]";
      case "Routine":
        return "bg-[#E7EEFF] text-[#1E52DC]";
      default:
        return "bg-[#F2F0FE] text-[#7564F7]";
    }
  };

  return (
    <div ref={dropDownRef} className="relative z-[500]">
      <div
        className="p-3 max-h-[256px] h-full w-[292px] bg-bg-default-white rounded-2xl overflow-y-auto !add-team-scrollbar flex flex-wrap justify-start items-center gap-2"
        style={{
          boxShadow: "0px 0px 89px 0px #0000001F",
        }}
      >
        {options?.map((option, index) => (
          <div
            onClick={() => {
              setSelectedLabels(option);
              setIsSelectLabelsDropdownOpen(false);
            }}
            key={index}
            className={`px-4 py-2 cursor-pointer rounded-[44px] ${getClassName(
              option.priority
            )}`}
          >
            <h4 className={`text-[12px] leading-[16px] font-medium`}>
              {option.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectNoteLabelsDropdown;
