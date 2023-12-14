"use client"
import React, { useState, useEffect } from "react";
import FetchRolesByDevId from "@/db-components/FetchRolesByDevId";
import DevelopersActiveProject from "./DevelopersActiveProject";
import FetchProjectsByStatus from "@/db-components/FetchProjectsByStatus";



export default function DisplayCharitiesDashboard() {
    const [PitchedProjects, setPitchedProjects] = useState([]);
    const [availableProjects, setAvailableProjects] = useState([]);

    useEffect(() => {   
        const ctyId = "7ad1e3cc-fbd5-4c30-9afb-cbad1de655b6";
        FetchRolesByDevId(ctyId)
        .then((data) => setPitchedProjects(data.filter((project) => project.role === 1)));
    }, []);


    

    return (
        <div className="section flex flex-col justify-top items-center border border-black rounded-lg p-2 m-2 bg-yellow-100 h-40 mt-7">
            <h2 className="subTitle text-2xl font-bold p-2">
              Your Current Projects
            </h2>
            <ol>
                {PitchedProjects.map((activeProject) => (
                    <DevelopersActiveProject key={activeProject.id} project={activeProject.projects} />
                ))}
            </ol>
        </div>
    );
}