"use client";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactUs() {
  return (
    <div className="flex flex-col">
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-grow">
        <ContactForm />
      </div>
    </div>
  );
}