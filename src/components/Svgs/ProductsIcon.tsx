import React from "react";

const ProductsIcon = ({isActive = false}: {isActive?: boolean}) => {
  return (
    <div className="w-full h-full block">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        <mask
          id="mask0_40000079_18988"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="17"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 13C0 13.8284 0.671573 14.5 1.5 14.5H14.5C15.3284 14.5 16 13.8284 16 13V7.38414L15 7.65081V13C15 13.2761 14.7761 13.5 14.5 13.5H1.5C1.22386 13.5 1 13.2761 1 13V7.65081L0 7.38414V13Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5C0 4.17157 0.671573 3.5 1.5 3.5H14.5C15.3284 3.5 16 4.17157 16 5V7.38414L8.38649 9.41441C8.13326 9.48194 7.86674 9.48194 7.61351 9.41441L0 7.38414V5ZM1.5 4.5C1.22386 4.5 1 4.72386 1 5V6.61586L7.87117 8.44817C7.95558 8.47068 8.04442 8.47068 8.12883 8.44817L15 6.61586V5C15 4.72386 14.7761 4.5 14.5 4.5H1.5Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 2.99976C5 2.17117 5.67173 1.5 6.5 1.5H9.5C10.3283 1.5 11 2.17117 11 2.99976V3.5H10V3.00061C10 2.72463 9.7763 2.5 9.5 2.5H6.5C6.2237 2.5 6 2.72377 6 2.99976V3.5H5V2.99976Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_40000079_18988)">
          <rect y="0.5" width="16" height="16" fill="#A0AEC0" className={`${isActive ? "fill-bg-primary-blue" : "fill-[#A0AEC0]"}`} />
        </g>
      </svg>
    </div>
  );
};

export default ProductsIcon;
