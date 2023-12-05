import Navbar from "../components/navbar/navbar";
import "../globals.css";
import Link from "next/link";

export default function Developers() {
  return (
    <div>
      <Navbar />
      <h1>Developers Landing Page</h1>
      <button className="button">
        <Link href="/developers/register">Register</Link>
      </button>
    </div>
  );
}
