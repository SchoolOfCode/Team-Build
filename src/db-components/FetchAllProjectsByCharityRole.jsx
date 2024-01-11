import { supabase } from "../../supabase.js";

//Fetch all projects with the status code  & Developers Id passed in as a parameter
export default async function FetchAllProjectsUsingCharityRole() {
   try {
      const { data, error } = await supabase.from('roles_of_users').select('role, id, projects ( project_id, title, status )').eq("role", "1");
     
      if (error) {
      console.log("error", error);
      return null;
    } else {
        console.log(data);
            return data;
    }
  } catch (error) {
    console.log("Failed to fetch developers user roles");
    return;
  }
}