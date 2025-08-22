import ChatIcon from "@/components/Svgs/ChatIcon";
import SidebarChatIcon from "@/components/Svgs/SidebarChatIcon";
import TextBody from "@/components/Typography/TextBody";
import Image, { StaticImageData } from "next/image";

const ConsultantCard = ({
  doctorAvatarImage,
  doctorName,
  doctorSpecialty,
}: {
  doctorAvatarImage: string | StaticImageData;
  doctorName: string;
  doctorSpecialty: string;
}) => {
  return (
    <div className="w-fit min-w-[212px] flex justify-between items-center gap-4">
      <div className="py-1 flex justify-start gap-3">
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

        <div className="flex flex-col justify-between">
          <h4 className="text-text-natural-gray-4 text-[12px] leading-[100%] font-semibold">
            {doctorName}
          </h4>
          <TextBody
            variant="extraSmall"
            className="text-text-body-light !leading-[100%]"
          >
            {doctorSpecialty}
          </TextBody>
        </div>
      </div>

      <div className="w-4 h-4 ">
        <SidebarChatIcon className="fill-bg-default-primary" />
      </div>
    </div>
  );
};

export default ConsultantCard;
