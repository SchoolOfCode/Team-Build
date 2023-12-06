import Navbar from "../components/navbar";

export default function About() {
 
  return (
    <section>
      <Navbar />
      <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
        <h2 className="subTitle text-center text-2xl font-bold p-2 bg-emerald-300">
          About us
        </h2>
      </div>
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <h2 className="subTitle text-2xl font-bold p-2">Our Vision</h2>
        <p>Tech that Brings Us Together, for a Better Tomorrow</p>
        <br />
        <p>
          Tech for Good dreams of a world where technology is for everyone,
          bringing us closer together. We aim to break down barriers, not just
          in jobs but in how everyone can be a part of the tech world. Picture a
          future where technology reflects the stories of all of us.
        </p>
      </div>
      <div className="section flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-yellow-100">
        <h2 className="subTitle text-2xl font-bold p-2">Our Mission</h2>
        <p>Empowering People, Changing Tech, Doing Good</p>
        <br />
        <p>
          Tech for Good is on a mission to empower those entering the tech
          world, make tech a more inclusive place, and do good things for
          charities. We want to show that tech is open to everyone. Our mission
          is to change how people see tech jobs, make learning tech enjoyable,
          and contribute to positive changes that make the world a bit better.
        </p>
      </div>
    </section>
  );
}
