import { supabase } from "../../supabase.js";

//Fetch the charity user associated to a project using the project id passed in
export default async function FetchCharityUserRoleByProjectId(project_id) {
    
    // const charityData = [{
    //     charityId: "",
    //     charityName: ""}];
    //     console.log(charityData);
    
   try {
      const { data, error } = await supabase.from('roles_of_users').select('id, main_users(charity_user_pref( org_name))').eq("project_id", project_id).filter('role', 'eq', 1);
     
      if (error) {
      console.log("error", error);
      return null;
    } else {
        console.log(data)
        //const charityId = data[0].id;
        // charityData[0].charityName = data[0].main_users.charity_user_pref.org_name;
        // console.log(charityData);
        const charityName = data[0].main_users.charity_user_pref.org_name;
        // console.log(charityId, charityName);
        // const charityData = charityId.concat(charityName);
        // console.log (charityData);
        return charityName;
    }
  } catch (error) {
    console.log(`Failed to fetch charities user role for project ${project_id}`);
    return;
  }
}