import React from "react";
import CaptionText from "@/components/Typography/CaptionText";

const SidebarBadge = ({ statNumber = 0 }: { statNumber?: number }) => {
  return (
    <div className="py-[2px] px-2.5 bg-[#C7D6FF] rounded-[100px] flex justify-center items-center">
      <CaptionText className="text-text-primary-blue text-nowrap">
        {statNumber.toString()}
      </CaptionText>
    </div>
  );
};

export default SidebarBadge;
