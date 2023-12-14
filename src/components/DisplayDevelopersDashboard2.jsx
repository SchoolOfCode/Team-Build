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
    const DevsId = "bd688fda-9486-4c46-9651-89afb301fe91";
    FetchRolesByDevId(DevsId).then((data) =>
      setActiveProjects(data.filter((activeProject) => activeProject.role == 4))
    );
  }, []);

  // Display the initial list of projects that this developer has already registered interest in
  // These are projects that have a roles_of_users instance for this developer  with a role of "interested" (value 2)
  useEffect(() => {
    const DevsId = "bd688fda-9486-4c46-9651-89afb301fe91";
    FetchRolesByDevId(DevsId).then((data) =>
      setInterestedProjects(
        data.filter((interestedProject) => interestedProject.role == 2)
      )
    );
  }, []);

  // Display the initial list of projects that are "available" for the developer to register interest in
  // Thare projects that have a status of "Accepted in Principle" to become projects (status of 6)
  useEffect(() => {
    FetchProjectsByStatus(6).then((data) => setAvailableProjects(data));
  }, []);

  // This function is used to register a developers interest in an available project by:
  // - inserting a users_of_roles table instance to link the developer to the project
  // - calling setAvailableProjects to update State

  function regInterestInProject(project_id) {
    const DevsId = "bd688fda-9486-4c46-9651-89afb301fe91";

    InsertRolesOfUsers(DevsId, project_id, 2);

    setAvailableProjects((prevArray) =>
      prevArray.filter((obj) => obj.project_id !== project_id)
    );

    console.log("here");
    FetchRolesByDevId(DevsId).then((data) =>
      setInterestedProjects(
        data.filter((interestedProject) => interestedProject.role == 2)
      )
    );
    return;
  }

  return (
    <>
      <div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">
          Your Current Projects
        </h2>
        <ol>
          {activeProjects.map((activeProject) => {
            return (
              <DevelopersActiveProject
                key={activeProject.id}
                project={activeProject.projects}
              />
            );
          })}
        </ol>
      </div>
      <div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">
          Projects you are interested In
        </h2>
        <ol>
          {interestedProjects.map((interestedProject) => {
            return (
              <DevelopersInterestedProject
                key={interestedProject.id}
                project={interestedProject.projects}
              />
            );
          })}
        </ol>
      </div>
      <div className="section flex flex-col justify-start items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
        <h2 className="subTitle text-2xl font-bold p-2">Available Projects</h2>
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
