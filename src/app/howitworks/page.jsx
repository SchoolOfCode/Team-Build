"use client";
import Link from "next/link";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="lg:grid lg:grid-cols-12 grid grid-cols-1">
      <div className="lg:col-span-4 lg:col-start-2 col-span-1 flex flex-col justify-between ml-5 mt-2">
        <h1 className="lg:mt-10 mb-5 leading-snug text-5xl font-bold lg:text-8xl lg:max-w-3xl ">
          How it{" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            works
          </span>
        </h1>
        <p className="lg:text-4xl text-xl font-bold mb-10 lg:max-w-2xl lg:leading-relaxed mr-6">
          Building Websites, Transforming Lives with Every Line of Code.
        </p>

        <Link href="/charity/register"><button className="hidden lg:block button mr-20 bg-red-400 font-bold rounded w-44 h-10 text-lg lg:h-16 lg:w-56 lg:text-2xl lg:mt-4 mt-2 ml-14 lg:mb-20">
         Join Us{" "}
         </button></Link>
        
      </div>
      <div className="lg:col-span-5 lg:col-end-11">
        <Image
          src="/HowItWorks.svg"
          width={500}
          height={600}
          alt="How it works diagram"
          className="lg:mt-8 mt-4 w-screen h-auto"
        />
      </div>
      <Link href="/charity/register"><button className="lg:hidden button mx-auto bg-red-400 font-bold rounded w-44 h-10 text-lg lg:h-16 lg:w-56 lg:text-2xl lg:mt-4 ml-30 lg:mb-20 flex justify-center items-center">
        Join Us{" "}
        </button></Link>
    
    </div>
  );
}
/*
    <div className=""> 
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
            Building Websites, Transforming Lives with Every Line of Code. 
          </p> 
          <div className="flex">
                    <button className="button mr-20 bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-2 ml-14">
            <Link href={"/charity/register"}>Join us</Link>{" "}

          </button>
        </div>
        </div>
        </div>
        <div className="grid col-span-1 mt-10 mr-10">
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
*/

/*
    <div className=""> 
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
            Building Websites, Transforming Lives with Every Line of Code. 
          </p> 
          <div className="flex">
                    <button className="button mr-20 bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-2 ml-14">
            <Link href={"/charity/register"}>Join us</Link>{" "}

          </button>
        </div>
        </div>
        </div>
        <div className="grid col-span-1 mt-10 mr-10">
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
*/
