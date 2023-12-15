import Link from "next/link";
import DisplayDevelopersDashboard2 from "@/components/DisplayDevelopersDashboard2";

export default function DeveloperDasboard() {
  return (
    <div className="text-left lg:m-auto lg:p-10 lg:h-[8/12] lg:flex lg:bg-slate-50 lg:justify-center lg:flex-col lg:align-middle lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <DisplayDevelopersDashboard2 />
      <div className="flex flex-row lg:flex-row justify-center lg:justify-center lg:gap-20 items-center pt-10">
        <button className="button border-4 text-red-400 border-red-400 font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
          <Link href="./dashboard/how-voting-works">How does voting work?</Link>
        </button>
        <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
          <Link href="./dashboard/voting">Votes Table</Link>
        </button>
      </div>
    </div>
  );
}
