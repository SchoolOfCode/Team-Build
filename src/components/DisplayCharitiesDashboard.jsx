"use client"
import React, { useState, useEffect } from "react";
import FetchRolesByDevId from "@/db-components/FetchRolesByDevId";
import DevelopersActiveProject from "./DevelopersActiveProject";



export default function DisplayCharitiesDashboard() {
    const [availableCProjects, setAvailableCProjects] = useState([]);
    const [pitches, setpitches] = useState([]);
    const [activeProjects, setActiveProjects] = useState([]);

  useEffect(() => {   
        const ctyId = "7ad1e3cc-fbd5-4c30-9afb-cbad1de655b6";
        FetchRolesByDevId(ctyId)
        .then((data) => setAvailableCProjects(data.filter((activeProject) => activeProject.role == 2)));
      }, []);
    

    return (
<p>hello</p>
    )}