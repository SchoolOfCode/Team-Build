import Navbar from "../components/navbar";

// import {v4 as uuidv4} from "uuid";
// import {supabase} from "../../../supabase.js";
// // console.log(supabase);

// //sample INSEET - updates the name field in the recipes table with the new value 'Rice K'. ONLY returns an error
// console.log("hello");
// //const {  error3 } = await supabase.from('charity_user_pref').insert({id: 'bd688fda-9486-4c46-9651-89afb301fe91', first_name: 'David', surname: 'Dixon', contact_number: '0676534251', org_name: 'our first charity', charity_reg_no: '7656435', t_and_c: true});
  

// //sample READ all - read all data from the recipes table. Returns an array of objects
// const { data: result2, error2 } = await supabase.from('roles_of_users').select();
// console.log(result2);
// console.log(error2);
// const display2 = result2[0];

//Snippet of code to insert to the database when the submit registration button is pressed
import {v4 as uuidv4} from "uuid";
import {supabase} from "../../../supabase.js";

// Insert to the main_users table
const usersId = uuidv4();
try{
const {  error } = await supabase.from('main_users').insert({id: usersId, email: 'developer4@email.com', type: 'DEV'});
} catch (error) {console.log(error.message, error.code)
}

// Insert to the dev_user_pref table
const {  error2 } = await supabase.from('dev_user_pref').insert({id: usersId, first_name: 'David', surname: 'Dixon', contact_number: '0676534251', tech_background: 'I am a javascript developer', t_and_c: true, hours_range: 2, possible_mentor: false});

// end of snippet




export default function About() {
 
  return (
    <div>
      <Navbar />
      <h1>About Us Landing Page</h1>
      {/* <p>{display2.surname}</p> */}
    </div>
  );
}
