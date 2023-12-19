"use client";
import React, { useState, useEffect } from "react";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";
import ProjectVotingCard from "./ProjectVotingCard";
import InsertVote from "../db-components/InsertVote";
import FetchVotesByDevId from "@/db-components/FetchVotesByDevId";

export default function DisplayProjectsForVoting() {
  // set State on projects that are available for voting
  const [projectsForVoting, setProjectsForVoting] = useState([]);
  const [isVotedFor, setIsVotedFor] = useState(false);
  const [thankYouMsg, setThankYouMsg] = useState(false);

  // Display the initial list of projects that are available to be voted on.
  // These are projects with a status of 3, that this developer has not already voted for.
  // useEffect(() => {
  //   FetchProjectsByStatus(3).then((data) => setProjectsForVoting(data));
  // }, [isVotedFor]);

  // Display the initial list of projects that are available to be voted on.
  // These are projects with a status of 3, that this developer has not already voted for.
  // useEffect(() => {
  //   // First fetch all the votes that this developer has
  //   const devsId = localStorage.getItem("userId");
  //   FetchVotesByDevId(devsId).then((data) => {
  //     const votesArray = data;

  //     //Now build from the array of Votes above a simple array of project_id's
  //     const projectIdArray = votesArray.map((entry) => entry.project_id);

  //     // Then fetch all projects with a status of 3 (awaiting voting) and filter out those
  //     // that this developer has already voted for i.e.already exist in the projectIdArray
  //     FetchProjectsByStatus(3).then((data) => {
  //     //   const filteredProjects = data.filter(
  //     //     (entry) => !projectIdArray.includes(entry.project_id)
  //     //   );


  //     const filteredProjects = data.map((entry) => {
  //        if (projectIdArray.includes(entry)) {
  //         const newEntry = {...entry, msg: true}
  //         return;
  //         } else {
  //           const newEntry = {...entry, msg: false}
  //         }
  //       }
  //     });
  //     setProjectsForVoting(filteredProjects);
  //     console.log(filteredProjects);
  //   })

  //   });
  // }, [isVotedFor]);

  useEffect(() => {
    // First fetch all the votes that this developer has
    const devsId = localStorage.getItem("userId");
    FetchVotesByDevId(devsId).then((data) => {
      const votesArray = data;
  
      // Now build from the array of Votes above a simple array of project_id's
      const projectIdArray = votesArray.map((entry) => entry.project_id);
  
      // Then fetch all projects with a status of 3 (awaiting voting) and filter out those
      // that this developer has already voted for i.e. already exist in the projectIdArray
      FetchProjectsByStatus(3).then((data) => {
        const filteredProjects = data.map((entry) => {
          if (projectIdArray.includes(entry.project_id)) {
            const newEntry = { ...entry, msg: true };
            return newEntry;
          } else {
            const newEntry = { ...entry, msg: false };
            return newEntry;
          }
        });
  
        setProjectsForVoting(filteredProjects);
        console.log(filteredProjects);
      });
    });
  }, [isVotedFor]);




  //Function that is invoked when the upvote 1 button is clicked. This inserts a votes intersection table,
  //and adds one to the total_score for the project using a database trigger function.
  function functionToVoteOne(project_id) {
    const devsId = localStorage.getItem("userId");
    InsertVote(devsId, project_id, 1).then(() => setIsVotedFor(isVotedFor));
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
