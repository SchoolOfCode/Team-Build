import DisplayProjectInfo from "@/components/DisplayProjectInfo";

export default function ProjectInfo({ params }) {
  console.log("in Page", params);

  return (
    <div>
      <DisplayProjectInfo project_id={params.project_id} />
    </div>
  );
}
