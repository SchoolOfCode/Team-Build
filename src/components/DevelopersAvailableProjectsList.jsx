"use client";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";
import DevelopersAvailableProject from "./DevelopersAvailableProject";
 
 // Return the line item for the developers active project
 export default async function  DevelopersAvailableProjectsList({projectsArray, regInterestInProjectsFunc}) {
   const projectsArray = await FetchProjectsByStatus("3");
 
     return (
        <ol>
         {projectsArray.map((project) => {
          return <DevelopersAvailableProject key={project.project_id}  project={project} regInterestInProjectFunc={regInterestInProjectsFunc} />;
        })}
        </ol>
     );
  }




        