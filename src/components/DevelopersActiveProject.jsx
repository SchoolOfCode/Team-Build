

export default function  DevelopersActiveProject({project}) {

   // Return the line item for the developers active project
   return (
     <li>
      <p>{project.title}</p>
      <p>{project.short_desc}</p>
      </li>
   );
}