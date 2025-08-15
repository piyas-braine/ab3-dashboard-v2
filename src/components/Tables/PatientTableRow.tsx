"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import PatientFitBadge from "../Badges/PatientFitBadge";
import SingleTeam from "../patients/SingleTeam";
import PatientStatusBadge from "../Badges/PatientStatusBadge";
import SidebarBadge from "../Badges/SidebarBadge";
import TeamAddIcon from "../Svgs/TeamAddIcon";
import PlayerFitPopupText from "../Popups/PlayerFitPopupText";
import DropDownMenu from "../Shared/DropDownMenu";

import EditIcon from "../Svgs/EditIcon";
import EyeIcon from "../Svgs/EyeIcon";
import TransferIcon from "../Svgs/TransferIcon";
import ArchiveIcon from "../Svgs/ArchiveIcon";
import { TMenuItem } from "@/types/TDropDownMenu";
import AddTeamDropdown from "../Dropdowns/AddTeamDropdown";

type PatientTableRowProps = {
  patientImage: StaticImageData | string;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  teams: string[];
  status: string;
  lastUpdated: string;
  isLastAction: boolean;
};

const PatientTableRaw = ({
  patientImage,
  patientName,
  playerFitStatus,
  playerJoinDate,
  notificationNumber,
  teams,
  status,
  lastUpdated,
  isLastAction = false,
}: PatientTableRowProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAddTeamOpen, setIsAddTeamOpen] = useState(false);

  const actionButtonRef = useRef<HTMLDivElement | null>(null);
  const actionDropdownRef = useRef<HTMLDivElement | null>(null);

  const addTeamDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click for action dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        actionButtonRef.current &&
        actionDropdownRef.current &&
        !actionButtonRef.current.contains(e.target as Node) &&
        !actionDropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        addTeamDropdownRef.current &&
        !addTeamDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAddTeamOpen(false);
      }
    }

    if (isAddTeamOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAddTeamOpen]);

  const menuItems: TMenuItem[] = [
    {
      icon: <EyeIcon />,
      text: "View",
      isLink: false,
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
      icon: <TransferIcon />,
      text: "Transfer",
      isLink: false,
      onClick: () => {
        console.log("Transfer");
      },
    },
    {
      icon: <ArchiveIcon />,
      text: "Archive",
      isLink: false,
      onClick: () => {
        console.log("Archive");
      },
    },
  ];

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
              src={patientImage}
              alt={patientName}
              className="w-6 h-6 rounded-full flex-shrink-0"
            />

            <div className="absolute -right-[2px] -bottom-[2px] peer">
              <PatientFitBadge status={playerFitStatus} />
            </div>

            <div className="absolute left-[2px] bottom-4 opacity-0 peer-hover:opacity-100 transition-all duration-[400ms] ease-in-out">
              <PlayerFitPopupText
                text={
                  playerFitStatus === "Fit"
                    ? "Fit to Play"
                    : playerFitStatus === "Injured"
                    ? "Not Fit to Play"
                    : "In Recover"
                }
                subText={`Joined - ${playerJoinDate}`}
              />
            </div>
          </div>
          <TableBodyHeading>{patientName}</TableBodyHeading>
        </div>
        {notificationNumber > 0 && (
          <SidebarBadge statNumber={notificationNumber} />
        )}
      </div>

      <div className="pl-6 flex items-center justify-start min-w-0">
        {teams?.map((team, index) => (
          <div key={index} className={index === 0 ? "" : "-ml-[9px]"}>
            <SingleTeam teamName={team} />
          </div>
        ))}

        <div className="relative">
          <div
            onClick={() => setIsAddTeamOpen(!isAddTeamOpen)}
            className={`w-8 h-8 bg-bg-default-white border !border-[#F4F0F0] rounded-full flex justify-center items-center -ml-[9px]`}
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

      <div className="pl-[18px] flex items-center justify-start min-w-0">
        <PatientStatusBadge status={status} />
      </div>

      <div className="xl:pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light">
          {lastUpdated}
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

export default PatientTableRaw;
