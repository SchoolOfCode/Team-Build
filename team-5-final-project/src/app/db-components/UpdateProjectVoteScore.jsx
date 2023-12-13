import { supabase } from "../../../supabase.js";

// This function updates the total_score of the instance of the projects table
// using the project_id and score to be added that is input

export default async function UpdateProjectVoteScore({project_id, total_score, score}) {

  console.log(project_id, total_score, score);
  // Update the total_score
total_score = total_score + score;
console.log(total_score);

  // Update the instance of the projects table on the database
  try {
        const { error } = await supabase
      .from("projects")
      .update({ total_score: total_score })
      .eq("project_id", project_id);

    if (error) {
      console.log("error", error);
      return null;
    } else {
      return;
    }
  } catch {
    console.log("Failed to update projects");
    return;
  }
};
