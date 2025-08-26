import { useState } from "react";
import FilledButton from "@/components/Buttons/FilledButton";
import OutlineButton from "@/components/Buttons/OutlinedButton";
import H2 from "@/components/Typography/H2";
import InvitePatientCloseIcon from "@/components/Svgs/InvitePatientCloseIcon";

import CrossIcon from "@/components/Svgs/CrossIcon";
import InviteSendIcon from "@/components/Svgs/InviteSendIcon";
import TextInputV4 from "@/components/Inputs/TextInputV4";
import EmailIcon from "@/components/Svgs/EmailIcon";
import { FieldError, useForm } from "react-hook-form";
import { useInviteOrganizationMutation } from "@/store/apis/Organization";
import { toast } from "react-toastify";

type FormValues = {
  organizationEmail: string;
};

const InviteOrganizationModal = ({
  setIsInviteOrganizationModalOpen,
}: {
  setIsInviteOrganizationModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  const [isInvitationSent, setIsInvitationSent] = useState(false);

  const [inviteOrganization] = useInviteOrganizationMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await inviteOrganization({
        email: data.organizationEmail,
      });

      if (response?.error) {
        throw new Error(JSON.stringify(response.error));
      }

      toast.success("Invite sent successfully!");
      setIsInvitationSent(true);
    } catch (error) {
      console.log("Error:", error);

      toast.error("Invite send failed!");
      return;
    }
  };

  return (
    <div
      className={`relative max-w-[1000px] mx-auto my-[122px] p-[30px] w-full max-h-[65vh] bg-bg-default-white rounded-lg overflow-y-auto`}
      style={{
        boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
    >
      <H2 className="text-text-default-dark">Invite New Organization</H2>

      <div className="mt-[29px] max-w-[544px] w-full">
        <TextInputV4
          name="organizationEmail"
          type="email"
          placeholder="Enter Organization Email"
          isIcon={true}
          icon={<EmailIcon />}
          register={register("organizationEmail", {
            required: "Organization email is required",
          })}
          error={errors.organizationEmail as FieldError}
        />
      </div>

      <div className="mt-[38px] flex justify-end items-center gap-2.5">
        <OutlineButton
          text="Cancel"
          className={`!w-fit !py-[11px] !px-[19px]`}
          icon={<CrossIcon className={`fill-[#16192C] stroke-[#16192C]`} />}
          isIcon={true}
          onClick={() => setIsInviteOrganizationModalOpen(false)}
        />

        {!isInvitationSent && (
          <FilledButton
            onClick={handleSubmit(onSubmit)}
            type="submit"
            text="Send Invite"
            className={`!w-fit !px-5 !py-3 rounded-md`}
            icon={<InviteSendIcon />}
            isIcon={true}
          />
        )}
      </div>

      <div
        onClick={() => setIsInviteOrganizationModalOpen(false)}
        className="absolute top-[30px] right-[30px] w-5 h-5 cursor-pointer"
      >
        <InvitePatientCloseIcon />
      </div>
    </div>
  );
};

export default InviteOrganizationModal;
