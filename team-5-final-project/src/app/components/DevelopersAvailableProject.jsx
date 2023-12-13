
// Return the line item for the developers active project
export default async function  DevelopersAvailableProject({project, regInterestInProjectFunc}) {

    return (
      <li>
       <p>{project.title}</p>
       <button onClick={regInterestInProjectFunc(project.project_id)}>I am interested</button>
       </li>
    );
 }