import { supabase } from "../../../supabase.js";

// This function takes in deveopers id, project id and score as parameters
//  It inserts a new instance of vote.

export default async function InsertVote({ devsId, project_id, score }) {
  
  try {
    const { error } = await supabase.from("votes").insert({
      id: devsId,
      project_id: project_id,
      score: score,
    });

    if (error) {
      console.log("error", error);
      return null;
    } else {
      return;
    }
  } catch (error) {
    console.log(`Failed to insert vote for project ${project_id}`);
    return;
  }
}
