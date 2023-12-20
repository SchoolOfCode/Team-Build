import Link from "next/link";

export default function DevelopersActiveProject({ project }) {
  // Return the line item for the developers active project

  return (
    <li className="lg:grid lg:grid-cols-6 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4">
      <Link key={project.project_id} href={`dashboard/${project.project_id}`}>
        <h1 className="col-span-2 font-bold pt-1">{project.title}</h1>
      </Link>
      <p className="col-span-4 flex flex-wrap lg:ml-6">{project.short_desc}</p>
    </li>
  );
}
