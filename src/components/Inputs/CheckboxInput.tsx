import React from "react";
import TickIcon from "@/components/Svgs/TickIcon";
import Link from "next/link";

const CheckboxInput = () => {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="w-5 h-5 rounded-sm bg-[#EBF1FF] border-[1.5px] border-[#3162E4E3] flex justify-center items-center">
        <div className="w-[11.29px] h-2">
          <TickIcon />
        </div>
      </div>

      <label
        htmlFor=""
        className="text-[#585858] text-[14px] leading-[22px] font-normal"
      >
        I accept the{" "}
        <Link href="#" className="font-semibold text-text-primary-blue">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link href="#" className="font-semibold text-text-primary-blue">
          Privacy Policy
        </Link>
      </label>
    </div>
  );
};

export default CheckboxInput;
