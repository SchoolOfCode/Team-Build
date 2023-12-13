import Navbar from "@/components/navbar";
import Image from "next/image";
import partners from "public/partners.jpeg";

export default function Page() {
  return (
    <section>
      <Navbar />
      <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
        <h2 className="subTitle text-center text-2xl font-bold p-2 bg-emerald-300">
          Partners
        </h2>
        <Image
          src={partners}
          alt="partners"
          width={500}
          className="headerImage"
        />
      </div>
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <h2 className="subTitle text-2xl font-bold p-2">Partners</h2>
        <p>
          In the realm of making a positive impact, our partners stand as
          pillars of support at Tech for Good. To continue our journey of
          community betterment, we are actively seeking like-minded individuals
          and organisations to join hands with us. Together, lets write a story
          of impact. Contact us today, and lets explore the possibilities of
          collaboration for a brighter future.
        </p>
      </div>
    </section>
  );
}
