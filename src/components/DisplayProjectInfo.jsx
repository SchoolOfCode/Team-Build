"use client";
import FetchProjectById from "@/db-components/FetchProjectById";
import { useState, useEffect } from "react";

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
            <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
              <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
                Name
              </span>
            </h1>

            {/* short description */}
            <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom lg:w-4/5">
              <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed font-style: italic">
                {project.short_desc}
              </p>
              <Link href="#">
                {" "}
                <p>{project.link_to_video}</p>
              </Link>
            </div>

            {/* long description */}
            <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom lg:w-4/5">
              <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
                {project.long_desc}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
