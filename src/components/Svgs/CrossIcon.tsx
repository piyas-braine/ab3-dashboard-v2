import React from "react";

const CrossIcon = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className="w-full h-full block">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        <g clip-path="url(#clip0_40000450_1507)">
          <path
            d="M10 0.313114V0.469417L9.88337 0.674887L5.56802 5.0076L9.88337 9.32613L10 9.5316V9.6879C9.94941 9.85179 9.85133 9.94963 9.68744 10.0005H9.53114L9.32567 9.88383L5.00714 5.56848L0.674917 9.88334L0.469447 10H0.313144C0.0171701 9.92052 -0.100241 9.58688 0.0988686 9.34618L4.43281 4.99317L0.107674 0.664858C-0.220098 0.268596 0.268381 -0.220128 0.664888 0.107645L4.9932 4.43253L9.34621 0.0985941C9.58691 -0.100271 9.92055 0.0173847 10 0.313114Z"
            fill="#CACACA"
            stroke="#CACACA"
            stroke-width="0.4"
            className={className}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000450_1507">
            <rect width="10" height="10" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CrossIcon;
