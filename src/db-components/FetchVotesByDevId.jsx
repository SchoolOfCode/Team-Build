import { supabase } from "../../supabase.js";

//Fetch the votes with the developers id passed in as a parameter
export default async function FetchVotesByDevId(devsId) {
    try {
        const { data, error } = await supabase.from("votes").select().eq("id", devsId);  
        if (error) {
        console.log("error", error);
        return null;
      } else {
        console.log(data)
      return data;
    
      }
    } catch (error) {
      console.log("Failed to fetch votes");
      return;
    }
  }