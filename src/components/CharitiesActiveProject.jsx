import translateStatusToWord from "./translateProjectStatus";
import Link from "next/link";

export default function CharitiesActiveProject({ project }) {
    
    // Return the line item for the charities active project
    return (
      <li className="lg:grid lg:grid-cols-6 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4">
       <Link key={project.project_id} href={`dashboard/${project.project_id}`}>
        <h1 className="col-span-2">{project.title}</h1>
        </Link>
        <p className="col-span-3 flex flex-wrap">{project.short_desc}</p>
        <p status="col-span-3 flex flex-wrap">{translateStatusToWord(project.status)}</p>
        </li>
    );
  }