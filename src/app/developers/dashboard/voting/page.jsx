"use client";
import DisplayProjectsForVoting from "@/components/DisplayProjectsForVoting";
import { useRouter } from "next/navigation";

export default function VotingPage() {
  const router = useRouter();

  return (
    <div className="lg:overflow-auto lg:mt-[10px] text-left flex flex-col lg:m-auto lg:h-screen lg:bg-slate-50 lg:flex lg:flex-col lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="">
        <h1 className="m-4 leading-snug text-3xl font-bold lg:text-5xl lg:leading-snug">
          Cast your{" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Votes
          </span>{" "}
          for your favorite new projects!
        </h1>
        <span className="border-b border-black w-11/12 ml-2 mr-2"></span>
      </div>
      <div>
        <DisplayProjectsForVoting />
      </div>

      <div className="">
        <button
          onClick={() => router.back()}
          className="button border-4 lg:text-black mb-24 text-black-400 border-red-400 font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-lg lg:mt-4 m-2"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}

/*


      <div className="flex flex-row lg:flex-row justify-center lg:justify-center lg:gap-20 items-center mb-4">
        <button className="button border-4 text-red-400 border-red-400 font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
          <Link href="./dashboard/how-voting-works">How does voting work?</Link>
        </button>
        <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
          <Link href="./dashboard/voting">Votes Table</Link>
        </button>
      </div>
   
*/
