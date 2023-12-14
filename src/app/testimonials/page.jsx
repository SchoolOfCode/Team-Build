import Link from "next/link";


export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen mr-5">
      <section className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-20">
          <h1 className="mt-10 leading-snug text-5xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
            Test
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              imonials
            </span>
          </h1>

          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-20 lg:align-bottom lg:w-4/5">
            <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
              Explore the impact firsthand on our Testimonials page. See how
              Tech for Good is transforming charitable initiatives through
              shared efforts and inspiring stories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}