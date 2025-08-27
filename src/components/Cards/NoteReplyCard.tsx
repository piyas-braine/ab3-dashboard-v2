import Image from "next/image";

import avatar1Image from "@/assets/images/patients/patient-avatar.png";

// import { format } from "date-fns";
import TextBody from "@/components/Typography/TextBody";
import SeenIcon from "@/components/Svgs/SeenIcon";
import LikeIcon from "@/components/Svgs/LikeIcon";
import AttachmentBadge from "@/components/Badges/AttachmentBadge";

const NoteReplyCard = ({
  createdAt,
  replyTo,
  consultantName,
  noteDetails,
  seenNumber,
  likeNumber,
}: {
  createdAt: string;
  replyTo: string;
  consultantName: string;
  category: string;
  noteDetails: string;
  seenNumber: number;
  likeNumber: number;
}) => {
  return (
    <>
      <div
        className="rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        {/* Header */}
        <div className="py-[14px] px-4 bg-[#F5F5F5] flex flex-col sm:flex-row justify-start items-center gap-4 rounded-t-2xl">
          <div className="w-7 h-7">
            <Image
              src={avatar1Image}
              alt="Note Avatar"
              width={28}
              height={28}
              className="min-w-7 min-h-7 w-7 h-7 rounded-full"
            />
          </div>

          <div className="flex justify-start items-center gap-2">
            <h4 className="text-[16px] leading-[136%] font-semibold text-text-natural-gray-2">
              {consultantName}
            </h4>
          </div>

          <div>
            <h4 className="text-[16px] leading-[136%] font-medium text-text-primary-blue ">
              {/* {format(createdAt, "dd MM yyyy")} */}
              {createdAt}
            </h4>
          </div>
        </div>

        {/* Body */}
        <div className="p-[30px] ">
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-start items-center gap-2">
              <TextBody
                variant="small"
                weight="semibold"
                className="text-text-body-muted"
              >
                Hy:
              </TextBody>

              <TextBody variant="small" weight="semibold">
                <span className="text-text-natural-gray-2 !leading-[136%]">
                  by{" "}
                </span>
                <span className="text-text-default-dark !leading-[137%]">
                  @{replyTo}
                </span>
              </TextBody>
            </div>
          </div>

          <div className="mt-[25px]">
            <TextBody
              variant="small"
              className="text-text-body-muted !leading-[25px]"
            >
              {noteDetails}
            </TextBody>
          </div>

          <div className="mt-[31px]">
            <h6 className="text-text-natural-gray-77 text-[12px] leading-[130%] font-normal">
              Attachments
            </h6>

            <div className="mt-4 flex flex-wrap justify-start items-center gap-2.5">
              <AttachmentBadge isImage={true} placeholderText="X-Ray Image" />
              <AttachmentBadge isLink={true} placeholderText="X-Ray Link..." />
              <AttachmentBadge
                isDownload={true}
                placeholderText="Download all"
              />
            </div>
          </div>

          <div className="mt-[37px] flex justify-between items-end">
            <div className="flex justify-start items-end gap-4">
              <TextBody
                variant="small"
                className="text-text-primary-blue !font-medium underline !tracking-[1%]"
              >
                Reply
              </TextBody>

              <div className="flex justify-start items-center gap-2">
                <div className="w-[18px] h-[18px]">
                  <SeenIcon />
                </div>

                <h6 className="text-[14px] leading-[137%] font-medium text-text-natural-gray-6">
                  {seenNumber}
                </h6>
              </div>

              <div className="flex justify-start items-center gap-2">
                <div className="w-[18px] h-[18px]">
                  <LikeIcon />
                </div>

                <h6 className="text-[14px] leading-[137%] font-medium text-text-natural-gray-6">
                  {likeNumber}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteReplyCard;
