import DownloadIcon from "@/components/Svgs/DownloadIcon";
import ImagePlaceholder from "@/components/Svgs/ImagePlaceholder";
import LinkPlaceholder from "@/components/Svgs/LinkPlaceholder";
import { TAttachmentBadge } from "@/types/TAttactmentBadge";
import React from "react";

const AttachmentBadge = ({
  isImage = false,
  isLink = false,
  isDownload = false,
  placeholderText,
  className,
}: TAttachmentBadge) => {
  return (
    <div
      className={`px-4 py-2.5 flex justify-center items-center gap-2 border border-[#CDD9FF] rounded-[44px] ${className}`}
    >
      {isImage && (
        <div className="w-[14px] h-[14px]">
          <ImagePlaceholder />
        </div>
      )}

      {isLink && (
        <div className="w-4 h-4">
          <LinkPlaceholder />
        </div>
      )}

      {isDownload && (
        <div className="w-[15px] h-[14px]">
          <DownloadIcon />
        </div>
      )}

      <h6 className="text-text-natural-gray-6 text-[12px] leading-[16px] font-normal text-nowrap">
        {placeholderText}
      </h6>
    </div>
  );
};

export default AttachmentBadge;
