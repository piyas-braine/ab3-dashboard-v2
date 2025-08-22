import { StaticImageData } from "next/image";

export type TMedicalSpecialistCardProps = {
  medicalSpecialistImage?: StaticImageData | string;
  medicalSpecialistName: string;
  medicalSpecialistLocation: string;
  isActive?: boolean;
};