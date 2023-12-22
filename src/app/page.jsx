import Link from "next/link";

export default function Testimonials() {
  return (
    //  <div className="flex flex-col">
    <div>
      <div className="lg:absolute  lg:bg-stone-100 lg:rounded-bl-full lg:rounded-tl-full"></div>
      <section className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-10">
          <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
            We Build Websites For{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Free
            </span>
          </h1>

          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:align-bottom lg:w-4/5">
            <p className="text-4xl font-bold mb-2 lg:max-w-2xl lg:mr-60 lg:leading-relaxed">
              No catch. <br /> We only work with charities.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center mb-2 mt-2">
            <Link href={"../charity"}>
              <button className="button bg-red-400 font-bold rounded w-56 h-10 text-xl lg:w-56 lg:h-16 lg:text-2xl my-4 lg:mx-4">
                Find out more
              </button>
            </Link>

            <Link href={"../developers"}>
              <button className="button bg-transparent text-decoration: underline rounded text-stone-600 justify-left lg:w-56 lg:h-10 lg:text-2xl my-4 lg:mx-4">
                Developers join us here{" "}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
