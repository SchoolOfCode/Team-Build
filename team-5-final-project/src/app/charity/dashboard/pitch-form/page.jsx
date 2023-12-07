import Navbar from "@/app/components/navbar";
import PitchForm from "@/app/components/pitchForm";

export default function PitchRegistration() {
  return (
    <div>
      <Navbar />
      <h2 className="subTitle text-center text-4xl font-bold p-2 bg-emerald-300">
        Your Pitch Form
      </h2>
      <PitchForm />
    </div>
  );
}
