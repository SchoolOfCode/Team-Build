"use client"
import FetchProjectById from "@/db-components/FetchProjectById";
import { useState, useEffect } from "react";

export default function DisplayProjectInfo( project_id ) {

  const [project, setProject] = useState([]);
    
  useEffect(() => {
      FetchProjectById(project_id).then((data) =>
      setProject(data[0]));         
  }, []);
    
  return (
    <>
      <p>{project.long_desc}</p>
      <p>{project.link_to_video}</p>
    </>
  );
}