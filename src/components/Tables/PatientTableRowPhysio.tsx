import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

import TableBodyText from "@/components/Typography/TableBodyText";

import ActionMenuIcon from "@/components/Svgs/ActionMenuIcon";
import PatientStatusBadge from "../Badges/PatientStatusBadge";

import doctorAvatarImage from "@/assets/images/patients/doctor-1.png";
import SinglePatient from "../patients/SinglePatient";

import EditIcon from "../Svgs/EditIcon";
import EyeIcon from "../Svgs/EyeIcon";
import TransferIcon from "../Svgs/TransferIcon";
import ArchiveIcon from "../Svgs/ArchiveIcon";
import { TMenuItem } from "@/types/TDropDownMenu";
import DropDownMenu from "../Shared/DropDownMenu";
import { createPortal } from "react-dom";

type patient = {
  patientImage: StaticImageData | string;
  patientName: string;
  playerFitStatus: string;
  playerJoinDate: string;
  notificationNumber: number;
  teams: string[];
};

type PatientTableRowSuperAdminProps = {
  patients: patient[];
  status: string;
  lastUpdated: string;
  isLastAction: boolean;
};

const PatientTableRawPhysio = ({
  patients,
  status,
  lastUpdated,
  isLastAction = false,
}: PatientTableRowSuperAdminProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
  });

  const actionButtonRef = useRef<HTMLDivElement | null>(null);

  const actionDropdownRef = useRef<HTMLDivElement | null>(null);

  // Function to update dropdown position
  const updateDropdownPosition = () => {
    if (actionButtonRef.current) {
      const rect = actionButtonRef?.current?.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 6,
        bottom: rect.top - 178 - 7 + window.scrollY,
        left: rect.right - 155 + window.scrollX, // Adjust width offset here
      });
    }
  };

  // Attach scroll/resize listeners when dropdown is open
  useEffect(() => {
    if (isDropdownOpen) {
      updateDropdownPosition();
      window.addEventListener("scroll", updateDropdownPosition);
      window.addEventListener("resize", updateDropdownPosition);
    }
    return () => {
      window.removeEventListener("scroll", updateDropdownPosition);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [isDropdownOpen]);

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
        gridTemplateColumns: "0.1622fr 0.3604fr 0.1982fr 0.1667fr 0.1153fr",
        boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
      }}
    >
      <div className="px-6 flex items-center justify-start gap-3 min-w-0">
        <div className="relative w-9 h-9">
          <Image
            src={doctorAvatarImage}
            alt="Assigned Doctor"
            width={36}
            height={36}
            className="min-w-9 min-h-9 w-full h-full rounded-full"
          />

          <div className="absolute top-[1.66px] right-[1.66px] w-[6.65px] h-[6.65px] bg-bg-default-success rounded-full"></div>
        </div>
        <h4 className="text-text-natural-gray-4 text-[12px] leading-[100%] font-semibold text-nowrap">
          To me
        </h4>
      </div>

      <div className="pl-6 flex items-center justify-start gap-2 min-w-0">
        {patients?.map((patient, index) => (
          <div key={index}>
            <SinglePatient
              patientImage={patient.patientImage}
              patientName={patient.patientName}
              playerFitStatus={patient.playerFitStatus}
              playerJoinDate={patient.playerJoinDate}
              notificationNumber={patient.notificationNumber}
              teams={patient.teams}
            />
          </div>
        ))}
      </div>

      <div className="pl-[18px] flex items-center justify-start min-w-0">
        <PatientStatusBadge status={status} />
      </div>

      <div className="xl:pl-6 flex items-center justify-start min-w-0">
        <TableBodyText className="text-text-body-light">
          {lastUpdated}
        </TableBodyText>
      </div>

      <div className="px-6 flex items-center justify-start min-w-0">
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
            createPortal(
              <div
                ref={actionDropdownRef}
                className="absolute z-[9999]"
                style={{
                  top: isLastAction
                    ? dropdownPosition.bottom
                    : dropdownPosition.top,
                  left: dropdownPosition.left,
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

export default PatientTableRawPhysio;
