import Link from "next/link";

export default function Partners() {
  return (
    <div className="flex flex-col">
      <section className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-20">
          <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
            Our{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Partners
            </span>
          </h1>

          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-20 lg:align-bottom lg:w-4/5">
            <p className="text-lg lg:text-2xl font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
              In the realm of making a positive impact, our partners stand as
              pillars of support at Build. To continue our journey of community
              betterment, we are actively seeking like-minded individuals and
              organisations to help us. Together, we can do something amazing.
              Contact us today, and let's explore the possibilities of
              collaboration for a brighter future.
            </p>
            <button className="button bg-red-400 font-bold rounded w-44 h-10 text-xl lg:w-56 lg:h-16 lg:text-2xl lg:mt-4 mt-20">
              <Link href="/contact-us">Work with us</Link>{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
