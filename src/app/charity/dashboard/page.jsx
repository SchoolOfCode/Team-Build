import Link from "next/link";
import CharityDash from "@/components/charityDashboard";
import DisplayCharitiesDashboard from "@/components/DisplayCharitiesDashboard";

export default function CharityDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-grow">
        <CharityDash />
        <DisplayCharitiesDashboard />
      </div>
    </div>
  );
}
