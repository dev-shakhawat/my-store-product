import AnnouncementBar from "@/components/common/anouncement-bar";
import { Container } from "@/components/common/container";
import { Nav } from "@/components/common/nav";
import TextReveal from "@/components/common/text-reveal";
import AccordianSection from "@/components/sections/accordian-section";
import FashionCollection from "@/components/sections/fashion-collection";
import NewStyle from "@/components/sections/new-style";
import ShowcasePage from "@/components/sections/perfect-comfrotable";
import { ProductBanner } from "@/components/sections/product-banner";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" ">
      <AnnouncementBar />
      <Nav />
      <ProductBanner />
      <AccordianSection />

      <Container>
        <TextReveal
          className=" text-5xl text-center leading-[1.3] font-medium "
          lines={[
            "Our latest arrivals bring you innovative ",
            "designs that redefine style, combining ",
            "cutting-edge trends with timeless",
            "elegance",
          ]}
        />
      </Container>

      <FashionCollection />
      {/* <ShowcasePage/> */}

      <NewStyle />
    </section>
  );
}
