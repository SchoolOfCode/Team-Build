import Navbar from "@/app/components/navbar/navbar";
import "../../globals.css";
import Link from "next/link";
import CharityRegistration from "@/app/components/charityRegistration";
import { useState } from "react";

export default function CharityRegister() {
  return (
    <div>
      <Navbar />
      <h1>Charity Register</h1>
      <button className="button">
        <Link href="/">Submit</Link>
        <CharityRegistration />
      </button>
    </div>
  );
}
