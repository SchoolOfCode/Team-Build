import { supabase } from "../../supabase.js";

//Fetch all projects 
export default async function FetchCharityNameById(id) {
  
  try {
    const { data, error } = await supabase
      .from("charity_user_pref")
      .select("org_name")
      .eq("id", id);

   
    if (error) {
      console.log("error", error);
      return null;
    } else {
        const charityName = data[0].org_name
      return charityName;
    }
  } catch (error) {
    console.log("Failed to fetch charity name from charity_user_pref", error);
    return;
  }
}