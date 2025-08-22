import React from "react";

const SingleTeam = ({
  teamName,
  className,
}: {
  teamName: string;
  className?: string;
}) => {
  const getTeamColor = (teamName: string) => {
    switch (teamName) {
      case "U18":
        return "bg-bg-soft-blue text-text-blue";
      case "U19":
        return "bg-bg-soft-purple text-text-purple";
      case "U20":
        return "bg-bg-soft-orange text-text-orange";
      case "U21":
        return "bg-bg-soft-danger text-text-danger";
      default:
        return "bg-bg-default-neutral text-text-default-dark";
    }
  };

  return (
    <div
      className={`w-8 h-8 flex justify-center items-center rounded-full text-[10px] leading-[100%] font-bold ${getTeamColor(
        teamName
      )} ${className}`}
    >
      {teamName}
    </div>
  );
};

export default SingleTeam;
