import Navbar from "../components/navbar/navbar";
import "../globals.css";
import Link from "next/link";

export default function Charities() {
  return (
    <div>
      <Navbar />
      <h1>Charities Landing Page</h1>
      <button className="button">
        <Link href="/charity/register">Register</Link>
      </button>
    </div>
  );
}
