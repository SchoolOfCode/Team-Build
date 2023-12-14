import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col mr-5">
      <section className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-10">
          <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
            About{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">Us</span>
          </h1>

          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom lg:w-4/5">
            <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
              Empowering People, Changing Tech, Doing Good Tech for Good is on a
              mission to empower those entering the tech world, make tech a more
              inclusive place, and do good things for charities. We want to show
              that tech is open to everyone. Our mission is to change how people
              see tech jobs, make learning tech enjoyable, and contribute to
              positive changes that make the world a bit better.
            </p>
          </div>
          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom lg:w-4/5">
            <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
              Our Vision Tech that Brings Us Together, for a Better Tomorrow
              Tech for Good dreams of a world where technology is for everyone,
              bringing us closer together. We aim to break down barriers, not
              just in jobs but in how everyone can be a part of the tech world.
              Picture a future where technology reflects the stories of all of
              us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}