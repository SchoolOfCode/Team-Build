import { supabase } from "../../supabase.js";

//Fetch the main_user with the email passed in as a parameter
export default async function FetchUserByEmail(email) {
    try {
        const { data, error } = await supabase.from("main_users").select().eq("email", email);  
        if (error) {
        console.log("error", error);
        return null;
      } else {
        console.log(data)
      return data;
    
      }
    } catch (error) {
      console.log("Failed to fetch user");
      return;
    }
  }
