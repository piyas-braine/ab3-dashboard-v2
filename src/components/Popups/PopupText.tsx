const PopupText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="relative">
      <div
        className={`${className} px-4 pt-2 pb-3 rounded-md bg-bg-default-white text-text-natural-gray-2 text-[12px] leading-[19px] font-semibold text-nowrap`}
        style={{ boxShadow: "0px -2px 38px -1px #32324721" }}
      >
        {text}
      </div>

      <div className="absolute -top-2 left-[13px] w-[11px] h-[11px] bg-bg-default-white [clip-path:polygon(50%_0,100%_100%,0_100%)]"></div>
    </div>
  );
};

export default PopupText;
