
export default function HowPitchingWorks() {
  return (
    <section>
      <Navbar />
      <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
        <h2 className="subTitle text-center text-2xl font-bold p-2 bg-emerald-300">
          How Pitch works
        </h2>
      </div>
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <p>
          Begin by creating a persuasive video pitch for your charity's project.
          Start by telling us what your charity does and why that is important.
          Problem Statement: Within the video, please do highlight the problem -
          you may want to connect this to real lives and communities affected by
          the problem. Project Overview: Please share in-depth information about
          your intended solution. Outline the innovative features, strategies,
          and methodologies that make your project unique and effective. This is
          your opportunity to showcase how your solution directly addresses the
          identified problem. Impact Metrics: Provide measurable metrics to
          quantify the potential impact of your project. Whether it's the number
          of lives improved, communities transformed, or any other relevant
          indicators, clear metrics enhance the credibility and appeal of your
          submission. Collaboration Framework: Clearly define how developers can
          contribute to your project. This ensures that developers understand
          how they can actively participate and contribute their expertise - if
          you want them to pitch in with ideas of how to improve your solution,
          let them know!
        </p>
      </div>
    </section>
  );
}
