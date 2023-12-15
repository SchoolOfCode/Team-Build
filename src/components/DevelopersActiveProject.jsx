export default function DevelopersActiveProject({ project }) {
  // Return the line item for the developers active project
  return (
    <li className="grid grid-cols-3">
      <h1>{project.title}</h1>
      <p>{project.short_desc}</p>
      <button>Details</button>
      <span className="border-b border-black"></span>
    </li>
  );
}
