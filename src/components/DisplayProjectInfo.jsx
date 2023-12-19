"use client";
import FetchProjectById from "@/db-components/FetchProjectById";
import { useState, useEffect } from "react";
//import Link from "next/link";


export default function DisplayProjectInfo(project_id) {

  const [project, setProject] = useState([]);


    useEffect(() => {
    FetchProjectById(project_id).then((data) => setProject(data[0]));
  }, []);

 
  return (
    <>
      <div className="flex flex-col mr-5">
        <section className="flex-grow">
          {/* Organisation Name */}
          <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-10">
            <h1 className="mt-5 leading-snug text-5xl font-bold lg:text-5xl lg:max-w-3xl lg:leading-snug ">
              {project.title}
            </h1>

            {/* short description */}
            <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom">
              <p className="text-md lg:text-lg mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed font-style: italic ml-3">
                {project.short_desc}
              </p>

              <p className="font-bold ml-6">
                <a href={project.link_to_video}>Click here for pitch video!</a>
              </p>
            </div>

            {/* long description */}
            <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom ">
              <p className="text-md lg:text-lg mb-10 lg:leading-relaxed">
                {project.long_desc}
              </p>
            </div>
            {/* <button
              onClick={() => router.back()} 
              className="button border-4 lg:text-red-400 text-black-400 border-red-400 font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-lg lg:mt-4 m-2"
            >Go Back</button> */}
          </div>
        </section>
      </div>
    </>
  );
}
