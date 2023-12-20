import Link from "next/link";

export default function Testimonials() {
  return (
    //  <div className="flex flex-col">
    <div>
      <div className="lg:absolute lg:top-[110px] lg:-right-[0px] lg:w-[375px] lg:h-[750px] lg:bg-stone-100 lg:rounded-bl-full lg:rounded-tl-full"></div>
      <section className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-20">
          <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
            We Build Websites For{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Free
            </span>
          </h1>

          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:align-bottom lg:w-4/5">
            <p className="text-4xl font-bold mb-10 lg:max-w-2xl lg:mr-60 lg:leading-relaxed leading-1">
            <span className="bg-emerald-300 py-1 px-2 rounded-md">Build</span> is a platform that connects charities with a community of skilled developers.    <br /> 
            </p>
            <button className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-10">
              <Link href={"../charity"}>Find out more</Link>{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
