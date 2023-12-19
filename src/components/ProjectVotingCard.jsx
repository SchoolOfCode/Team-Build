"use client";
import Image from "next/image";
import yellowlike from "../../public/yellow-like.png";
import React, { useState } from "react";
//import DeveloperDashboard from '../developers/dashboard/page';
//import Developers from '../developers/page';

import Link from "next/link";

// Return the project voting card
export default function ProjectVotingCard(params) {
  // const [isVotedFor, setIsVotedFor] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [voteSubmittedMessage, setVoteSubmittedMessage] = useState("");

  console.log(params);

  const project = params.project;
  const functionToVoteOne = params.functionToVoteOne;
  const functionToVoteTwo = params.functionToVoteTwo;

  //Function that is invoked when the upvote 1 button is clicked. This inserts a votes intersection table,
  //and adds one to the total_score for the project using a database trigger function.
  function handleClickOne() {
    setSubmitted(!submitted);
    setVoteSubmittedMessage("Thank you for your vote!");
    return functionToVoteOne(project.project_id);
  }

  //Function that is invoked when the upvote 2 button is clicked. This inserts a votes intersection table,
  //and adds two to the total_score for the project using a database trigger function.
  function handleClickTwo() {
    setSubmitted(!submitted);
    setVoteSubmittedMessage("Thank you for your vote!");
    return functionToVoteTwo(project.project_id);
  }

  return (
    <div>
      <Link
        key={project.project_id}
        href={`../dashboard/voting/${project.project_id}`}
      ></Link>
      <li className="lg:grid lg:grid-cols-4 lg:border-b lg:border-slate-400 lg:w-full border-b lg:mt-2 border-slate-700 pb-2">
        <h1 className="col-span-1 text-lg font-bold">{project.title}</h1>
        <p className="col-span-2">{project.short_desc}</p>
        <span className="col-span-1 lg:flex lg:flex-row lg:gap-4 flex justify-evenly">
          <button
            onClick={handleClickOne}
            className={submitted ? "hidden" : ""}
          >
            <Image src={yellowlike} width={48} height={48} alt="Vote Up" />
            Vote Up
          </button>
          <button
            onClick={handleClickTwo}
            className={submitted ? "hidden" : ""}
          >
            <span className="flex flex-row">
              <Image
                src={yellowlike}
                width={48}
                height={48}
                alt="Vote Up More"
              />
              <Image
                src={yellowlike}
                width={48}
                height={48}
                alt="Vote Up More"
              />
            </span>
            Vote Up More
          </button>
          {submitted && (
            <p className="bg-emerald-400 p-4 font-bold rounded-md">
              {voteSubmittedMessage}
            </p>
          )}
        </span>
      </li>
    </div>
  );
}
