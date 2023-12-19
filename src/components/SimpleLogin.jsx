import React, { useState } from "react";
import FetchUserByEmail from "@/db-components/FetchUserByEmail";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SimpleLogin() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  // When email is entered use State to set the email
  const handleInput = (e) => {
    const fieldValue = e.target.value;
    setEmail(fieldValue);
  };

  // This takes the email that was entered on the form, and uses this to look up the user on
  // the main_users table.  The id found is placed into localStorage so it can be retrieved throughout the app.
  const simpleLogin = async (e) => {
    e.preventDefault();

    // reset the userId in local storage
    localStorage.setItem("userId", "");

    FetchUserByEmail(email).then((data) => validateUser(data));

    // Validate that this user exists and if not send an alert.
    // If the user does exist then set their id in local.storage and
    // then redirect to the appropriate dashboard based on user type.
    function validateUser(data) {
      if (data.length == 0) {
        alert("please enter a valid email");
      } else {
        localStorage.setItem("userId", data[0].id);

        if (data[0].type === "DEV") {
          router.push("/developers/dashboard");
        } else {
          router.push("/charity/dashboard");
        }
      }
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-3 leading-relaxed">
        Log<span className="bg-emerald-400 py-1 px-2 rounded-md">in</span>
      </h1>
      <form
        className="bg-slate-50 mt-5 tracking-wider flex flex-col w-full lg:grid lg:grid-cols-2 lg:gap-10 gap-5"
        method="POST"
        action="https://team-5-final-project-pi.vercel.app/developer/register"
        onSubmit={simpleLogin}
      >
        <div>
          <input
            type="text"
            name="email"
            onChange={handleInput}
            value={email}
            className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Email:"
            required
          />
        </div>

        <input
          type="text"
          name="password"
          onChange={() => {}}
          value=""
          className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black py-1 px-2 leading-tight focus:outline-none"
          placeholder="Password:"
        />

        <div className="mt-4 text-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select your role:
          </label>
          <select
            name="options"
            className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-36 text-black py-1 px-2 leading-tight focus:outline-none"
          >
            <option value="" disabled selected>
              Select here
            </option>
            <option value="charity">Charity</option>
            <option value="developer">Developer</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="button bg-red-400 font-bold rounded w-36 h-12 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-4"
          >
            Enter Email
          </button>
        </div>

        <div className="flex flex-col"></div>
      </form>

      <div>
        <div className="flex flex-row lg:flex-row justify-center lg:justify-center lg:gap-20 items-center mb-4">
          <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
            <Link href="/charity/register">Sign up as a Charity</Link>
          </button>
          <button className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-md lg:mt-4 m-2">
            <Link href="/developers/register">Sign up as a Developer</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
