import { StaticImageData } from "next/image";



export type TProduct = {
    name: string;
    price: number;
    image: string | StaticImageData;
    desc: string;
}