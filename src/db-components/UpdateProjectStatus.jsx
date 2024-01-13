import { supabase } from "../../supabase.js";

// This function takes in deveopers id, project id and score as parameters
//  It inserts a new instance of vote.

export default async function UpdateProjectStatus( project_id, newStatus ) {
  
    console.log(project_id, newStatus);
   try {
    const { error } = await supabase.from("projects")
    .update({ status: newStatus })
    .eq("project_id", project_id);

    if (error) {
      console.log("error", error);
      return null;
    } else {
      return;
    }
  } catch (error) {
    console.log(`Failed to update project status for project ${project_id}`);
    return;
  }
}
