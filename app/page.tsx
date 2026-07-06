import AnnouncementBar from "@/components/common/anouncement-bar";
import { Nav } from "@/components/common/nav";
import { ProductBanner } from "@/components/sections/product-banner";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" ">
      <AnnouncementBar/>
      <Nav/>
      <ProductBanner/>
       
    </section>
  );
}
