"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

import TableBodyHeading from "@/components/Typography/TableBodyHeading";
import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import PatientFitBadge from "../Badges/PatientFitBadge";
import PatientStatusBadge from "../Badges/PatientStatusBadge";
import SidebarBadge from "../Badges/SidebarBadge";
import PlayerFitPopupText from "../Popups/PlayerFitPopupText";
import SingleOrganization from "../patients/SingleOrganization";
import OrganizationAddIcon from "../Svgs/OrganizationAddIcon";
import DropDownMenu from "../Shared/DropDownMenu";

import EditIcon from "../Svgs/EditIcon";
import EyeIcon from "../Svgs/EyeIcon";
import TransferIcon from "../Svgs/TransferIcon";
import ArchiveIcon from "../Svgs/ArchiveIcon";
import { TMenuItem } from "@/types/TDropDownMenu";
import AddPatientOrganizationDropdown from "../Dropdowns/AddPatientOrganizationDropdown";
import { createPortal } from "react-dom";
import DeleteIcon from "../Svgs/DeleteIcon";
import AddPatientTeamDropdown from "../Dropdowns/AddPatientTeamDropdown";
import { TOrganization } from "@/types/TOrganization";
import { TTeam } from "@/types/TTeam";

type PatientTableRowSuperAdminProps = {
  patientImage: StaticImageData | string;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  organizations: TOrganization[];
  teams: TTeam[];
  status: string;
  lastUpdated: string;
  isLastAddOrg: boolean;
  isLastAddTeam: boolean;
  isLastAction: boolean;
};

