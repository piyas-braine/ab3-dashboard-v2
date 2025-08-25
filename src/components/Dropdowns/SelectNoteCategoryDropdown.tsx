import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import { useClickOutside } from "@/hooks/useClickOutside";
import React, { useRef } from "react";

const SelectNoteCategoryDropdown = ({
  options,
  setSelectedCategory,
  isSelectCategoryDropdownOpen,
  setIsSelectCategoryDropdownOpen,
}: {
  options:
    | [
        {
          id: string;
          label: string;
          value: string;
        }
      ]
    | [];
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<{
      id: string;
      label: string;
      value: string;
    } | null>
  >;
  isSelectCategoryDropdownOpen: boolean;
  setIsSelectCategoryDropdownOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    [dropDownRef],
    () => setIsSelectCategoryDropdownOpen(false),
    isSelectCategoryDropdownOpen
  );

  return (
    <div ref={dropDownRef} className="relative z-[500]">
      <div
        className="max-h-[396px] h-full w-[292px] bg-bg-default-white rounded-2xl overflow-y-auto !add-team-scrollbar"
        style={{
          boxShadow: "0px 0px 89px 0px #0000001F",
        }}
      >
        {options?.map((option, index) => (
          <div
            onClick={() => {
              setSelectedCategory(option);
              setIsSelectCategoryDropdownOpen(false);
            }}
            key={index}
            className="px-6 py-3 cursor-pointer"
            style={{
              boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
            }}
          >
            <TableBodyHeading className="text-text-table-body-strong">
              {option.label}
            </TableBodyHeading>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectNoteCategoryDropdown;
