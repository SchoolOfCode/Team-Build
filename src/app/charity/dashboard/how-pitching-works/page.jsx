import DeveloperDashboard from "@/app/developers/dashboard/page";
import Link from "next/link";

export default function HowPitchingWorks() {
  return (
    <section>
      <div className="lg:lg:overflow-auto lg:mt-[10px] text-left lg:m-auto lg:h-[8/12] lg:bg-slate-50 lg:flex lg:justify-center lg:flex-col lg:align-middle lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-20">
          <h1 className="mt-10 leading-snug text-4xl font-bold lg:text-6xl lg:max-w-3xl lg:leading-snug">
            How do I make a {" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Pitch?
            </span>
          </h1>
          <ol className="p-2 leading-relaxed">
           <li className="p-2">
            <p >
            We ask you to submit a pitch for your charity's project by filling in 
            the Pitch form, but we really recommend that you create a persuasive 
            video as well.
            </p>
           </li>
           <li className="p-2">
              <p>
            Start by telling us what your charity does and why that is important. 
            Remember that we work as a community platform, and as such it is our developers
            who will vote to work on the projects that they are most interested in. This Pitch
            is your opportunity to impress them and see your project voted up as a result!
            </p>
            </li>
            <li className="p-2">
              <p>
            Problem Statement: Within your pitch, highlight the problem 
            you are addressing. You may want to connect this to real lives and 
            communities affected.
            </p>
            </li>
            <li className="p-2">
              <p>
            Project Overview: Please share in-depth information about the project
            you would like us to build for you. Outline the innovative features, 
            strategies, and methodologies that make your project unique and effective.
            This is your opportunity to showcase how your solution directly addresses
            the identified problem, and helps those who will use it. 
            </p>
            </li>
            <li className="p-2">
<p>
            Collaboration Framework: Clearly define how developers can
            contribute to your project. This ensures that developers understand
            how they can actively participate and contribute their expertise -
            if you want them to pitch in with ideas of how to improve your
            solution, let them know!
</p>
</li>
<li className="p-2">
<p>
            
             
          </p>
          </li>
          </ol>
          <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2 mb-10">
            <Link href="../dashboard">Return to Dashboard</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
