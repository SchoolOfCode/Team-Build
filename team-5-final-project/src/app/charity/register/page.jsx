"use client";
import Navbar from "@/app/components/navbar";
import "../../globals.css";
import Link from "next/link";
import CharityRegistration from "@/app/components/charityRegistration";

export default function CharityRegister() {
  return (
    <div>
      <Navbar />
      {/* <h1>Charity Register</h1> */}
      <button className="button">
        <Link href="/"> Back to Home</Link>
        <CharityRegistration />
      </button>
    </div>
  );
}
