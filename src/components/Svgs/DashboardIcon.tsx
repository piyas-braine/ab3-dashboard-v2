import React from "react";

const DashboardIcon = ({
  isActive = false,
}: {
  isActive?: boolean;
}) => {
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
          id="mask0_40000079_18707"
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
            d="M2 13.9999V7.49992H3V13.9999C3 14.2761 3.22386 14.4999 3.5 14.4999H12.5C12.7761 14.4999 13 14.2761 13 13.9999V7.49992H14V13.9999C14 14.8284 13.3284 15.4999 12.5 15.4999H3.5C2.67157 15.4999 2 14.8284 2 13.9999Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 2.99992V6.49992L11 4.49992V2.99992C11 2.72378 11.2239 2.49992 11.5 2.49992H12.5C12.7761 2.49992 13 2.72378 13 2.99992Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.29289 1.99992C7.68342 1.6094 8.31658 1.6094 8.70711 1.99992L15.3536 8.64637C15.5488 8.84163 15.5488 9.15822 15.3536 9.35348C15.1583 9.54874 14.8417 9.54874 14.6464 9.35348L8 2.70703L1.35355 9.35348C1.15829 9.54874 0.841709 9.54874 0.646447 9.35348C0.451184 9.15822 0.451184 8.84163 0.646447 8.64637L7.29289 1.99992Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_40000079_18707)">
          <rect y="0.5" width="16" height="16" fill="#A0AEC0" className={`${isActive ? "fill-bg-primary-blue" : "fill-[#A0AEC0]"}`} />
        </g>
      </svg>
    </div>
  );
};

export default DashboardIcon;
