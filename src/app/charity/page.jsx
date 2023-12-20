"use client";
import Link from "next/link";
import Image from "next/image";

export default function Charity() {
  return (
    <div className="lg:w-4/5 ml-6"> 
    <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl ">
    How it {" "}
    <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
      works
    </span>
  </h1>
  
    <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="grid col-span-1 lg:mx-40 ml-6">
        
        <div className="mt-10 justify-between lg:flex  lg:align-bottom lg:w-4/5 lg:leading-relaxed lg:items-start">
          <p className="text-4xl font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed mr-6">
            Building Websites, Transforming Lives with Every Line of Code
          </p> 
          <div className="flex">
                    <button className="button mr-20 bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-2 ml-14">
            <Link href={"/charity/register"}>Join us</Link>{" "}

          </button>
        </div>
        </div>
        </div>
        <div className="grid col-span-1 mt-10 mr-6">
          <Image
      src="/howitworksv2.svg"
      width={736}
      height={738}
      alt="How it works diagram"
    /></div>
      
    </div>
    </div>
  );
}
