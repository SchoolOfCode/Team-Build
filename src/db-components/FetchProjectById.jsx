import { supabase } from "../../supabase.js";

//Fetch all projects with the status code passed in as a parameter
export default async function FetchProjectById({ project_id }) {
  console.log(project_id);
  try {
    const { data, error } = await supabase
      .from("projects")
      .select()
      .eq("project_id", project_id);

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
