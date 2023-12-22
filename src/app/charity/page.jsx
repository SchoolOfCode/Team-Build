"use client";
import Link from "next/link";
import Image from "next/image";

export default function Charity() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-10 mr-4">
          <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-lg lg:leading-snug lg:w-1/2">
            We want to help{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Charities
            </span>
          </h1>
          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-20 lg:align-middle lg:mb-10">
            <p className="text-lg lg:text-2xl font-bold lg:max-w-4xl lg:mr-24 lg:leading-relaxed lg:">
              Does your charity need help harnessing the power of technology? We
              want to help you! We know that charities often face challenges in
              establishing or maintaining their online presence. With the help
              of our dedicated pool of talented developers and experienced
              mentors leading projects, Build was created to bridge this gap.
              Register your charity now for the opportunity to pitch your
              projects and create your perfect website for free.
            </p>
            <button className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-10">
              <Link href={"/charity/register"}>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
