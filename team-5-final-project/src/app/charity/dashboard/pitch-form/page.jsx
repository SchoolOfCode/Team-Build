"use client";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import PitchForm from "@/app/components/pitchForm";

export default function PitchRegistration() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-grow">
        <PitchForm />
      </div>
      <Footer />
    </div>
  );
}

/*
"use client";
import Navbar from "@/app/components/navbar";
import "../../globals.css";
import Link from "next/link";
import CharityRegistration from "@/app/components/charityRegistration";
import Footer from "@/app/components/Footer";

export default function CharityRegister() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-grow">
        <CharityRegistration />
      </div>
      <Footer />
    </div>
  );
}

*/
