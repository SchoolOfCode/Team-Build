import Link from "next/link";

// Return the line item for the developers active project.
export default function AllProjects({
  project,
  regInterestInProjectFunc,
}) {
  //This function fires off the code for the developer to register their interest in an available project.
  function handleClick() {
    return regInterestInProjectFunc(project.project_id);
  }

  return (
    <li className="lg:grid lg:grid-cols-7 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4 pr-5">
      <p className="col-span-1 font-bold pt-1">chk box</p>
      <p className="col-span-2 font-bold pt-1">{project.project_id}</p>
      <p className="col-span-2 font-bold pt-1">{project.title}</p>
      <p className="col-span-1 flex flex-wrap mr-5 lg:ml-6">{project.status}</p>{" "}
      <span className="col-span-1 grid gap-3 mt-4">
        <button
          className="button border-4 border-emerald-500 lg:w-64 lg:h-10 w-44 h-18 text-md text-center text-black font-bold justify-self-end"
          onClick={handleClick}
        >
          Action
        </button>
      </span>
    </li>
  );
}