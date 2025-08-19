const DashedBorderBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative w-full h-[276px]">
      {/* SVG border with shadow (z-0) */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1064 290"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            {/* first shadow: 0px 3px 8px -1px #3232470D */}
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#3232470D"
            />
            {/* second shadow: 0px 0px 1px 0px #0C1A4B3D */}
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="0.5"
              floodColor="#0C1A4B3D"
            />
          </filter>
        </defs>

        <rect
          x="7.5"
          y="4.5"
          width="1049"
          height="275"
          rx="15.5"
          fill="white"
          stroke="#1E52DC"
          strokeWidth="1"
          strokeDasharray="16 16"
          filter="url(#shadow)"
          className={className}
        />
      </svg>

      {/* Content always above border (z-10) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default DashedBorderBox;
