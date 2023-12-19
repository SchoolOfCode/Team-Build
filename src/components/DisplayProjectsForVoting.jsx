"use client";
import React, { useState, useEffect } from "react";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";
import ProjectVotingCard from "./ProjectVotingCard";
import InsertVote from "../db-components/InsertVote";

export default function DisplayProjectsForVoting() {
  // set State on projects that are available for voting
  const [projectsForVoting, setProjectsForVoting] = useState([]);
  const [isVotedFor, setIsVotedFor] = useState(false);

  // Display the initial list of projects that are available to be voted on.
  // These are projects with a status of 3
  useEffect(() => {
    FetchProjectsByStatus(3).then((data) => setProjectsForVoting(data));
    console.log("PFV", projectsForVoting);
  }, []);

  //Function that is invoked when the upvote 1 button is clicked. This inserts a votes intersection table,
  //and adds one to the total_score for the project using a database trigger function.
  function functionToVoteOne(project_id) {
    console.log(project_id);
    const devId = localStorage.getItem("userId");
    InsertVote(devId, project_id, 1).then(
      () => setIsVotedFor(isVotedFor),
      console.log(isVotedFor)
    );
  }

  //Function that is invoked when the upvote 2 button is clicked. This inserts a votes intersection table,
  //and adds two to the total_score for the project using a database trigger function.
  function functionToVoteTwo(project_id) {
    const devId = localStorage.getItem("userId");
    InsertVote(devId, project_id, 2).then(() => setIsVotedFor(!isVotedFor));
  }

  return (
    <>
      <div className="lg:grid section flex flex-col justify-top items-left rounded-lg p-2 m-2  h-40 mt-4">
        <ol>
          {projectsForVoting.map((projectForVoting) => {
            return (
              <ProjectVotingCard
                key={projectForVoting.project_id}
                project={projectForVoting}
                functionToVoteOne={functionToVoteOne}
                functionToVoteTwo={functionToVoteTwo}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}
