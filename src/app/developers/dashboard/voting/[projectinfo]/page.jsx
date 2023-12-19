import DisplayProjectInfo from "@/components/DisplayProjectInfo";

export default function ProjectInfo({ params }) {
  return (
    <div>
      <DisplayProjectInfo project_id={params.project_id} />
    </div>
  );
}
