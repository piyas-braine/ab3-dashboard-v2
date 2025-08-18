import { StaticImageData } from "next/image";

export type TSelectPatientProps = {
  id: number;
  email: string;
  name: string;
  image?: StaticImageData | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedPatient: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedPatient: React.Dispatch<React.SetStateAction<any>>;
};