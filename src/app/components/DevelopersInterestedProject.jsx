
// Return the line item for the developers interested projects list
export default async function  DevelopersInterestedProject({project}) {

    return (
      <li>
       <p>{project.title}</p>
       </li>
    );
 }