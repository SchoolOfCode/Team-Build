import Link from "next/link";

export default function Developers() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-20 mr-4">
          <h1 className="mt-10 leading-snug text-5xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
            Calling out aspiring{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Developers
            </span>
          </h1>
          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-20">
            <p className="text-lg lg:text-2xl font-bold lg:mb-5 lg:max-w-5xl lg:mr-24 lg:leading-relaxed">
              Calling all aspiring developers! Join the Build community and be
              part of projects that matter. As a junior developer, this is your
              chance to: dive into real-world, commercial projects while making
              a positive impact. Receive mentorship and collaborate with
              seasoned developers to accelerate your learning. Build a portfolio
              showcasing both your coding skills and commitment to social good.
              Your journey towards meaningful experience starts here — where
              coding meets purpose.
            </p>
            <button className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-10">
              <Link href={"/developers/register"}>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
