
"use client";
import Navbar from "@/components/navbar";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function Login() {
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
