import {v4 as uuidv4} from "uuid";
import {supabase} from "../../../supabase.js";

async function resetDB(){


//sample READ all - read all data from the recipes table. Returns an array of objects
// const { data: result2, error2 } = await supabase.from("recipes").select();
// const display2 = result2[0];


//sample INSEET - updates the name field in the recipes table with the new value 'Rice K'. ONLY returns an error
const {  error3 } = await supabase.from("charity_user_pref").insert({id: uuidv4(), first_name: 'David', surname: 'Dixon', contact_number: 676534251, org_name: 'our first charity', charity_reg_no: 7656435, t_and_c: 'true'});

}
await resetDB();