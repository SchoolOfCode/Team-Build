import Navbar from "@/components/navbar";
import FetchProjectById from "@/db-components/FetchProjectById";

export default async function ProjectInfofromDash ({ params }) {
  console.log("voting params", params)
  const currProjectArrray = await FetchProjectById(params.projectinfo);
  const currProject = currProjectArrray[0];


  return (
    <div>
      <Navbar />
      <h1>Project Information</h1>
      <h2>{currProject.title}</h2>
      <p>{currProject.long_desc}</p>
      <p>{currProject.link_to_video}</p>
    </div>
  );
}
