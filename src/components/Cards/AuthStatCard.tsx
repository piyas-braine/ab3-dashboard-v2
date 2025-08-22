import { TAuthStatCardProps } from "@/types/TAuthCard";

const AuthStatCard = ({
  statTitle,
  statNumber,
  statPercentage,
  statIconClassName,
  titleColor,
}: TAuthStatCardProps) => {
  return (
    <div
      className="sm:flex-1 w-full bg-bg-surface-primary pl-6 pt-[7px] pb-2.5 pr-4 rounded-2xl"
      style={{
        boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
      }}
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4
            className={`font-semibold text-[12px] leading-[100%] ${titleColor}`}
          >
            {statTitle}
          </h4>
          <h3 className="mt-1 font-bold text-[18px] leading-[100%] text-[#080B2B]">
            {statNumber}
          </h3>
        </div>
        <div
          className={`${statIconClassName} mt-2 w-[46px] h-[46px] flex justify-center items-center rounded-full`}
        ></div>
      </div>

      <div className="flex justify-start items-center gap-[7px]">
        <div
          className={`bg-bg-default-success-soft text-[#0FAA67] rounded-[44px] pt-[3px] pb-1 pl-1 pr-[5px] text-[9px] leading-[100%] font-bold`}
        >
          {statPercentage}
        </div>

        <div className="text-[#13CF7D] text-[10px] leading-[100%] font-normal">
          Since last month
        </div>
      </div>
    </div>
  );
};

export default AuthStatCard;
