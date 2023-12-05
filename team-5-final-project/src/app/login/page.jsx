import Navbar from "../components/navbar";
import Link from "next/link";

export default function Login() {
  return (
    <section>
      <Navbar />
      <div className="headerContainer sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 relative">
        <h2 className="subTitle text-center text-4xl font-bold p-2 bg-emerald-300">
          User Login
        </h2>
      </div>
      <div className="section flex flex-col justify-center items-center pt-8">
        <p className="text-sm">Not user yet? Click below to register today</p>
        <button className="button m-3 w-60">
          <Link href={"./charity/dashboard"}>Charity Registration</Link>
        </button>
        <button className="button m-3 w-60">
          <Link href={"./developers/dashboard"}>Developer Registration</Link>
        </button>
      </div>
    </section>
  );
}
