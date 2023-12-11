import "../globals.css";
import Link from "next/link";

export default function Charity() {
  return (
    <div className="min-h-screen flex flex-col justify-evenly ml-6 lg:flex lg:mx-40">
      <h1 className="leading-snug text-5xl font-bold lg:text-7xl lg:max-w-3xl lg:leading-snug">
        Tech Talent, Charitable{" "}
        <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">Hearts</span>
      </h1>

      <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:align-bottom">
        <p className="text-4xl font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-snug">
          Building Websites, Transforming Lives with Every Line of Code
        </p>
        <button className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4">
          <Link href={"../developers"}>Join us</Link>{" "}
        </button>
      </div>
    </div>
  );
}
