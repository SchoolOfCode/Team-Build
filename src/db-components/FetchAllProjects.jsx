import { supabase } from "../../supabase.js";

//Fetch all projects 
export default async function FetchAllProjects(includeArchived) {
  let archiveStatusToExclude = 99;

  console.log(includeArchived)
  console.log(archiveStatusToExclude) ;
  
 if (includeArchived == true) {
  archiveStatusToExclude = 100}
  else {
    archiveStatusToExclude = 99};

  
  try {
    const { data, error } = await supabase
      .from("projects")
      .select()
      .neq('status', archiveStatusToExclude)
      .order('status',{ascending: true});
     

    if (error) {
      console.log("error", error);
      return null;
    } else {
      console.log(data)
      return data;
    }
  } catch (error) {
    console.log("Failed to fetch all projects");
    return;
  }
}