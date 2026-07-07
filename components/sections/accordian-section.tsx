import Accordion from "../common/accordian";
import { Container } from "../common/container";

export default function AccordianSection({}: {}) {
  return (
    <div className="py-10 sm:py-15  md:py-20 lg:py-25">
      <Container>
        <div className="max-w-4xl">
          <Accordion title="Description">
            <p className="text-sm text-gray-500">social media</p>
          </Accordion>
          <Accordion title="International Shipping Available">
            <p className="text-sm text-gray-500">
              Experience seamless shopping from anywhere in the world with our
              international shipping service. We’re dedicated to bringing your
              favorite products right to your doorstep, no matter where you are.
            </p>
          </Accordion>
          <Accordion title="Premium Fabrics">
            <p className="text-sm text-gray-500">
              Discover the essence of luxury and comfort with our premium
              fabrics collection. Carefully selected for their superior quality,
              these fabrics offer a blend of elegance and durability, enhancing
              both the look and feel of every garment.
            </p>
          </Accordion>
          <Accordion title="Discover Your Perfect Size">
            <div className="text-sm text-gray-500  flex flex-col gap-1 ">
              Finding the perfect fit has never been easier with our detailed
              size guide.
              <br/>
              
              Bust 

              <br/>
              
              <p className=""><span className="font-semibold">XS</span>: 31-32 inches</p><br/>
              <p className=""><span className="font-semibold">S</span>: 33-34 inches</p>  <br/>
              <p className=""><span className="font-semibold">M</span>: 35-36 inches</p> <br/>
              <p className=""><span className="font-semibold">L</span>: 37-38 inches</p><br/>
              <p className=""><span className="font-semibold">XL</span>: 39-40 inches</p><br/>
              <p className=""><span className="font-semibold">XXL</span>: 41-42 inches</p><br/>
              Waist <br/>
              <p className=""><span className="font-semibold">XS</span>: 23-24</p> <br/>
              inches<br/>
              <p className=""><span className="font-semibold">S</span>: 25-26 inches </p> <br/>
              <p className=""><span className="font-semibold">M</span>: 27-28 inches </p> <br/>
              <p className=""><span className="font-semibold">L</span>: 29-30 inches</p><br/>
              <p className=""><span className="font-semibold">XL</span>: 31-32</p>
              inches<br/>
              <p className=""><span className="font-semibold">XXL</span>: 33-34 inches</p><br/>
              Hips<br/>
              <p className=""><span className="font-semibold">XS</span>: 33-34 inches</p><br/>
              <p className=""><span className="font-semibold">S</span>: 35-36 inches</p><br/>
              <p className=""><span className="font-semibold">M</span>: 37-38</p>
              inches<br/>
              <p className=""><span className="font-semibold">L</span>: 39-40 inches</p><br/>
              <p className=""><span className="font-semibold">XL</span>: 41-42 inches</p><br/>
              <p className=""><span className="font-semibold">XXL</span>: 43-44 inches </p><br/>
            </div>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
