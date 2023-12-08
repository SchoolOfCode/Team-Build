// Design root:

background: #FFFFFF
Green: #66cb9d
Red: #F17063
Footer gray: #EEEEEE

Shapes in background gray: #F5F5F5

Font-colour: #131313

Header Font: Superclarendon
Sub-Header: Verdana Bold
Logo Font: Zen Dots

Desktop Div container: corner radius - 22

# Team-5-Final-Project

//Snippet of code to insert to the dev database when the submit registration button is pressed
import {v4 as uuidv4} from "uuid";
import {supabase} from "../../../supabase.js";

// Insert to the main_users table
const usersId = uuidv4();
try{
const { error } = await supabase.from('main_users').insert({id: usersId, email: 'developer4@email.com', type: 'DEV', password: 'verysecure'});
} catch (error) {console.log("Failed to add to main_users")
}

// Insert to the dev_user_pref table
try {
const { error2 } = await supabase.from('dev_user_pref').insert({id: usersId, first_name: 'David', surname: 'Dixon', contact_number: '0676534251', tech_background: 'I am a javascript developer', t_and_c: true, hours_range: 2, possible_mentor: false});
} catch (error) {console.log("Failed to add to dev_user_pref")
}

// end of snippet

//Snippet of code to insert to the charity database when the submit registration button is pressed
import {v4 as uuidv4} from "uuid";
import {supabase} from "../../../supabase.js";

// Insert to the main_users table
const usersId = uuidv4();
try{
const { error } = await supabase.from('main_users').insert({id: usersId, email: 'charity@email.com', type: 'CTY', password: 'verysecure'});
} catch (error) {console.log("Failed to add to main_users")
}

// Insert to charity_user_pref
try {
const { error2 } = await supabase.from('charity_user_pref').insert({id: usersId, first_name: 'David', surname: 'Dixon', contact_number: '0676534251', org_name: 'Good charity', charity_reg_no: '3627486', t_and_c: true});
} catch (error) {console.log("Failed to add to charity_user_pref")
}

// end of snippet

//Snippet of code to insert to the project database when the submit registration button is pressed
import {v4 as uuidv4} from "uuid";
import {supabase} from "../../../supabase.js";

// Insert to the projects table
const projectId = uuidv4();
try{
const { error } = await supabase.from('projects').insert({project_id: projectId, status: 1, title: 'charity proj', short_desc: 'really great project simple website save the world', long_desc: 'really really great project super simple website save the world. great', link_to_video: 'great vid'});
} catch (error) {console.log("Failed to add to projects")
}

// Insert to roles_of_users
try {
const { error2 } = await supabase.from('roles_of_users').insert({id: '169adbae-cb11-4c74-aa55-99c6c8c559df', project_id: projectId, role: 1});
} catch (error) {console.log("Failed to add to roles_of_users")
}

// end of snippet
