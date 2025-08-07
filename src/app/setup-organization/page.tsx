
import AuthLeftBanner from "@/components/setup-organization/AuthLeftBanner";
import SetupOrganizationStep1 from "@/components/setup-organization/SetupOrganizationStep1";

const SetupOrganizationPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-[6.58] min-w-0">
          <AuthLeftBanner />
        </div>

        <SetupOrganizationStep1 />
      </div>
    </div>
  );
};

export default SetupOrganizationPage;
