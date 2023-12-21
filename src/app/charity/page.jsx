"use client";
import Link from "next/link";
import Image from "next/image";

export default function Charity() {
  return (
    <div className="lg:w-4/5 ml-6"> 
    <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl ">
    We want to help {" "}
    <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
      Charities
    </span>
  </h1>
  
  <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-20 lg:align-bottom lg:w-4/5 mt-4">
            <p className="text-lg lg:text-2xl font-bold lg:mb-36 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
            Is your charity in need of help harnessing the power of technology? We want to help you! 
            </p>
            <p>
            Register below to help us help you.
            </p>
            <button className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-4">
              <Link href={"/charity/register"}>Register</Link>
            </button>
          </div>
      
    </div>
    
  );
}
