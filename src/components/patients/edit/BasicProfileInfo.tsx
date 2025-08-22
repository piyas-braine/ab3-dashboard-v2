import DateInput from "@/components/Inputs/DateInput";
import LanguageSelectInput from "@/components/Inputs/LanguageSelectInput";
import PhoneNumberInput from "@/components/Inputs/PhoneNumberInput";
import TextInputV4 from "@/components/Inputs/TextInputV4";
import CalenderIcon from "@/components/Svgs/CalenderIcon";
import CrossIcon2 from "@/components/Svgs/CrossIcon2";
import EmailIcon from "@/components/Svgs/EmailIcon";
import GeoLocationIcon from "@/components/Svgs/GeoLocationIcon";
import PersonIcon from "@/components/Svgs/PersonIcon";
import PhoneIcon from "@/components/Svgs/PhoneIcon";
import SelectDownArrowIcon from "@/components/Svgs/SelectDownArrowIcon";
import H3 from "@/components/Typography/H3";

const BasicProfileInfo = () => {
  return (
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

          <PhoneNumberInput
            name="phoneNumber"
            type="number"
            placeholder="Enter phone number"
            labelText="Mobile"
            isIcon={true}
            icon={<PhoneIcon />}
          />
        </div>

        <div className="w-full h-[1px] bg-bg-natural-gray-9">
          
        </div>

        <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8">
          <TextInputV4
            name="homeAddress"
            placeholder="Enter home address"
            labelText="Home Address"
            isIcon={true}
            icon={<GeoLocationIcon />}
          />

          <DateInput
            name="dateOfBirth"
            placeholder="mm/dd/yyyy"
            labelText="Date of Birth"
            isIcon={true}
            className="!appearance-none"
            icon={<CalenderIcon />}
          />
        </div>

        <div className="w-full md:w-[calc(50%-16px)]">
          <LanguageSelectInput
            name="spokenLanguage"
            placeholder="Enter Spoken Language"
            labelText="Spoken Language"
            isIcon={true}
            icon={<SelectDownArrowIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default BasicProfileInfo;
