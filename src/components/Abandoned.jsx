"use client";
import FetchRolesByDevId from "@/db-components/FetchRolesByDevId";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";
import DevelopersActiveProject from "./DevelopersActiveProject";
import DevelopersAvailableProjectsList from "./DevelopersAvailableProjectsList";
import InsertUsersOfRoles from "@/db-components/InsertRolesOfUsers";
import React, { useState, useEffect } from "react";

  
// Go to fetch all the roles_of_users that are linked to this developer by their ID
export default async function  DisplayDevelopersDashboard() {

   // set State on availableProjects array & interestedProjects array as these can change
  // if the developer presses the I am interested button

 const [availableProjects, setAvailableProjects] = useState("");
 const [interestedProjects, setInterestedProjects] = useState("");


 useEffect(() => {
//Those that  that are now Accepted in Principle to become projects (status of 6) 
 const data = FetchProjectsByStatus(6)
.then((availableProjects) => setAvailableProjects((data)))},[]);
console.log(availableProjects);

useEffect(() => {
  // Fetch initial data - all the users_of_roles instances for this developer
  const DevsId = "bd688fda-9486-4c46-9651-89afb301fe91"
 const data = FetchRolesByDevId(DevsId)
 .then((interestedProjects) => setInterestedProjects((data)))},[]);
 console.log("here1",interestedProjects);

 // Loop over the array of roles for this developer that have been returned from the database
  // and filter the array for:
  // 1. Active projects (those with a role of '4'), and also
  const activeProjects = rolesArray.filter((activeProject) => activeProject.role == 4);
  console.log("here2", activeProjects);

  // 2. Those that they've shown interest in (with a role of '2')
  const interestedProjectsArray = rolesArray.filter((interestedProject) => interestedProject.role == 2);
  console.log("here3", interestedProjectsArray);




 
  
   
// This function is used to register a developers interest in an available project by:
// - inserting a users_of_roles table instance to link the developer to the project
// - calling setAvailableProjects to update State 

  function regInterestInProject(project_id){
    const DevsId = "bd688fda-9486-4c46-9651-89afb301fe91"
 
  // Create a roles_of_users instance that links this Project to this Developer
  // with a role of 2 (which means interested)
 InsertRolesOfUsers(DevsId, project_id, 2);

  setAvailableProjects((prevArray) => ({
    ...prevArray.filter((obj) => obj.project_id !== project_id)}));

  
  setInterestedProjects((prevArray) => ({
  ...prevArray.filter((obj) => obj.project_id !== project_id)}));



 };


return (<>
<div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">
          Your Current Projects
        </h2>
        <ol>
        {activeProjects.map((activeProject) => {
          return <DevelopersActiveProject key={activeProject.id}  project={activeProject.projects} />;
        })}
        </ol>
      </div>
      <div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">Projects you are interested In</h2>
        <ol>
        {interestedProjects.map((interestedProject) => {
          return <DevelopersInterestedProject key={interestedProject.id}  project={interestedProject.projects} />;
        })}
        </ol>
      </div> 
      <div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">Available Projects</h2>
        <DevelopersAvailableProjectsList project={availableProjects} regInterestInProjectFunc={regInterestInProject} />;
      </div>
      </>
);
}