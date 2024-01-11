import { supabase } from "../../supabase.js";

//Fetch all projects 
export default async function FetchAllProjects() {
  
  try {
    const { data, error } = await supabase
      .from("projects")
      .select();

    if (error) {
      console.log("error", error);
      return null;
    } else {
      return data;
    }
  } catch (error) {
    console.log("Failed to fetch all projects");
    return;
  }
}