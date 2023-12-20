import Link from "next/link";
import DisplayDevelopersDashboard2 from "@/components/DisplayDevelopersDashboard2";

export default function DeveloperDashboard() {
  return (
    <div className="lg:lg:overflow-auto lg:mt-[10px] text-left lg:m-auto lg:h-[8/12] lg:bg-slate-50 lg:flex lg:justify-center lg:flex-col lg:align-middle lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="flex flex-col justify-center">
        <h1 className="m-4 leading-snug text-3xl font-bold lg:text-5xl lg:leading-snug">
          Developers{" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Dashboard
          </span>
        </h1>
        <p className="ml-4 italic">
          Click on a project title to find out more about it.
        </p>
        <span className="border-b border-black w-11/12 ml-2 mr-2"></span>
      </div>
      <DisplayDevelopersDashboard2 />
      <div className="flex flex-row lg:flex-row justify-center lg:justify-center lg:gap-20 items-center mb-4">
        <Link href="./dashboard/how-voting-works">
          <button className="button border-4 text-black border-red-400 font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
            How does voting work?
          </button>
        </Link>
        <Link href="./dashboard/voting">
          <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
            Vote Up New Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
