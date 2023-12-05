import Link from "next/link";
import Navbar from "./components/navbar/navbar";
import "../app/globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Tech For Good</h1>
      <h2>Helping charities and non-profits</h2>
      <button className="button">
        <Link href={"../charity"}>Find out More</Link>
      </button>
      <h2>Helping developers gain commercial experience</h2>
      <button className="button">
        <Link href={"../developers"}>Find out More</Link>
      </button>
    </div>
  );
}
