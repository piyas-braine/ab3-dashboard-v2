import Image from "next/image";
import React from "react";

import inviteSuccessImage from "@/assets/images/invite-success.png";
import H2 from "@/components/Typography/H2";

const InvitePatientSuccess = () => {
  return (
    <div>
      <div className="mt-[32px] max-w-[432px] mx-auto flex flex-col items-center">
        <div className="w-[121px] h-[120px]">
          <Image
            src={inviteSuccessImage}
            alt="Invite Success"
            width={121}
            height={120}
            className="w-full h-full rounded-full"
          />
        </div>

        <H2 className="mt-[51px] text-text-default-dark">
          Invite Sent Success.
        </H2>

        <p className="text-[16px] leading-[150%] tracking-[-1.1%] font-medium text-center">
          Your invitation sent to the patient successfully, he can check through
          email.
        </p>
      </div>
    </div>
  );
};

export default InvitePatientSuccess;
