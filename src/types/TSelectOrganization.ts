import { StaticImageData } from "next/image";

export type TSelectOrganizationProps = {
  organizationName: string;
  organizationImage: StaticImageData | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedOrganization: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedOrganization: React.Dispatch<React.SetStateAction<any>>;
  setIsSelectOrganizationModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};