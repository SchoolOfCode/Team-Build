import { supabase } from "../../supabase.js";

//Fetch all projects with the status code passed in as a parameter
export default async function FetchProjectsByStatus(status) {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select()
      .eq("status", status);

      console.log(data);
      
    if (error) {
      console.log("error", error);
      return null;
    } else {
      return data;
    }
  } catch (error) {
    console.log("Failed to fetch projects");
    return;
  }
}
