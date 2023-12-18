import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <div className="flex flex-row lg:flex-row justify-center lg:justify-center lg:gap-20 items-center mb-4">
        <button className="button border-4 text-red-400 border-red-400 font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
          <Link href="/charity/register">Sign up as a Charity</Link>
        </button>
        <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
          <Link href="/developers/register">Sign up as a Developer</Link>
        </button>
      </div>
    </div>
  );
}
