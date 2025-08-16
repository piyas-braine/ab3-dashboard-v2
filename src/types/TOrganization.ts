import { StaticImageData } from "next/image";

export type TOrganization = {
    id: number;
    name: string;
    image: string | StaticImageData;
};