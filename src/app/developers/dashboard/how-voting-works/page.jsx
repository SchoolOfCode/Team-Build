import Link from "next/link";

export default function HowVotingWorks() {
  return (
    <section>
      <Navbar />
      <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
        <h2 className="subTitle text-center text-2xl font-bold p-2 bg-emerald-300">
          How to vote
        </h2>
      </div>
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <h2 className="text-xl font-bold">
          Here's a quick guide on how to cast your vote:
        </h2>
        <ol className="p-4">
          <li className="p-2">
            <p>
              1. Browse Projects: Explore the list of inspiring projects
              dedicated to charitable causes.
            </p>
          </li>
          <li className="p-2">
            <p>
              2. Express Your Preference: - Double Thumbs Up: Strongly support
              your favourite project. - Thumb Up: Show approval for projects you
              like. - Thumbs Down: Indicate disinterest in certain projects.
            </p>
          </li>
          <li className="p-2">
            <p>
              3. Vote Responsibly: Your votes shape project priorities. Vote for
              the projects that truly resonate with you.
            </p>
          </li>

          <li className="p-2">
            <p>
              4. The Power of Community: The project with the most likes gets
              priority. Your voice matters in creating positive change!
            </p>
          </li>
        </ol>
        <button className="button m-3">
          <Link href={"../dashboard"}>Return to Dashboard</Link>
        </button>
      </div>
    </section>
  );
}
