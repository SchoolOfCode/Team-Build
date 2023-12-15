//import Link from "next/link";
import DisplayCharitiesDashboard from "@/components/DisplayCharitiesDashboard";

export default function CharityDashboard() {
  return (
    <div className="lg:mt-[10px] text-left lg:m-auto lg:h-[8/12] lg:bg-slate-50 lg:flex lg:justify-center lg:flex-col lg:align-middle lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="flex flex-col justify-center">
        <h1 className="m-4 leading-snug text-3xl font-bold lg:text-5xl lg:leading-snug">
          Charity{" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Dashboard
          </span>
        </h1>
        <span className="border-b border-black w-11/12 ml-2 mr-2"></span>
      </div>
        <DisplayCharitiesDashboard />
    </div>
  );
}
