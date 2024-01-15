
"use client";
import React, { useState, useEffect } from "react";
import FetchAllProjects from "@/db-components/FetchAllProjects";
import FetchCharityUserRoleByProjectId from "@/db-components/FetchCharityUserRoleByProjectId";
import FetchCharityUserRoleByProjectId2 from "@/db-components/FetchCharityUserRoleByProjectId2";
import AllProjects from "./AllProjects";
import UpdateProjectStatus from "@/db-components/UpdateProjectStatus";

export default function DisplayModeratorsDashboard() {

  // set State on allProjects array
  const [allProjects, setAllProjects] = useState([]);
  const [projectStatusChanged, setProjectStatusChanged] = useState(false);  
  const [includeArchived, setIncludeArchived] = useState(false);  

 // Display the initial list of all projects 
  useEffect(() => {
    FetchAllProjects(includeArchived).then((data) => {
       const projectsArray = data.map((project) => ({
         ...project,
         charityName: FetchCharityUserRoleByProjectId(project.project_id).then(
          (charityName) => charityName),
          charityId: FetchCharityUserRoleByProjectId2(project.project_id).then(
            (charityId) => charityId,
         )
         }));

       console.log(projectsArray)
       setAllProjects(projectsArray);
       
     });
   }, [projectStatusChanged, includeArchived || undefined ]);

 
// This function is used to update the status on the project when either button is clicked

  function updateStatus(project_id, newStatus) {
    console.log(project_id, newStatus, projectStatusChanged)
     UpdateProjectStatus(project_id, newStatus).then(() => setProjectStatusChanged(!projectStatusChanged)   
     )
     console.log(projectStatusChanged)
    return;
  };
  
  function includeArchivedFunc() {
         setIncludeArchived(!includeArchived)   
     return;
  };

    return (
    <>
      <div className="lg:overflow-auto lg:grid section flex flex-col justify-top items-left rounded-lg p-1 m-1 lg:h-auto ">
        <h1 className="mt-10 leading-snug text-lg font-bold lg:text-2xl lg:max-w-3
        xl lg:leading-snug">
         
          <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2"
        onClick={includeArchivedFunc}>
            Include Archived Projects
        </button>
        </h1>
        <span className="border-b border-black w-11/12 lg:mb-1 my-3"></span>
        <ol>
          {allProjects.map((project) => {
            return (
              <AllProjects
                key={project.project_id}
                project={project}
                updateStatusFunc={updateStatus}
                includeArchivedInd={includeArchived}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}