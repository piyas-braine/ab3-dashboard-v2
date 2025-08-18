import { useEffect, useRef, useState } from "react";

import WarningIcon from "@/components/Svgs/WarningIcon";


import InviteEmailIcon from "../Svgs/InviteEmailIcon";
import { Controller, useForm } from "react-hook-form";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


import React from "react";
import TeamDialog from "../patients/TeamDialog";
import { Input } from "../ui/input";
import InviteModalPatientTeam from "../patients/InviteModalPatientTeam";
import InviteModalAssignPatientTeam from "../patients/InviteModalAssignTeam";
import { useSearchParams } from "next/navigation";
import SelectOrganizationModal from "./SelectOrganizationModal";
import SelectDownArrowIcon from "../Svgs/SelectDownArrowIcon";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  assignTeam: string;
  assignOrganization: string;
}


const InviteNewPatientModal = ({
  setIsInviteNewPatientModalOpen,
}: {
  setIsInviteNewPatientModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const searchParams = useSearchParams();

  const role = searchParams.get("role");

  console.log(role)
  const { register, control, setValue } = useForm<FormValues>();
  const [assignOpen, setAssignOpen] = useState(false);
  const selectPatientInputRef = useRef<HTMLInputElement>(null);
  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    left: -400,
    width: 0,
    zIndex: -100,
  });

  useEffect(() => {
    if (assignOpen && selectPatientInputRef.current) {
      const rect = selectPatientInputRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom, // account for page scroll
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
  }, [assignOpen]);

  const [isSelectOrganizationModalOpen, setIsSelectOrganizationModalOpen] =
    useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(
    "Select Organization"
  );

  const selectOrganizationInputRef = useRef<HTMLInputElement>(null);
  const organizationModalRef = useRef<HTMLDivElement>(null);

  const [dropdownPosOrganization, setDropdownPosOrganization] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (isSelectOrganizationModalOpen && selectOrganizationInputRef.current) {
      const rect = selectOrganizationInputRef.current.getBoundingClientRect();

      const modalHeight = organizationModalRef.current?.getBoundingClientRect();

      console.log(modalHeight);

      setDropdownPosOrganization({
        top: rect.bottom,
        bottom: rect.bottom + rect.height,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [isSelectOrganizationModalOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        organizationModalRef.current &&
        !organizationModalRef.current.contains(e.target as Node)
      ) {
        setIsSelectOrganizationModalOpen(false); // close the modal
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="mt-[29px]">
        <h3 className="text-[20px]">This patient is new to AB3</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-start md:items-end gap-8">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState: { error } }) => (
              <div className="relative z-10 max-w-[454px] w-full h-[55px] mb-5">
                <label className="text-text-body-muted text-[16px] leading-[23px] font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  {...field}
                  className={`mt-2  py-2 px-3 w-full h-[50px] bg-[#F4F6F9] rounded-md placeholder-text-[#B4B4B4] text-text-natural-gray-2 text-[15px] leading-[15px] font-medium focus:outline-none ${error ? "border border-red-500" : ""
                    }`}
                  style={{
                    boxShadow:
                      "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                  }}
                  placeholder="Email Address"
                />
                <div className="absolute top-[60px] -translate-y-1/2 right-4 w-4 h-4">
                  <InviteEmailIcon isBlue={true} />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </div>
            )}
          />

          {/* <div className={` max-w-[454px] w-full h-[55px] mt-20`}>
            <div className="flex items-center   bg-[#FFFFFF] p-3 border border-[#2d2d310d] rounded-xl">
              <div className="w-6 h-6 ml-2">
                <WarningIcon />
              </div>
              <span className="text-sm ml-5 text-[#425466]">Patient is in the process of transferring</span>
            </div>
          </div> */}
          <div className={` max-w-[454px] w-full h-[55px] mt-20`}>
            <div className="flex items-center   bg-[#FFFFFF] p-3 border border-[#2d2d310d] rounded-xl">
              <div className="w-6 h-6 ml-2">
                <WarningIcon isRed={true} />
              </div>
              <span className="text-sm ml-5 text-[red]">Invalid the email addressed, please change </span>
            </div>
          </div>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First Name is required" }}
            render={({ field, fieldState: { error } }) => (
              <div className="relative z-10 max-w-[454px] w-full h-[55px] mb-5">
                <label className="text-text-body-muted text-[16px] leading-[23px] font-semibold mb-20">
                  First Name
                </label>
                <input
                  type="text"
                  {...field}
                  className={`mt-2 py-2 px-3 w-full h-[50px] bg-[#F4F6F9] rounded-md placeholder-text-[#B4B4B4] text-text-natural-gray-2 text-[15px] leading-[15px] font-medium focus:outline-none ${error ? "border border-red-500" : ""
                    }`}
                  style={{
                    boxShadow:
                      "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                  }}
                  placeholder="Enter First Name"
                />
                <div className="absolute top-[50px] -translate-y-1/2 right-4 w-4 h-4">
                  <InviteEmailIcon isBlue={true} />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState: { error } }) => (
              <div className="relative z-10 max-w-[454px] w-full h-[55px]  mb-5">
                <label className="text-text-body-muted text-[16px] leading-[23px] font-semibold mb-20">
                  Last Name
                </label>
                <input
                  type="text"
                  {...field}
                  className={`mt-2 py-2 px-3 w-full h-[50px] bg-[#F4F6F9] rounded-md placeholder-text-[#B4B4B4] text-text-natural-gray-2 text-[15px] leading-[15px] font-medium focus:outline-none ${error ? "border border-red-500" : ""
                    }`}
                  style={{
                    boxShadow:
                      "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                  }}
                  placeholder="Enter Last Name"
                />
                <div className="absolute top-[50px] -translate-y-1/2 right-4 w-4 h-4">
                  <InviteEmailIcon isBlue={true} />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </div>
            )}
          />
          {role === "Super Admin" && (
            <div className="relative flex justify-start items-center gap-2.5">

              <div>
                <div ref={selectOrganizationInputRef}>
                  <Controller
                    name="assignOrganization"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field, fieldState: { error } }) => (
                      <div className="relative z-10 max-w-[454px] w-full h-[55px]  mb-5">
                        <label className="text-text-body-muted text-[16px] leading-[23px] font-semibold mb-20">
                          Assign Organization
                        </label>
                        <input
                          type="text"
                          {...field}
                          className={`mt-2 py-2 px-3 w-[450px] h-[50px] bg-[#F4F6F9] rounded-md placeholder-text-[#B4B4B4] text-text-natural-gray-2 text-[15px] leading-[15px] font-medium focus:outline-none ${error ? "border border-red-500" : ""
                            }`}
                          style={{
                            boxShadow:
                              "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
                          }}
                          placeholder="Enter Assign Organization"
                          value={selectedOrganization}
                          onClick={() => setIsSelectOrganizationModalOpen(true)}
                        />
                        <div className="absolute top-[50px] -translate-y-1/2 right-4 w-4 h-4">
                          <SelectDownArrowIcon />
                        </div>
                        {error && (
                          <p className="text-red-500 text-sm mt-1">{error.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {isSelectOrganizationModalOpen &&
                  (window.innerHeight > 1150 ? (
                    <div
                      style={{
                        position: "fixed",
                        top: dropdownPosOrganization.top,
                        left: dropdownPosOrganization.left,
                        width: dropdownPosOrganization.width,
                        zIndex: 9999,
                      }}
                      onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
                    >
                      <SelectOrganizationModal
                        selectedOrganization={selectedOrganization}
                        setSelectedOrganization={setSelectedOrganization}
                        setIsSelectOrganizationModalOpen={
                          setIsSelectOrganizationModalOpen
                        }
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        position: "fixed",
                        top:
                          window.innerHeight > 600
                            ? dropdownPosOrganization.top - 368 - 38
                            : dropdownPosOrganization.top - 240 - 38,
                        left: dropdownPosOrganization.left,
                        width: dropdownPosOrganization.width,
                        zIndex: 9999,
                      }}
                      onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from bubbling up
                      ref={organizationModalRef}
                    >
                      <SelectOrganizationModal
                        selectedOrganization={selectedOrganization}
                        setSelectedOrganization={setSelectedOrganization}
                        setIsSelectOrganizationModalOpen={
                          setIsSelectOrganizationModalOpen
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <div className="relative z-10 max-w-[454px] w-full h-[55px] mb-5">
                <label className="text-text-body-muted text-[16px] leading-[23px] font-semibold mb-20">
                  Mobile
                </label>
                <PhoneInput
                  {...field}
                  defaultCountry="BD" // Bangladesh by default
                  placeholder="Enter phone number"
                  international
                  withCountryCallingCode
                  style={{
                    border: "none", // default light border (gray-300)
                    padding: "12px",
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#F4F6F9",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid black")}
                  onBlur={(e) => (e.target.style.border = "1px solid #E5E7EB")}
                  className="mt-2 placeholder-text-[#B4B4B4] text-text-natural-gray-2 text-[15px] leading-[15px] font-medium"
                />
              </div>


            )}
          />
          <InviteModalAssignPatientTeam control={control} />
        </div>
      </div>
    </div>
  );
};



export default InviteNewPatientModal;
