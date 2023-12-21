import DisplayProjectInfo from "@/components/DisplayProjectInfo";

export default function ProjectInfo({ params }) {
  return (
    <>

    <div className="lg:overflow-auto lg:mt-[10px] text-left lg:m-auto lg:h-screen lg:bg-slate-50 lg:flex lg:flex-col lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <DisplayProjectInfo project_id={params.project_id} />
    </div>
    <p>
      hey this does work
    </p>
    </>
  );
}
