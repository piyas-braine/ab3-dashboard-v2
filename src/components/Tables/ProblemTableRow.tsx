"use client";

import React, { useRef, useState } from "react";

import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import SidebarBadge from "@/components/Badges/SidebarBadge";
import DropDownMenu from "@/components/Shared/DropDownMenu";

import { useClickOutside } from "@/hooks/useClickOutside";
import { menuItems } from "@/constants/menuItems";
import { TProblemTableRowProps } from "@/types/TProblemTableRowProps";
import PatientVisibleIcon from "@/components/Svgs/PatientVisibleIcon";
import PatientHiddenIcon from "@/components/Svgs/PatientHiddenIcon";

const ProblemTableRow = ({
  problemName,
  problemNumber,
  severity,
  category,
  patientVisibility,
  lastUpdated,
  status,
  isLastAction = false,
}: TProblemTableRowProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const actionButtonRef = useRef<HTMLDivElement | null>(null);
  const actionDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click for action dropdown
  useClickOutside(
    [actionButtonRef, actionDropdownRef],
    () => {
      setIsDropdownOpen(false);
    },
    isDropdownOpen
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New Problem":
        return "text-[#1E52DC]";
      case "In Treatment":
        return "text-[#FB6B18]";
      case "Solved":
        return "text-[#08CA08]";
    }
  };

  return (
    <div
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5"
      style={{
        gridTemplateColumns: "270fr 114fr 124fr 152fr 155fr 145fr 90fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="pl-6 flex xl:flex-row flex-col items-center justify-between gap-3 min-w-0">
        <div className="flex xl:flex-row flex-col justify-start items-center gap-2">
          <div className="relative w-8 h-8 bg-bg-semantic-3 flex justify-center items-center rounded-full">
            <span className="text-text-default-white text-[12px] leading-[25px] font-semibold">
              {problemName?.split(" ")?.[0]?.charAt(0)}
              {problemName
                ?.split(" ")
                ?.[problemName?.split(" ")?.length - 1]?.charAt(0)}
            </span>
          </div>
          <TableBodyHeading>{problemName}</TableBodyHeading>
        </div>
        {problemNumber > 0 && <SidebarBadge statNumber={problemNumber} />}
      </div>

      <div className="pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light !font-semibold">
          {severity}
        </TableBodyText>
      </div>

      <div className="pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light !font-semibold capitalize">
          {category}
        </TableBodyText>
      </div>

      <div className="flex items-center justify-center min-w-0">
        <div className="w-[22px] h-[22px]">
          {patientVisibility === true ? (
            <PatientVisibleIcon />
          ) : (
            <PatientHiddenIcon />
          )}
        </div>
      </div>

      <div className="pl-[18px] flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light !font-semibold">
          {lastUpdated}
        </TableBodyText>
      </div>

      <div className="pl-4 xl:pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className={`${getStatusColor(status)} !font-semibold`}>
          {status}
        </TableBodyText>
      </div>

      <div className="pl-2 xl:pl-6 flex items-center justify-start min-w-[70px]">
        <div className="relative">
          <div
            ref={actionButtonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-9 h-9 rounded-[4px] flex justify-center items-center border border-border-light cursor-pointer"
          >
            <div className="min-w-6 min-h-6 w-6 h-6">
              <ActionMenuIcon />
            </div>
          </div>

          <div
            ref={actionDropdownRef}
            className={`absolute ${
              isLastAction ? "bottom-[44px]" : "top-[44px]"
            } right-0 ${
              isDropdownOpen ? "opacity-100 z-[9999]" : "opacity-0 -z-[9999]"
            }`}
          >
            <DropDownMenu
              menuItems={menuItems}
              className="!w-[155px]"
              style={{
                boxShadow: "0px 0px 77px 0px #0C1A4B1F",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemTableRow;
