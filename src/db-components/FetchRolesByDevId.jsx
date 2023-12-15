import { supabase } from "../../supabase.js";

//Fetch all projects with the status code  & Developers Id passed in as a parameter
export default async function FetchRolesByDevId(id) {
  console.log(id);
  try {
      const { data, error } = await supabase.from('roles_of_users').select('id, role, projects ( project_id, title, short_desc )').eq("id", id);
     if (error) {
      console.log("error", error);
      return null;
    } else {
      return data;
    }
  } catch (error) {
    console.log("Failed to fetch developers user roles");
    return;
  }
}