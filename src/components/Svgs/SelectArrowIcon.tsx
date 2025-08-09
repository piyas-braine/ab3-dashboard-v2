import React from "react";

const SelectArrowIcon = () => {
  return (
    <div className="w-full h-full block">
      <svg
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_40000446_622"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="11"
          height="12"
        >
          <path
            d="M4.98252 8.50049L1.68511 4.73202C1.29615 4.28749 1.61184 3.5918 2.20251 3.5918H8.79733C9.388 3.5918 9.70369 4.28749 9.31473 4.73202L6.01732 8.50049C5.74341 8.81353 5.25643 8.81353 4.98252 8.50049Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_40000446_622)">
          <rect y="0.841797" width="11" height="11" fill="#B5B5BD" />
        </g>
      </svg>
    </div>
  );
};

export default SelectArrowIcon;
