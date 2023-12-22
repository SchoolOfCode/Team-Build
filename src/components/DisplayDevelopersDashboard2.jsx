"use client";
import React, { useState, useEffect } from "react";
import FetchRolesByDevId from "@/db-components/FetchRolesByDevId";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";
import InsertRolesOfUsers from "@/db-components/InsertRolesOfUsers";
import DevelopersActiveProject from "./DevelopersActiveProject";
import DevelopersInterestedProject from "./DevelopersInterestedProject";
import DevelopersAvailableProject from "./DevelopersAvailableProject";

export default function DisplayDevelopersDashboard2() {

  // set State on availableProjects array, interestedProjects array and activeProjects array
  // as these can change if the developer presses the I am interested button
  const [availableProjects, setAvailableProjects] = useState([]);
  const [interestedProjects, setInterestedProjects] = useState([]);
  const [activeProjects, setActiveProjects] = useState([]);

  // Display the initial list of projects that this developer is already active in
  // These are projects that have a roles_of_users instance for this developer  with a role of "interested" (value 4)
  
  useEffect(() => {    
    const DevsId = localStorage.getItem("userId");
    FetchRolesByDevId(DevsId).then((data) =>
      setActiveProjects(data.filter((activeProject) => activeProject.role == 4))
    );
  }, []);

  // Display the initial list of projects that this developer has already registered interest in
  // These are projects that have a roles_of_users instance for this developer  with a role of "interested" (value 2)
 
  useEffect(() => {
    const DevsId = localStorage.getItem("userId");
    FetchRolesByDevId(DevsId).then((data) =>
      setInterestedProjects(
        data.filter((interestedProject) => interestedProject.role == 2)
      )
    );
  }, []);

  // Display the initial list of projects that are "available" for the developer to register interest in
  // These projects that have a status of "Accepted in Principle" to become projects (status of 6), and
  // do not appear already in the list of interested projects.
 
  useEffect(() => {
    
    // First create an array of project_id's of projects that this developer is already interesed in
    const DevsId = localStorage.getItem("userId");
    FetchRolesByDevId(DevsId).then((data) => {
      const filteredArray = data.filter((entry) => entry.role === 2);

      //Now build a simple array of project id's to exclude
      const projectIdArray = filteredArray.map(
        (entry) => entry.projects.project_id
      );

      // Then fetch all projects with a status of 6 (available) and filter out those
      // that this developer has already expredded interest in i.e.already exist in the projectIdArray
      FetchProjectsByStatus(6).then((data) => {
        const filteredProjects = data.filter(
          (entry) => !projectIdArray.includes(entry.project_id)
        );
        setAvailableProjects(filteredProjects);
      });
     
    });
  }, []);

  // This function is used to register a developers interest in an available project by:
  // - inserting a users_of_roles table instance to link the developer to the project
  // - calling setAvailableProjects to update State by removing the project added from the list

  function regInterestInProject(project_id) {
    //Get the developers id from internal storage
    const DevsId = localStorage.getItem("userId");

    // Show that the developer has registered interest by inserting a new roles_of_users with role 2,
    // and then re-Fetch the Interesed projects to pick up this new project
    InsertRolesOfUsers(DevsId, project_id, 2).then(() =>
    FetchRolesByDevId(DevsId).then((data) =>
     setInterestedProjects(
       data.filter((interestedProject) => interestedProject.role == 2)
     )
   ));
   // Remove this project from the available projects list
      setAvailableProjects((prevArray) =>
        prevArray.filter((obj) => obj.project_id !== project_id)
      )
   
    return;
  }

  return (
    <>
      <div className="section flex flex-col justify-top items-left rounded-lg p-2 m-2  lg:auto lg:mt-4">
        <h1 className="leading-snug text-lg font-bold lg:text-2xl lg:max-w-3xl lg:leading-snug">
          <span className="bg-emerald-400 py-1 px-2 rounded-md lg:mt-2">
            Active Projects you are working with
          </span>
        </h1>

        <span className="border-b border-black w-11/12 my-3"></span>
        <ol>
          {activeProjects.map((activeProject) => {
            return (
              <DevelopersActiveProject
                key={activeProject.projects.project_id}
                project={activeProject.projects}
              />
            );
          })}
        </ol>
      </div>
      <div className="section flex flex-col justify-top items-left rounded-lg p-2 mx-2 h-auto mt-4">
        <h1 className="mt-10 leading-snug text-lg font-bold lg:text-2xl lg:max-w-3xl lg:leading-snug">
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Projects you have registered interest in joining
          </span>
        </h1>
        <span className="border-b border-black w-11/12 my-3"></span>
        <ol>
          {interestedProjects.map((interestedProject) => {
            return (
              <DevelopersInterestedProject
                key={interestedProject.projects.project_id}
                project={interestedProject.projects}
              />
            );
          })}
        </ol>
      </div>

      <div className="lg:overflow-auto lg:grid section flex flex-col justify-top items-left rounded-lg p-2 m-2 lg:h-auto mt-4">
        <h1 className="mt-10 leading-snug text-lg font-bold lg:text-2xl lg:max-w-3xl lg:leading-snug">
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Projects that you can register your interest in
          </span>
        </h1>
        <span className="border-b border-black w-11/12 lg:mb-3 my-3"></span>
        <ol>
          {availableProjects.map((availableProject) => {
            return (
              <DevelopersAvailableProject
                key={availableProject.project_id}
                project={availableProject}
                regInterestInProjectFunc={regInterestInProject}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}
