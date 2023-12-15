
// Return the line item for the developers interested projects list
export default function  DevelopersInterestedProject({project}) {

    return (
      <li>
       <p>{project.title}</p>
       <p>{project.short_desc}</p>
       </li>
    );
 }