import TextBody from "@/components/Typography/TextBody";

const PopUpTextV2 = ({
  text,
  className,
}: {
  text: string;
  subText?: string;
  className?: string;
}) => {
  return (
    <div className="relative">
      <div
        className={`${className} px-3 py-1 rounded-lg bg-bg-default-white text-nowrap`}
        style={{
          boxShadow: "0px -2px 38px -1px #32324721",
        }}
      >
        <TextBody variant="extraSmall" className="text-text-natural-gray-2">
          {text}
        </TextBody>
      </div>

      <div className="absolute -top-[11px] left-3 w-[15px] h-[15px] bg-bg-default-white [clip-path:polygon(50%_0,100%_100%,0_100%)]"></div>
    </div>
  );
};

export default PopUpTextV2;
