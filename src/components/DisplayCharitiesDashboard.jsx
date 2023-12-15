"use client"
import React, { useState, useEffect } from "react";
import FetchRolesByDevId from "@/db-components/FetchRolesByDevId";
import CharitiesActiveProject from "./CharitiesActiveProject";
import CharitiesPitch from "./CharitiesPitch";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";



export default function DisplayCharitiesDashboard() {
    const [allProjects, setAllProjects] = useState([]);
    const [pitchedProjects, setPitchedProjects] = useState([]);
    const [activeProjects, setActiveProjects] = useState([]);

    useEffect(() => {   
        const ctyId = "7ad1e3cc-fbd5-4c30-9afb-cbad1de655b6";
        FetchRolesByDevId(ctyId).then((data) => setActiveProjects(data.filter((project) => project.projects.status == 7)));
        console.log(allProjects)
    }, []);

    useEffect(() => {   
        const ctyId = "7ad1e3cc-fbd5-4c30-9afb-cbad1de655b6";
        FetchRolesByDevId(ctyId).then((data) => setPitchedProjects(data.filter((project) => project.projects.status == 3)));
        console.log(allProjects)
    }, []);

    

    return (
        <>
          <div className="section flex flex-col justify-top items-left rounded-lg p-2 m-2  lg:h-40 mt-4">
            <h1 className="subTitle text-xl font-bold">Your Projects</h1>
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
    
          <div className="section flex flex-col justify-top items-left rounded-lg p-2 m-2  h-40 mt-4">
            <h1 className="subTitle text-xl font-bold">
              Your Pitches for a new Project
            </h1>
            <ol>
              {allProjects.map((allProject) => {
                return (
                  <CharitiesPitch
                    key={allProject.id}
                    project={allProject.projects}
                  />
                );
              })}
            </ol>
          </div>
        </>
      );
    }