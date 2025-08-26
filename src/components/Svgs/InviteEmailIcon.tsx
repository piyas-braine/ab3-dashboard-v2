import React from "react";

const InviteEmailIcon = ({ isBlue = false }: { isBlue?: boolean }) => {
  return (
    <div className="w-full h-full block">
      <svg
        width="23"
        height="17"
        viewBox="0 0 23 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        <g clip-path="url(#clip0_40000444_10497)">
          <path
            d="M0 14.7208V2.2792C0.172091 1.29805 0.888574 0.586817 1.90931 0.502226L21.0389 0.5C22.1154 0.580139 22.8875 1.32922 22.9899 2.39106C22.9539 6.5761 23.0658 10.7762 22.9331 14.9529C22.7059 15.8522 21.9686 16.431 21.0389 16.5L1.90931 16.4978C0.953248 16.4354 0.108541 15.6702 0 14.7208ZM20.6554 1.83454H2.33504L10.1927 9.58911C10.9728 10.2146 12.0177 10.2146 12.7983 9.58911L20.6554 1.83454ZM1.34692 14.1877L7.13615 8.48386L1.34692 2.81235V14.1877ZM21.6435 14.1877V2.81235L15.8543 8.48386L21.6435 14.1877ZM20.6554 15.1655L14.8465 9.48115C13.7976 10.5508 12.931 11.469 11.2911 11.3906C9.83055 11.321 9.09101 10.3716 8.11133 9.48115L2.33504 15.1655H20.6554Z"
            fill="#7A7A9D"
            className={isBlue ? "fill-bg-primary-blue" : "fill-[#CACACA]"}
          />
        </g>
        <defs>
          <clipPath id="clip0_40000444_10497">
            <rect
              width="23"
              height="16"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default InviteEmailIcon;
