import TextInputV4 from "@/components/Inputs/TextInputV4";
import EmailIcon from "@/components/Svgs/EmailIcon";
import GeoLocationIcon from "@/components/Svgs/GeoLocationIcon";
import PersonIcon from "@/components/Svgs/PersonIcon";
import H3 from "@/components/Typography/H3";
import React from "react";

const EmergencyContact = () => {
  return (
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
  );
};

export default EmergencyContact;
