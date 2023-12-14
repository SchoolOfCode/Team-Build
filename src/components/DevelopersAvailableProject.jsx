// Return the line item for the developers active project
export default function  DevelopersAvailableProject({project, regInterestInProjectFunc}) {

   function handleClick() {
      return regInterestInProjectFunc(project.project_id);
    }
   
       return (
         <li>
          <p>{project.title}</p>
          <button onClick={handleClick}>I am interested</button> 
          </li>
       );
    }