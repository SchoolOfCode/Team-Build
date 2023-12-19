import Link from "next/link";

export default function HowVotingWorks() {
  return (
    <section>
      <div className="lg:lg:overflow-auto lg:mt-[10px] text-left lg:m-auto lg:h-[8/12] lg:bg-slate-50 lg:flex lg:justify-center lg:flex-col lg:align-middle lg:text-xl lg:w-10/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-20">
          <h1 className="mt-10 leading-snug text-4xl font-bold lg:text-6xl lg:max-w-3xl lg:leading-snug">
            How does Voting{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
              Works
            </span>
          </h1>
          <ol className="p-2">
            <li className="">
              <p>
                1. Browse Projects: Explore the list of inspiring projects
                dedicated to charitable causes.
              </p>
            </li>
            <li className="p-2">
              <p>
                2. Express Your Preference: - Double Thumbs Up: Strongly support
                your favourite project. - Thumb Up: Show approval for projects
                you like. - Thumbs Down: Indicate disinterest in certain
                projects.
              </p>
            </li>
            <li className="p-2">
              <p>
                3. Vote Responsibly: Your votes shape project priorities. Vote
                for the projects that truly resonate with you.
              </p>
            </li>

            <li className="p-2">
              <p>
                4. The Power of Community: The project with the most likes gets
                priority. Your voice matters in creating positive change!
              </p>
            </li>
          </ol>
          <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2 mb-10">
            <Link href={"../dashboard"}>Return to Dashboard</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
