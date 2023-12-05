import Navbar from "@/app/components/navbar/navbar";
import "../../globals.css";
import Link from "next/link";

export default function DeveloperRegister() {
  return (
    <div>
      <Navbar />
      <h1>Developer Register</h1>
      <button className="button">
        <Link href="/">Submit</Link>
      </button>
    </div>
  );
}
