"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import SingleTeam from "@/components/patients/SingleTeam";
import SidebarBadge from "@/components/Badges/SidebarBadge";
import TeamAddIcon from "@/components/Svgs/TeamAddIcon";
import PlayerFitPopupText from "@/components/Popups/PlayerFitPopupText";
import DropDownMenu from "@/components/Shared/DropDownMenu";

import AddTeamDropdown from "@/components/Dropdowns/AddTeamDropdown";
import { useClickOutside } from "@/hooks/useClickOutside";
import { TOrganizationTableRowProps } from "@/types/TOrganizationTableRow";
import OrganizationBadge from "@/components/Badges/OrganizationBadge";
import { format } from "date-fns";
import EyeIcon from "@/components/Svgs/EyeIcon";
import EditIcon from "@/components/Svgs/EditIcon";
import DeleteIcon from "@/components/Svgs/DeleteIcon";
import { TMenuItem } from "@/types/TDropDownMenu";
import { useDropdownPosition } from "@/hooks/useDropdownPosition";
import { createPortal } from "react-dom";

const menuItems: TMenuItem[] = [
  {
    icon: <EyeIcon />,
    text: "View",
    isLink: true,
    href: "/patients/summary",
    onClick: () => {
      console.log("View");
    },
  },
  {
    icon: <EditIcon />,
    text: "Edit",
    isLink: false,
    onClick: () => {
      console.log("Edit");
    },
  },
  {
    icon: <DeleteIcon />,
    text: "Delete",
    isLink: false,
    onClick: () => {
      console.log("Delete");
    },
  },
];

const OrganizationTableRaw = ({
  tableRef,
  organizationImage,
  organizationName,
  organizationStatus,
  organizationJoinDate,
  playerNumber,
  teams,
  country,
  lastUpdated,
  isLastAction = false,
}: TOrganizationTableRowProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAddTeamOpen, setIsAddTeamOpen] = useState(false);

  const actionButtonRef = useRef<HTMLDivElement | null>(null);
  const actionDropdownRef = useRef<HTMLDivElement | null>(null);

  const addTeamDropdownRef = useRef<HTMLDivElement | null>(null);

  const {
    position: actionDropdownPosition,
    ready: actionDropdownPositionReady,
  } = useDropdownPosition(
    actionButtonRef,
    isDropdownOpen,
    155,
    119,
    8,
    tableRef
  );

  // Close on outside click for action dropdown
  useClickOutside(
    [actionButtonRef, actionDropdownRef],
    () => {
      setIsDropdownOpen(false);
    },
    isDropdownOpen
  );

  // Close on outside click
  useClickOutside(
    [addTeamDropdownRef],
    () => {
      setIsAddTeamOpen(false);
    },
    isAddTeamOpen
  );

  return (
    <div
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5 xl-py-0"
      style={{
        gridTemplateColumns: "0.3063fr 0.1865fr 0.2135fr 0.2fr 0.0937fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="px-6 flex items-center justify-between gap-3 min-w-0">
        <div className="flex justify-start items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              width={24}
              height={24}
              src={organizationImage}
              alt={organizationName}
              className="w-6 h-6 rounded-full flex-shrink-0"
            />

            <div className="absolute -right-[2px] -bottom-[2px] peer">
              <OrganizationBadge status={organizationStatus} />
            </div>

            <div className="absolute left-[2px] bottom-4 opacity-0 peer-hover:opacity-100 transition-all duration-[400ms] ease-in-out">
              <PlayerFitPopupText
                text={
                  organizationStatus === "Active"
                    ? "Active"
                    : organizationStatus === "Inactive"
                    ? "Inactive"
                    : "Pending"
                }
                subText={`Joined - ${organizationJoinDate}`}
              />
            </div>
          </div>
          <TableBodyHeading>{organizationName}</TableBodyHeading>
        </div>
        {playerNumber > 0 && <SidebarBadge statNumber={playerNumber} />}
      </div>

      <div className="pl-6 flex items-center justify-start min-w-0">
        {teams?.map((team, index) => (
          <div key={index} className={index === 0 ? "" : "-ml-[9px]"}>
            <SingleTeam teamName={team?.name} />
          </div>
        ))}

        <div className="relative">
          <div
            onClick={() => setIsAddTeamOpen(!isAddTeamOpen)}
            className={`w-8 h-8 bg-bg-default-white border !border-[#F4F0F0] rounded-full flex justify-center items-center ${
              teams?.length && "-ml-[9px]"
            } cursor-pointer`}
            // style={{ marginLeft: `-${(teams?.length - 1) * 9}px` }}
          >
            <TeamAddIcon />
          </div>

          {isAddTeamOpen && (
            <div
              ref={addTeamDropdownRef}
              className={`fixed h-screen top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center ${
                isAddTeamOpen ? "opacity-100 z-[9999]" : "opacity-0 -z-[9999]"
              }`}
            >
              <AddTeamDropdown teams={teams} />
            </div>
          )}
        </div>
      </div>

      <div className="pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light">
          {country}
        </TableBodyText>
      </div>

      <div className="xl:pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light">
          {format(lastUpdated, "MMM dd, yyyy")}
        </TableBodyText>
      </div>

      <div className="xl:px-6 flex items-center justify-start min-w-0">
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

          {isDropdownOpen &&
            actionDropdownPositionReady &&
            createPortal(
              <div
                ref={actionDropdownRef}
                className={`absolute ${
                  isDropdownOpen
                    ? "opacity-100 z-[9999]"
                    : "opacity-0 -z-[9999]"
                }`}
                style={{
                  top: isLastAction
                    ? actionDropdownPosition.bottom
                    : actionDropdownPosition.top,
                  left: actionDropdownPosition.left,
                  display: (() => {
                    if (!tableRef.current) return "block";
                    const tableRect = tableRef.current.getBoundingClientRect();
                    const dropdownLeft = actionDropdownPosition.left;
                    const dropdownRight = dropdownLeft + 155; // dropdown width
                    // Hide if dropdown overflows table horizontally
                    if (
                      dropdownLeft < tableRect.left ||
                      dropdownRight > tableRect.right
                    ) {
                      return "none";
                    }
                    return "block";
                  })(),
                }}
              >
                <DropDownMenu
                  menuItems={menuItems}
                  className="!w-[155px]"
                  style={{
                    boxShadow: "0px 0px 77px 0px #0C1A4B1F",
                  }}
                />
              </div>,
              document.body
            )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationTableRaw;