const PatientTableRawSuperAdmin = ({
  patientImage,
  patientName,
  playerFitStatus,
  playerJoinDate,
  notificationNumber,
  organizations,
  teams,
  status,
  lastUpdated,
  isLastAddOrg = false,
  isLastAddTeam = false,
  isLastAction = false,
}: PatientTableRowSuperAdminProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAddOrganizationOpen, setIsAddOrganizationOpen] = useState(false);
  const [openTeamIndex, setOpenTeamIndex] = useState<number | null>(null);

  const [teamPositionReady, setTeamPositionReady] = useState(false);

  const [addOrgPosition, setAddOrgPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
  });

  const [addTeamPosition, setAddTeamPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
  });

  const actionButtonRef = useRef<HTMLDivElement | null>(null);
  const addOrgButtonRef = useRef<HTMLDivElement | null>(null);
  const teamButtonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const addOrgDropdownRef = useRef<HTMLDivElement | null>(null);
  const actionDropdownRef = useRef<HTMLDivElement | null>(null);

  // Function for Add Organization
  const updateAddOrgPosition = () => {
    if (addOrgButtonRef.current) {
      const rect = addOrgButtonRef.current.getBoundingClientRect();
      setAddOrgPosition({
        top: rect.bottom + 7 + window.scrollY,
        bottom: rect.top - 428 - 7 + window.scrollY,
        left: rect.left - 13 + window.scrollX,
      });
    }
  };

  // Function for Add Team
  const updateAddTeamPosition = (index: number) => {
    const el = teamButtonRefs.current[index];
    if (el) {
      const rect = el.getBoundingClientRect();
      setAddTeamPosition({
        top: rect.bottom + 8 + window.scrollY,
        bottom: rect.top - 408 - 8 + window.scrollY, // fixed unary + bug
        left: rect.left - 13 + window.scrollX,
      });

      setTeamPositionReady(true); // ✅ now ready
    }
  };

  // Listeners for add org dropdown
  useEffect(() => {
    if (isAddOrganizationOpen) {
      updateAddOrgPosition();
      window.addEventListener("scroll", updateAddOrgPosition);
      window.addEventListener("resize", updateAddOrgPosition);
    }
    return () => {
      window.removeEventListener("scroll", updateAddOrgPosition);
      window.removeEventListener("resize", updateAddOrgPosition);
    };
  }, [isAddOrganizationOpen]);

  // Listeners for add team dropdown
  useEffect(() => {
    if (openTeamIndex !== null) {
      updateAddTeamPosition(openTeamIndex);
      const handle = () => updateAddTeamPosition(openTeamIndex);
      window.addEventListener("scroll", handle);
      window.addEventListener("resize", handle);
      return () => {
        window.removeEventListener("scroll", handle);
        window.removeEventListener("resize", handle);
      };
    }
  }, [openTeamIndex]);

  // Close on outside click for add org dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        addOrgButtonRef.current &&
        addOrgDropdownRef.current &&
        !addOrgButtonRef.current.contains(e.target as Node) &&
        !addOrgDropdownRef.current.contains(e.target as Node)
      ) {
        setIsAddOrganizationOpen(false);
      }
    }

    if (isAddOrganizationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isAddOrganizationOpen]);

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
      icon: <DeleteIcon />,
      text: "Delete",
      isLink: false,
      onClick: () => {
        console.log("Delete");
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

  const [organizationsData, setOrganizationsData] =
    useState<TOrganization[]>(organizations);

  const [teamsData, setTeamsData] = useState<TTeam[]>(teams);

  return (
    <div
      className="bg-bg-surface-primary grid text-left w-full min-h-[52px] py-1.5 xl-py-0"
      style={{
        gridTemplateColumns: "0.3063fr 0.1982fr 0.2342fr 0.1730fr 0.0883fr",
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

      <div className="xl:pl-6 flex items-center justify-start gap-2 min-w-0">
        {organizationsData?.slice(0, 2)?.map((organization, index) => (
          <div
            key={index}
            className="relative"
            onMouseLeave={() => setOpenTeamIndex(null)}
          >
            <div
              ref={(el) => {
                teamButtonRefs.current[index] = el;
              }}
              onMouseEnter={() => setOpenTeamIndex(index)}
            >
              <SingleOrganization
                organizationImage={organization.image}
                organizationName={organization.name}
              />
            </div>

            {/* Portal Dropdown */}
            {openTeamIndex !== null &&
              teamPositionReady &&
              createPortal(
                <div
                  className={`absolute transition-all duration-700 ease-in-out ${
                    openTeamIndex === index
                      ? "opacity-100 z-[9999]  translate-y-0 pointer-events-auto"
                      : "opacity-0 -z-[9999] -translate-y-2 pointer-events-none"
                  }`}
                  style={{
                    top: isLastAddTeam
                      ? addTeamPosition.bottom
                      : addTeamPosition.top,
                    left:
                      window.innerWidth <= 767 ? "50%" : addTeamPosition.left,
                    transform:
                      window.innerWidth <= 767
                        ? "translateX(-50%)"
                        : "translateX(0%)",
                  }}
                >
                  <AddPatientTeamDropdown
                    teams={teamsData}
                    setTeamsData={setTeamsData}
                    setIsAddTeamOpen={() => setOpenTeamIndex(null)}
                  />

                  <div
                    className={`hidden sm:block absolute left-[22px] w-[15px] h-[15px] bg-bg-default-white [clip-path:polygon(50%_0,100%_100%,0_100%)] ${
                      isLastAddTeam
                        ? "rotate-[180deg] -bottom-[9px]"
                        : "-top-[9px]"
                    }`}
                  ></div>
                </div>,
                document.body
              )}
          </div>
        ))}

        {organizationsData?.length > 2 && (
          <div
            onClick={() => setIsAddOrganizationOpen(!isAddOrganizationOpen)}
            className={`min-w-8 w-8 h-8 border border-bg-primary-blue text-[10px] font-bold text-text-primary-blue rounded-full flex justify-center items-center cursor-pointer`}
          >
            + {organizationsData?.length - 2}
          </div>
        )}

        <div className="relative">
          <div
            ref={addOrgButtonRef}
            onClick={() => setIsAddOrganizationOpen(!isAddOrganizationOpen)}
            className={`w-8 h-8 bg-bg-primary-blue rounded-full flex justify-center items-center cursor-pointer`}
          >
            <OrganizationAddIcon />
          </div>

          {isAddOrganizationOpen &&
            createPortal(
              <div
                ref={addOrgDropdownRef}
                className={`absolute ${
                  isAddOrganizationOpen ? "z-[9999]" : "-z-[9999]"
                }`}
                style={{
                  top: isLastAddOrg
                    ? addOrgPosition.bottom
                    : addOrgPosition.top,
                  left: window.innerWidth <= 767 ? "50%" : addOrgPosition.left,
                  transform:
                    window.innerWidth <= 767
                      ? "translateX(-50%)"
                      : "translateX(0%)",
                }}
              >
                <AddPatientOrganizationDropdown
                  organizations={organizationsData}
                  setOrganizationsData={setOrganizationsData}
                  setIsAddOrganizationOpen={setIsAddOrganizationOpen}
                />
              </div>,
              document.body
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

export default PatientTableRawSuperAdmin;
