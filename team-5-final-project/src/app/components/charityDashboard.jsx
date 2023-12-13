"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function CharityDash() {
  return (
    <div className="text-left mx-3 lg:p-10 lg:flex lg:bg-slate-50 lg:justify-center lg:align-middle lg:text-xl lg:items-center lg:w-7/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <h1 className="text-4xl font-bold mt-3 leading-relaxed">
        Charity{" "}
        <span className="bg-emerald-400 py-1 px-2 rounded-md">Dashboard</span>
      </h1>
      <div className="bg-slate-50 mt-5 tracking-wider flex flex-col w-full lg:grid lg:grid-cols-2 lg:gap-10 gap-5">
        <button className="button bg-red-400 font-bold rounded w-36 h-12 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-4">
          <Link href="/charity/dashboard/how-pitching-works">
            How does pitching work?
          </Link>
        </button>
        <button className="button bg-red-400 font-bold rounded w-36 h-12 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-4">
          <Link href="/charity/dashboard/pitch-form">Create New Pitch</Link>
        </button>
      </div>
    </div>
  );
}
