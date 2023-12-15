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
              Build is on a mission to empower charities, revolutionising how they harness technology. We're a platform that connects charities with a community of skilled developers.   
              
              
              ho want to use their skills to make the world a better place. 
              
              . We have a community of developers who want to use their skills to make the world a better place.
            </p>
          </div>
          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom lg:w-4/5">
            <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
            Our vision is simple yet powerful — we want to harness the power of technology to help charities. Build is committed to making tech accessible to all. Our focus is on fostering an inclusive tech community and leveraging technology for charitable causes. Picture a future where technology reflects the stories of all of us. Build is here to make that happen.
            
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}