import { supabase } from "../../supabase.js";

// This function takes in deveopers id, project id and role as parameters
//  It inserts a new instance of users_of_roles

export default async function InsertUsersOfRoles({ devsId, project_id, role }) {
  
  try {
    const { error } = await supabase.from("users_of_roles").insert({
      id: devsId,
      project_id: project_id,
      role: role,
    });

    if (error) {
      console.log("error", error);
      return null;
    } else {
      return;
    }
  } catch (error) {
    console.log(`Failed to insert users_of_roles for user ${id}`);
    return;
  }
}