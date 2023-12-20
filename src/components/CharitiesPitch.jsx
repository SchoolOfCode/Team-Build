import translateStatusToWord from "./translateProjectStatus";
import Link from "next/link";

export default function CharitiesPitch({ project }) {
  // Return the line item for the charities pitches that ae not yet projects
  return (
    <li className="lg:grid lg:grid-cols-6 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4">
      <Link key={project.project_id} href={`dashboard/${project.project_id}`}>
        <h1 className="col-span-2 font-bold">{project.title}</h1>
      </Link>
      <p className="ml-4 col-span-4 mr-5 flex flex-wrap">
        {project.short_desc}
      </p>{" "}
      <p status="col-span-1 col-start-5flex flex-wrap text-right">
        {translateStatusToWord(project.status)}
      </p>
    </li>
  );
}
