import { supabase } from "../../../supabase.js";

export default async function DisplayProjectsForVoting() {
try {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq('status', 3);
    
  if (error) {
    console.log(error);
    return;
  } else{
    console.log(data);
    return (
        <h1>Display of projects to vote for</h1>
    );
  }
} catch (error) {
  console.log("Failed to fetch products");
  return;
}

};