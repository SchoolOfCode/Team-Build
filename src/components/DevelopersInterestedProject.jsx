import Link from "next/link";

export default function DevelopersInterestedProject({ project }) {

  // Return the line item for the developers interested projects list
  return (
    <li className="lg:grid lg:grid-cols-6 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4">
      <Link key={project.project_id} href={`dashboard/${project.project_id}`}>
      <h1 className="col-span-2">{project.title}</h1>
      </Link>
      <p className="col-span-3 flex flex-wrap">{project.short_desc}</p>
      </li>
  );
}
