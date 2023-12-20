import DeveloperDashboard from "@/app/developers/dashboard/page";
import Link from "next/link";

export default function HowPitchingWorks() {
  return (
    <section>
      <div className="lg:lg:overflow-auto lg:mt-[10px] text-left lg:m-auto lg:h-[8/12] lg:bg-slate-50 lg:flex lg:justify-center lg:flex-col lg:align-middle lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-20">
          <h1 className="mt-10 leading-snug text-4xl font-bold lg:text-6xl lg:max-w-3xl lg:leading-snug">
            How Pitch{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Works
            </span>
          </h1>
          <p className="mx-5">
            Begin by creating a persuasive video pitch for your charity's
            project. Start by telling us what your charity does and why that is
            important. Problem Statement: Within the video, please do highlight
            the problem - you may want to connect this to real lives and
            communities affected by the problem. Project Overview: Please share
            in-depth information about your intended solution. Outline the
            innovative features, strategies, and methodologies that make your
            project unique and effective. This is your opportunity to showcase
            how your solution directly addresses the identified problem. Impact
            Metrics: Provide measurable metrics to quantify the potential impact
            of your project. Whether it's the number of lives improved,
            communities transformed, or any other relevant indicators, clear
            metrics enhance the credibility and appeal of your submission.
            Collaboration Framework: Clearly define how developers can
            contribute to your project. This ensures that developers understand
            how they can actively participate and contribute their expertise -
            if you want them to pitch in with ideas of how to improve your
            solution, let them know!
          </p>
          <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2 mb-10">
            <Link href="">Return to Dashboard</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
