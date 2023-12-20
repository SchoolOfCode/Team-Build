"use client";
import React, { useState, useEffect } from "react";
import FetchRolesByDevId from "@/db-components/FetchRolesByDevId";
import CharitiesActiveProject from "./CharitiesActiveProject";
import CharitiesPitch from "./CharitiesPitch";

export default function DisplayCharitiesDashboard() {
  // set State on the activeProjects array and the pitchedProjects array for this charity
  const [activeProjects, setActiveProjects] = useState([]);
  const [pitchedProjects, setPitchedProjects] = useState([]);

  // Define constants for active values and pitched values of project_status
  const isActiveValue = [7, 8, 9];
  const isPitchedValue = [1, 2, 3, 5, 6];

  // Display the initial list of active and pitched projects that this charity is associated with.
  // Pull to users ID from local staorageI
  // These are projects that have a roles_of_users instance for this charity and the associated project has a status of:
  //  - 1,2,3,5 or 6 for pitched projects
  //  - 7,8 or 9 for active projects

  useEffect(() => {
    const ctyId = localStorage.getItem("userId");
    FetchRolesByDevId(ctyId).then((data) => {
      const filteredProjects = data.filter((project) =>
        isActiveValue.includes(project.projects.status)
      );
      setActiveProjects(filteredProjects);
    });
  }, []);

  useEffect(() => {
    const ctyId = localStorage.getItem("userId");
    FetchRolesByDevId(ctyId).then((data) => {
      const filteredProjects = data.filter((project) =>
        isPitchedValue.includes(project.projects.status)
      );
      setPitchedProjects(filteredProjects);
    });
  }, []);

  return (
    <>
      <div className="section flex flex-col justify-top items-left rounded-lg p-2 m-2  lg:auto mt-4">
        <h1 className="leading-snug text-lg font-bold lg:text-2xl lg:max-w-3xl lg:leading-snug">
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Your Projects that are currently being built
          </span>
        </h1>
        <ol>
          {activeProjects.map((activeProject) => {
            return (
              <CharitiesActiveProject
                key={activeProject.id}
                project={activeProject.projects}
              />
            );
          })}
        </ol>
      </div>

      <div className="section flex flex-col justify-top items-left rounded-lg p-2 m-2  lg:auto mt-4">
        <h1 className="mt-10 mb-4 leading-snug text-lg font-bold lg:text-2xl lg:max-w-3xl lg:leading-snug">
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Pitches you have submitted for a new project
          </span>
        </h1>

        <ol>
          {pitchedProjects.map((pitchedProjects) => {
            return (
              <CharitiesPitch
                key={pitchedProjects.id}
                project={pitchedProjects.projects}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}
