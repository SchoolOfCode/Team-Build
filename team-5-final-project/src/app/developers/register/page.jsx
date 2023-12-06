import Navbar from "@/app/components/navbar";
import "../../globals.css";
import Link from "next/link";
import DeveloperRegistration from "@/app/components/developerRegistration";

export default function DeveloperRegister() {
  return (
    <div>
      <Navbar />
      {/* <h1>Developer Register</h1> */}
      <button className="button">
        <Link href="/">Back to Home</Link>
        <DeveloperRegistration />
      </button>
    </div>
  );
}
