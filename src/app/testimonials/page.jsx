import Navbar from "../components/Navbar";
import Image from "next/image";
import testimonials from "public/testimonials.jpeg";

export default function Testimonials() {
  return (
    <section>
      <Navbar />
      <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
        <h2 className="subTitle text-center text-2xl font-bold p-2 bg-emerald-300">
          Testimonials
        </h2>
      </div>
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <p>
          Explore the impact firsthand on our Testimonials page. See how Tech
          for Good is transforming charitable initiatives through shared efforts
          and inspiring stories.
        </p>
      </div>
      <Image
        src={testimonials}
        alt="testimonials"
        width={500}
        className="headerImage"
      />
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <p>
          Introducing our heartwarming project designed to combat loneliness in
          Birmingham. Through thoughtful collaboration, we bring together
          passionate developers to create a digital space fostering connection
          and community.
        </p>
      </div>
    </section>
  );
}
