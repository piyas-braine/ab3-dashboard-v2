import CrossIcon2 from "@/components/Svgs/CrossIcon2";
import H6 from "@/components/Typography/H6";
import React from "react";

const BodyMarkLocationPopup = ({
  injuryName,
  InjuryDescription,
  className,
  setIsBodyMarkPopupOpen,
}: {
  injuryName: string;
  InjuryDescription: string;
  className?: string;
  setIsBodyMarkPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`relative pt-2 px-4 pb-3 w-[209px] bg-[#F0F1F5] rounded-xl ${className}`}
    >
      <div>
        <H6 className="text-text-default-dark">{injuryName}</H6>

        <p className="mt-1 text-[12px] leading-[19px] font-normal text-[#87878E]">
          {InjuryDescription}
        </p>
      </div>

      <div className="absolute top-[34px] -right-[14px] w-[21px] h-[21px] bg-[#F0F1F5] [clip-path:polygon(50%_0,100%_100%,0_100%)] rotate-[90deg]"></div>

      <div
        onClick={() => setIsBodyMarkPopupOpen(false)}
        className="absolute top-[11px] right-[12px] w-3 h-3 cursor-pointer"
      >
        <CrossIcon2 />
      </div>
    </div>
  );
};

export default BodyMarkLocationPopup;
