import translateStatusToWord from "./translateProjectStatus";
import determineActionByProjectStatus from "./determineActionByProjectStatus";
import determineNewStatus from "./determineNewStatus";
import Link from "next/link"; 

// Return the line item for the developers active project.
export default function AllProjects({
  project, updateStatusFunc, 
 }) {

  
 console.log(project)
//This function fires off the code when button 1 is clicked
function handleClick1() {
  console.log(updateStatusFunc, project.project_id)
  const newStatus = determineNewStatus(project.status, 1)
  return updateStatusFunc(project.project_id, newStatus);
}

//This function fires off the code when button 1 is clicked
function handleClick2() {
  console.log(updateStatusFunc, project.project_id)
  const newStatus = determineNewStatus(project.status, 2)
  return updateStatusFunc(project.project_id, newStatus);
}


  return (
    <li className="lg:grid lg:grid-cols-8 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4 pr-5">
      <input className="col-span-1 font-bold pt-1"
                type="checkbox"
                // onChange={handleChkBoxInput}
                // value={registration.possible_mentor}
      />
       {/* <Link key={project.charityId} href={`moderator/${project.charityId}`}> */}
      <p className="col-span-2 font-bold pt-1">{project.charityName}</p>
      {/* </Link> */}
      <Link key={project.project_id} href={`moderator/${project.project_id}`}>
       <p className="col-span-2 font-bold pt-1">{project.title}</p>
      </Link>
      <p className="col-span-1 flex flex-wrap mr-5 lg:ml-6">{translateStatusToWord(project.status)}</p>{" "}
      <span className="col-span-1 grid gap-3 mt-4">
        <button
          className="button border-4 border-emerald-500 lg:w-32 lg:h-10 w-44 h-18 text-md text-center text-black font-bold justify-self-end"
          onClick={handleClick1} >
          {determineActionByProjectStatus(project.status, 1)}
        </button>
      </span>
      <span className="col-span-1 grid gap-3 mt-4">
        <button
          className="button border-4 border-emerald-500 lg:w-32 lg:h-10 w-44 h-18 text-md text-center text-black font-bold justify-self-end"
          onClick={handleClick2} >
         {determineActionByProjectStatus(project.status, 2)}
        </button>
      </span>
    </li>
  );
}