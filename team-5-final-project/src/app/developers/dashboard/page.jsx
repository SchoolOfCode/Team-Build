import Navbar from "@/app/components/navbar";
import Link from "next/link";

export default function DeveloperDashboard() {
  return (
    <div>
      <Navbar />
      <h2 className="subTitle text-center text-4xl font-bold p-2 bg-emerald-300">
        Dashboard
      </h2>
      <div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">
          Your Current Projects
        </h2>
      </div>
      <div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">Available Projects</h2>
      </div>
      <div className="flex flex-col items-center pt-10">
        <button className="button m-3 w-60">
          <Link href="./dashboard/how-voting-works">How does voting work?</Link>
        </button>
        <button className="button m-3 w-60">
          <Link href="./dashboard/voting">Votes Table</Link>
        </button>
      </div>
    </div>
  );
}
