import H3 from "@/components/Typography/H3";
import React from "react";

import profilePicAvatarImage from "@/assets/images/profile-avatar.png";
import Image from "next/image";
import H2 from "@/components/Typography/H2";
import EditIcon from "@/components/Svgs/EditIcon";
import TextBody from "@/components/Typography/TextBody";
import VerifiedIcon from "@/components/Svgs/VerifiedIcon";
import TextInputV4 from "@/components/Inputs/TextInputV4";
import PersonIcon from "@/components/Svgs/PersonIcon";
import EmailIcon from "@/components/Svgs/EmailIcon";
import GeoLocationIcon from "@/components/Svgs/GeoLocationIcon";
import CalenderIcon from "@/components/Svgs/CalenderIcon";
import HashIcon from "@/components/Svgs/HashIcon";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import CrossIcon from "@/components/Svgs/CrossIcon";
import FilledButton from "@/components/Buttons/FilledButton";
import PlusIcon from "@/components/Svgs/PlusIcon";

const EditPatientProfilePage = () => {
  return (
    <div className="p-[30px] pb-12">
      <section>
        <H3 className="text-text-heading-dark">Profile Picture</H3>

        <div
          className="mt-[18px] p-[30px] w-fit bg-bg-default-white flex justify-start items-center gap-6 rounded-2xl"
          style={{
            boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
          }}
        >
          <div className="w-[82px] h-[82px]">
            <Image
              src={profilePicAvatarImage}
              alt="Profile Picture"
              width={82}
              height={82}
              className="w-full h-full rounded-full"
            />
          </div>

          <div>
            <H2 className="text-text-heading-dark">Kaily Nickson</H2>

            <div className="mt-1.5 flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-8">
              <div className="flex justify-start items-center gap-2.5">
                <div className="w-4 h-4">
                  <EditIcon />
                </div>

                <TextBody
                  variant="small"
                  weight="semibold"
                  className="text-text-body-muted"
                >
                  Edit Profile
                </TextBody>
              </div>

              <div className="flex justify-start items-center gap-2">
                <div className="w-4 h-4">
                  <VerifiedIcon />
                </div>

                <TextBody
                  variant="small"
                  weight="semibold"
                  className="text-text-default-success"
                >
                  Edit Profile
                </TextBody>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[18px]">
        <H3 className="text-text-heading-dark">Basic Information</H3>

        <div
          className="mt-[18px] p-[30px] w-full bg-bg-default-white flex flex-col justify-start items-start gap-8 rounded-2xl"
          style={{
            boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
          }}
        >
          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="firstName"
              placeholder="Enter name"
              labelText="First Name"
              isIcon={true}
              icon={<PersonIcon />}
              defaultValue="Marie"
            />

            <TextInputV4
              name="lastName"
              placeholder="Enter last name"
              labelText="Last Name"
              isIcon={true}
              icon={<PersonIcon />}
              defaultValue="Claire"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="email"
              type="email"
              placeholder="Enter email"
              labelText="Email Address"
              isIcon={true}
              icon={<EmailIcon />}
              defaultValue="darrell_steward@gmail.com"
            />

            <TextInputV4
              name="phone"
              placeholder="Enter mobile"
              labelText="Phone Number"
              isIcon={true}
              icon={<PersonIcon />}
              defaultValue="+44 0393 848373"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="homeAddress"
              placeholder="Enter home address"
              labelText="Home Address"
              isIcon={true}
              icon={<GeoLocationIcon />}
            />

            <TextInputV4
              name="phone"
              type="text"
              placeholder="mm/dd/yyyy"
              labelText="Date of Birth"
              isIcon={true}
              className="!appearance-none"
              icon={<CalenderIcon />}
            />
          </div>

          <div className="w-full md:w-[calc(50%-16px)]">
            <TextInputV4
              name="spokenLanguage"
              placeholder="Enter Spoken Language"
              labelText="Spoken Language"
              isIcon={true}
              icon={<GeoLocationIcon />}
            />
          </div>
        </div>
      </section>

      <section className="mt-[30px]">
        <H3 className="text-text-heading-dark">
          Next of Kin (Emergency Contacts)
        </H3>

        <div
          className="mt-[18px] p-[30px] w-full bg-bg-default-white flex flex-col justify-start items-center gap-8 rounded-2xl"
          style={{
            boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
          }}
        >
          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="firstName"
              placeholder="Enter name"
              labelText="First Name"
              isIcon={true}
              icon={<PersonIcon />}
            />

            <TextInputV4
              name="lastName"
              placeholder="Enter last name"
              labelText="Last Name"
              isIcon={true}
              icon={<PersonIcon />}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="email"
              type="email"
              placeholder="Enter email"
              labelText="Email Address"
              isIcon={true}
              icon={<EmailIcon />}
            />

            <TextInputV4
              name="phone"
              placeholder="Enter mobile"
              labelText="Phone Number"
              isIcon={true}
              icon={<PersonIcon />}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="homeAddress"
              placeholder="Enter home address"
              labelText="Home Address"
              isIcon={true}
              icon={<GeoLocationIcon />}
            />

            <TextInputV4
              name="relation"
              placeholder="Enter Relation"
              labelText="Relation"
              isIcon={true}
              icon={<PersonIcon />}
            />
          </div>
        </div>
      </section>

      <section className="mt-[30px]">
        <H3 className="text-text-heading-dark">
          NHS Information (For UK Patients)
        </H3>

        <div
          className="mt-[18px] p-[30px] w-full bg-bg-default-white flex flex-col justify-start items-start gap-8 rounded-2xl"
          style={{
            boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
          }}
        >
          <div className="w-full md:w-[calc(50%-16px)]">
            <TextInputV4
              name="nhsNumber"
              placeholder="Enter NHS Number"
              labelText="NHS Number"
              isIcon={true}
              icon={<HashIcon />}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
            <TextInputV4
              name="gpName"
              placeholder="Enter GP name"
              labelText="GP Name"
              isIcon={true}
              icon={<PersonIcon />}
            />

            <TextInputV4
              name="gpAddress"
              placeholder="Enter GP address"
              labelText="GP Address"
              isIcon={true}
              icon={<GeoLocationIcon />}
            />
          </div>
        </div>
      </section>

      <section
        className="mt-[18px] px-[30px] pt-[18px] pb-3 bg-bg-default-white flex justify-end items-center gap-2.5 rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <OutlineButton
          text="Cancel"
          icon={<CrossIcon className="!fill-[#16192C]" />}
          isIcon={true}
          className="!w-fit text-text-default-dark border !border-border-light !px-[20px] !py-3"
        />

        <FilledButton
          text="Save"
          icon={<PlusIcon />}
          isIcon={true}
          className="!w-fit !px-[20px] !py-3"
        />
      </section>
    </div>
  );
};

export default EditPatientProfilePage;
