import Image from "next/image";

import organization1Image from "@/assets/images/patients/organization-1.png";
import progressIcon from "@/assets/svgs/progress-icon.svg";

// import { format } from "date-fns";
import TextBody from "@/components/Typography/TextBody";
import SeenIcon from "@/components/Svgs/SeenIcon";
import LikeIcon from "@/components/Svgs/LikeIcon";
import AttachmentBadge from "@/components/Badges/AttachmentBadge";
import { useState } from "react";
import NoteReplyCard from "@/components/Cards/NoteReplyCard";
import FilledButton from "@/components/Buttons/FilledButton";

const NoteCard = ({
  createdAt,
  createdBy,
  consultantName,
  category,
  noteDetails,
  seenNumber,
  likeNumber,
  noteReplies,
}: {
  createdAt: string;
  createdBy: string;
  consultantName: string;
  category: string;
  noteDetails: string;
  seenNumber: number;
  likeNumber: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  noteReplies: any[];
}) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(2);

  return (
    <>
      <div
        className="rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        {/* Header */}
        <div className="py-[14px] px-4 bg-[#E1E8FF] flex flex-col sm:flex-row justify-start items-center gap-4 rounded-t-2xl">
          <div className="w-7 h-7">
            <Image
              src={organization1Image}
              alt="Note Avatar"
              width={28}
              height={28}
              className="min-w-7 min-h-7 w-7 h-7 rounded-full"
            />
          </div>

          <div>
            <h4 className="text-[16px] leading-[136%] font-medium text-text-primary-blue ">
              {/* {format(createdAt, "dd MM yyyy")} */}
              {createdAt}
            </h4>
          </div>

          <div className="flex flex-col min-[450px]:flex-row justify-start items-center gap-2">
            <h4 className="text-[16px] leading-[136%] font-medium text-text-natural-gray-2">
              Consultant:
            </h4>

            <h4 className="text-[16px] leading-[136%] font-bold text-text-natural-gray-2">
              {consultantName} - {category}
            </h4>
          </div>
        </div>

        {/* Body */}
        <div className="p-[30px] ">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex justify-start items-center gap-2">
              <TextBody
                variant="small"
                weight="semibold"
                className="text-text-body-muted"
              >
                Created:
              </TextBody>

              <TextBody variant="small" weight="semibold">
                <span className="text-text-natural-gray-2 !leading-[136%]">
                  by{" "}
                </span>
                <span className="text-text-default-dark !leading-[137%]">
                  @{createdBy}
                </span>
              </TextBody>
            </div>

            <div className="flex justify-end items-center gap-3">
              <h4 className="text-[16px] leading-[137%] font-semibold text-text-default-dark">
                Progress:
              </h4>

              <div className="w-6 h6">
                <Image
                  src={progressIcon}
                  alt="Progress"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6 w-6 h-6"
                />
              </div>
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

          <div className="mt-[37px] flex flex-col sm:flex-row justify-between sm:items-end gap-10 sm:gap-4">
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

            <div className="flex flex-col min-[450px]:flex-row justify-center sm:justify-end items-center gap-3">
              <button className="px-6 py-2 bg-[#F2F0FE] text-[#7564F7] text-[14px] leading-[16px] font-medium rounded-[44px]">
                Concent
              </button>

              <button className="px-6 py-2 bg-[#FFF1F4] text-[#D12D4B] text-[14px] leading-[16px] font-medium rounded-[44px]">
                Treatment
              </button>

              <button className="px-6 py-2 bg-[#DFFFE7] text-[#339D4D] text-[14px] leading-[16px] font-medium rounded-[44px]">
                Assesment
              </button>
            </div>
          </div>
        </div>
      </div>

      {noteReplies?.length > 0 && (
        <button
          onClick={() => setIsReplyOpen(!isReplyOpen)}
          className="ml-2 text-text-primary-blue text-[14px] leading-[24px] font-medium cursor-pointer"
        >
          {isReplyOpen ? "Hide Replies" : "Show Replies"}
        </button>
      )}

      {noteReplies?.length > 0 && isReplyOpen && (
        <div className="ml-10 mt-6 space-y-6">
          {noteReplies?.map((noteReplies) => {
            return (
              <NoteReplyCard
                key={noteReplies.id}
                createdAt={noteReplies.createdAt}
                replyTo={noteReplies.createdBy}
                consultantName={noteReplies.consultantName}
                category={noteReplies.category}
                noteDetails={noteReplies.noteDetails}
                seenNumber={noteReplies.seenNumber}
                likeNumber={noteReplies.likeNumber}
              />
            );
          })}
        </div>
      )}

      {noteReplies?.length > visibleCount && (
        <div className="mt-[30px] flex justify-center">
          <FilledButton
            onClick={() => setVisibleCount(visibleCount + 2)}
            text="Show more"
            className="bg-bg-primary-blue !py-2.5 !w-fit !rounded-[44px]"
            textClassName="!leading-[16px]"
          />
        </div>
      )}
    </>
  );
};

export default NoteCard;
