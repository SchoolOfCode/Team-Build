import { supabase } from "../../supabase.js";

//Fetch the charity user associated to a project using the project id passed in
export default async function FetchCharityUserPrefById(id) {
    
   try {
      const { data, error } = await supabase.from('charity_user_pref').select().eq('id', id );
     
      if (error) {
      console.log("error", error);
      return null;
    } else {
        const charityId = data[0].id;
        return charityId;
    } 
  } catch (error) {
    console.log(`Failed to fetch charities user pref for id ${id}`);
    return;
  }
}