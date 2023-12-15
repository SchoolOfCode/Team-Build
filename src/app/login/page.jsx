"use client";
import Link from "next/link";
import CharityRegistration from "@/components/charityRegistration";

export default function Login() {
  return (
    <div className="flex flex-col">
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-grow">
        <button className="button bg-red-400 font-bold rounded w-48 h-16 text-md lg:w-56 lg:text-2xl lg:mt-4 mt-10">
          <Link href="/developers/dashboard">Developers Dashboard</Link>
        </button>
        <button className="button bg-red-400 font-bold rounded w-48 h-16 text-md lg:w-56 lg:text-2xl lg:mt-4 mt-10">
          <Link href="/charity/dashboard">Charity Dashboard</Link>
        </button>
      </div>
    </div>
  );
}
