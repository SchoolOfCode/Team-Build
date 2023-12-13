

import React from 'react';
import Navbar from "@/app/components/Navbar";
import FetchProjectsByStatus from "@/app/db-components/FetchProjectsByStatus.jsx";
import ProjectVotingCard from '@/app/components/ProjectVotingCard';

//clear the cache of projects fetched every 5 seconds?
export const revalidate = 5;

// Go to fetch the projects with a status of 3 (awaiting voting) to display on the voting page
export default async function  DisplayProjectsForVoting() {
  const projectsArray = await FetchProjectsByStatus("3");


  // map over the array of projects returned and list these on the page
  return (
    <div>
      <Navbar />
      <h1>Vote for your Projects!</h1>
      <ol>
        {projectsArray.map((project) => {
          return <ProjectVotingCard key={project.project_id} project={project} />;
        })}
        </ol>

    </div>
  );
}












