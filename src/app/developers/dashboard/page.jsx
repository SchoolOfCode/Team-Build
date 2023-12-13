import Navbar from "@/components/navbar";
import "../../../../globals.css"
import Link from "next/link";
import DisplayDevelopersDashboard2 from "@/components/DisplayDevelopersDashboard2";

export default function DeveloperDasboard() {
  return (
    <div>
      <Navbar />
      <h2 className="subTitle text-center text-4xl font-bold p-2 bg-emerald-300">
        Dashboard
      </h2>
      <DisplayDevelopersDashboard2 />
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
