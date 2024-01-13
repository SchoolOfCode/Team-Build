
"use client";
import React, { useState, useEffect } from "react";
import FetchAllProjectsUsingCharityRole from "@/db-components/FetchAllProjectsByCharityRole";
import FetchCharityNameById from "@/db-components/FetchCharityNameById";
import AllProjects from "./AllProjects";
import UpdateProjectStatus from "@/db-components/UpdateProjectStatus";

export default function DisplayModeratorsDashboard() {

  // set State on allProjects array
  const [allProjects, setAllProjects] = useState([]);
  const [projectStatusChanged, setProjectStatusChanged] = useState(false);  

  // Display the initial list of all projects 
   useEffect(() => {
    FetchAllProjectsUsingCharityRole().then((data) => {
       const projectsArray = data.map((project) => ({
         ...project,
         charityName: FetchCharityNameById(project.id).then(
           (charityName) => charityName
         ),
       }));

       setAllProjects(projectsArray);
     });
   }, [projectStatusChanged || undefined ]);

// This function is used to update the status on the project when either button is clicked

  function updateStatus(project_id, newStatus) {
    console.log(project_id, newStatus, projectStatusChanged)
     UpdateProjectStatus(project_id, newStatus).then(() => setProjectStatusChanged(!projectStatusChanged)   
     )
     console.log(projectStatusChanged)
    return;
  };
   
    return (
    <>
      <div className="lg:overflow-auto lg:grid section flex flex-col justify-top items-left rounded-lg p-2 m-2 lg:h-auto ">
        <h1 className="mt-10 leading-snug text-lg font-bold lg:text-2xl lg:max-w-3
        xl lg:leading-snug">
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
           Headings to go here
          </span>
        </h1>
        <span className="border-b border-black w-11/12 lg:mb-3 my-3"></span>
        <ol>
          {allProjects.map((project) => {
            return (
              <AllProjects
                key={project.projects.project_id}
                project={project}
                updateStatusFunc={updateStatus}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}