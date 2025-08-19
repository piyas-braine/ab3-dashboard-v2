import FilledButton from "@/components/Buttons/FilledButton";
import UploadDashedBox from "@/components/Svgs/UploadDashedBox";
import UploadIcon2 from "@/components/Svgs/UploadIcon2";
import H5 from "@/components/Typography/H5";
import H6 from "@/components/Typography/H6";
import React, { useRef, useState } from "react";

const UploadInputV2 = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFiles = (files: FileList) => {
    if (!files || files.length === 0) return;
    console.log("Uploaded files:", files);
    // call API or update state
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files!);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
    e.dataTransfer.clearData();
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
      onDrop={handleDrop}
    >
      <UploadDashedBox
        className={`transition-colors duration-200 ${
          isDragging ? "stroke-blue-500" : "stroke-[#1E52DC]"
        }`}
      >
        {/* hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {/* upload icon */}
        <div className="w-[77.39px] h-[85.07px] mx-auto">
          <UploadIcon2 />
        </div>

        {/* clickable upload text */}
        <H5
          className="text-text-heading-dark cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          <span className="underline">Click to Upload</span>
          <span className="block sm:inline text-[16px] leading-[23px] font-normal text-text-body-light decoration-0">
            {" "}
            or drag and drop
          </span>
        </H5>

        {/* max file size text */}
        <H6 className="text-text-default-primary">
          <span className="font-medium text-text-body-light">
            Max file size{" "}
          </span>
          50 MB
        </H6>

        {/* browse button */}
        <FilledButton
          text="Browse"
          className="mt-[22px] !w-fit !px-[49.5px] !py-3"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        />
      </UploadDashedBox>
    </div>
  );
};

export default UploadInputV2;
