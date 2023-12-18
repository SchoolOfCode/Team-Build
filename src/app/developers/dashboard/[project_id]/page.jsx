import Navbar from "@/components/navbar";
import DisplayProjectInfo from "@/components/DisplayProjectInfo";

export default function ProjectInfo({params}) {
  
  return (
    <div>
      <Navbar />
      <h1>Project Information</h1>
      <DisplayProjectInfo  project_id={params.project_id} />
        </div>
  );
}