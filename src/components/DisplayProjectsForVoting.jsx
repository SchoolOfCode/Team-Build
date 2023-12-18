"use client";
import React, { useState, useEffect } from "react";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";
import ProjectVotingCard from "./ProjectVotingCard";

export default function DisplayProjectsForVoting() {
  // set State on projects that are available for voting
  const [projectsForVoting, setProjectsForVoting] = useState([]);
  
  
  
   // Display the initial list of projects that are available to be voted on.
   // These are projects with a status of 3
  useEffect(() => {
     FetchProjectsByStatus(3).then((projectsForVoting) => {
       setProjectsForVoting(projectsForVoting);})
     }, []);

  
  return (
    <>
     <div className="lg:grid section flex flex-col justify-top items-left rounded-lg p-2 m-2  h-40 mt-4">
        <h1 className="subTitle text-xl font-bold">Vote for your favourite projects</h1>
        <ol>
          {projectsForVoting.map((projectForVoting) => {
            return (
              <ProjectVotingCard
                key={projectForVoting.project_id}
                project={projectForVoting}
                functionToVoteOneThumb={functionToVoteOneThumb}
                functionToVoteTwoThumbs={functionToVoteTwoThumbs}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}