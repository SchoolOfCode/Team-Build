"use client";
import SimpleLogin from "@/components/SimpleLogin";

export default function Login() {
  return (
    <div className="flex flex-col">
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-grow">
        <SimpleLogin />
      </div>
    </div>
  );
}
