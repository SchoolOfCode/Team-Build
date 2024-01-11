
"use client";
import React, { useState, useEffect } from "react";
import FetchAllProjectsUsingCharityRole from "@/db-components/FetchAllProjectsByCharityRole";

import AllProjects from "./AllProjects";

export default function DisplayModeratorsDashboard() {

  // set State on allProjects array
  const [allProjects, setAllProjects] = useState([]);
    
  // Display the initial list of all projects 
   useEffect(() => {
   FetchAllProjectsUsingCharityRole().then((data) =>
   setAllProjects(data));
    }, []);

  

    return (
    <>
      <div className="lg:overflow-auto lg:grid section flex flex-col justify-top items-left rounded-lg p-2 m-2 lg:h-auto mt-4">
        <h1 className="mt-10 leading-snug text-lg font-bold lg:text-2xl lg:max-w-3
        xl lg:leading-snug">
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
           Headings to go here
          </span>
        </h1>
        <span className="border-b border-black w-11/12 lg:mb-3 my-3"></span>
        <ol>
          {allProjects.map((aProject) => {
            return (
              <AllProjects
                key={aProject.project_id}
                project={aProject}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}