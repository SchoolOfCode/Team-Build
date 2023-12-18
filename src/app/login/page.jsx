"use client";
import SimpleLogin from "@/components/SimpleLogin";

export default function Login() {
  return (
    <div className="text-left mx-3  lg:p-10 lg:flex lg:bg-slate-50 lg:justify-center lg:align-middle lg:text-xl lg:items-center lg:w-7/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="">
      <SimpleLogin />
    </div>
    </div>
  );
}
