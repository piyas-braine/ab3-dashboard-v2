import React from "react";

const InputSearchIcon = ({ isBlue = false }: { isBlue?: boolean }) => {
  return (
    <div className="w-full h-full block">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        <g clip-path="url(#clip0_40000334_2197)">
          <path
            d="M6.87791 0L7.7589 0.134015C11.2302 0.874648 13.4479 4.25091 12.7414 7.7566C12.5482 8.71558 12.0987 9.59733 11.5357 10.3864L15.7503 14.6089C15.873 14.7312 15.9306 14.8778 15.9995 15.0314V15.3441C15.8117 15.9528 15.212 16.2062 14.6774 15.8075L10.3881 11.5337C7.38455 13.8411 3.0051 13.0738 0.992315 9.87246C-1.59429 5.75848 1.16133 0.354034 5.95937 0.0325645L6.03491 0H6.87833H6.87791ZM6.21561 1.60317C2.40915 1.80357 0.256563 6.13548 2.51056 9.25999C4.57676 12.1244 8.94077 11.8877 10.6635 8.80242C12.506 5.50214 9.98285 1.40403 6.21561 1.60276V1.60317Z"
            fill="#CACACA"
            className={isBlue ? "fill-bg-primary-blue" : "fill-[#CACACA]"}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000334_2197">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default InputSearchIcon;
