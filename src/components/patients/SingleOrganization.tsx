import Image, { StaticImageData } from "next/image";
import React from "react";

const SingleOrganization = ({
  organizationImage,
  organizationName,
}: {
  organizationImage: string | StaticImageData;
  organizationName: string;
}) => {
  return (
    <div className="w-8 h-8">
      <Image
        src={organizationImage}
        alt={organizationName}
        width={32}
        height={32}
        className="w-full h-full"
      />
    </div>
  );
};

export default SingleOrganization;
