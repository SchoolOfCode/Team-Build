import Navbar from "../components/navbar";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import developers from "/public/developers.png";

export default function Developers() {
  return (
    <section>
      <Navbar />
      <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
        <Image
          src={developers}
          alt="developers"
          width={500}
          className="headerImage"
        />
        <div className="headerText1 sm:col-span-1 md:col-span-2 absolute top-4 left-0 right-0 bottom-0 flex flex-col justify-between">
          <h2 className="subTitle1 text-3xl pl-3 pb-3 text-white text-center">
            Calling out aspiring
          </h2>
          <h1 className="subTitle2 text-5xl font-bold pl-3 pb-4 text-white text-center">
            Developers
          </h1>
        </div>
      </div>
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <h2 className="subTitle text-2xl font-bold p-2">
          Juniors, Bootcampers
        </h2>
        <p>
          Calling all aspiring developers! Join our Tech for Good community and
          be part of projects that matter. As a junior developer, this is your
          chance to: Dive into real-world, commercial projects while making a
          positive impact. Collaborate with seasoned developers. Receive
          mentorship to accelerate your learning. Build a portfolio showcasing
          both your coding skills and commitment to social good. Your journey
          towards meaningful experience starts here — where coding meets
          purpose.
        </p>
        <button className="button m-3">
          <Link href={"developers/register"}>Register</Link>
        </button>
      </div>
    </section>
  );
}
