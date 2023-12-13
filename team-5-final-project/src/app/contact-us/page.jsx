import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <h2 className="subTitle text-center text-4xl font-bold p-2 bg-emerald-300">
        Contact us
      </h2>
      <div className="section py-5 flex flex-col justify-center items-center border border-black rounded-lg p-2 m-2 bg-amber-50">
        <p className="text-lg mx-4">
          Let's connect! Whether it's for collaboration or just staying in the
          loop, we're here for it. Fill out the form below, and let's make
          things happen!
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
