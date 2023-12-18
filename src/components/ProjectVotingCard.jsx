"use client";
import React, { useState } from "react";
//import DeveloperDashboard from '../developers/dashboard/page';
//import Developers from '../developers/page';
import InsertVote from "../db-components/InsertVote";
import Link from "next/link";

// Return the project voting card
export default function ProjectVotingCard({ params }) {
  const [isVotedFor, setIsVotedFor] = useState(false);

  console.log({params});

  const project = params.project;

  //Function that is invoked when the upvote 1 button is clicked. This inserts a votes intersection table,
  //and adds one to the total_score for the project using a database trigger function.
  function handleClickOne() {
    const devId = localStorage.getItem("userId");
    InsertVote(devId, project.project_id, 1).then(() =>
      setIsVotedFor(!isVotedFor)
    );
    return console.log("click One", isVotedFor);
  }

  //Function that is invoked when the upvote 2 button is clicked. This inserts a votes intersection table,
  //and adds two to the total_score for the project using a database trigger function.
  function handleClickTwo() {
    const devId = localStorage.getItem("userId");
    InsertVote(devId, project.project_id, 2).then(() =>
      setIsVotedFor(!isVotedFor)
    );
    return console.log("click Two", isVotedFor);
  }

  return (
    <div>
      <Link
        key={project.project_id}
        href={`../dashboard/voting/${project.project_id}`}
      >
        <div className="projectDiv">
          <li>
            <p>{project.title}</p>
            <p>{project.short_desc}</p>
          </li>
        </div>
      </Link>
      <button onClick={handleClickOne}>Vote Up</button>
      <button onClick={handleClickTwo}>Vote Up More</button>
    </div>
  );
}
