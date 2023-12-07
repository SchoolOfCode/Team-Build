"use client";
import Navbar from "@/app/components/navbar";
import DisplayProjectsForVoting from "@/app/components/votingDispPrjs";



 

export default function Voting() {
  return (
    <div>
      <Navbar />
      <h1>Voting</h1>
      <DisplayProjectsForVoting />
    </div>
  );
}
