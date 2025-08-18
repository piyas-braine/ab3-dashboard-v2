import TextBody from "@/components/Typography/TextBody";

const PlayerFitPopupText = ({
  text,
  subText,
  className,
}: {
  text: string;
  subText?: string;
  className?: string;
}) => {
  return (
    <div className="relative">
      <div
        className={`${className} px-3 py-1 rounded-md bg-bg-default-white text-nowrap`}
        style={{ boxShadow: "4px 3px 22px -1px #32324724" }}
      >
        <TextBody
          variant="extraSmall"
          weight="semibold"
          className="text-text-natural-gray-2 !leading-[16px]"
        >
          {text}
        </TextBody>

        <TextBody
          variant="small"
          className="mt-[2px] !text-[10px] !leading-[100%] text-text-natural-gray-6"
        >
          {subText}
        </TextBody>
      </div>

      <div className="absolute -bottom-2.5 left-3 w-[15px] h-[15px] bg-bg-default-white [clip-path:polygon(50%_0,100%_100%,0_100%)] rotate-[180deg]"></div>
    </div>
  );
};

export default PlayerFitPopupText;
