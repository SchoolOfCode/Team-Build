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
    // If the user does exist then set their id in local.storage animationDelay:
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
    <div className="text-left lg:h-[calc(100vh-15rem)] h-[calc(100vh-9rem)] mt-4 mx-3 lg:p-10 lg:flex lg:flex-col lg:bg-slate-50 flex justify-between flex-col lg:justify-between lg:align-middle lg:text-xl lg:items-center lg:w-7/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1 className="lg:text-7xl text-5xl font-bold mt-3 leading-relaxed text-center">
          Log
          <span className="bg-emerald-400 py-1 px-2 rounded-md"> in</span>
        </h1>
        <p className="text-md ml-2 text-center lg:mt-5 ">
          <span className="font-bold">Not registered yet? </span>
          Click below to register as:
        </p>
        <span className="flex justify-between lg:mt-4">
          <button className="button border-4 text-black border-red-400 font-bold rounded w-40 h-10 text-sm lg:w-48 lg:text-md lg:mt-4 m-2">
            <Link href="/charity/register">Charity</Link>
          </button>
          <button className="button border-4 text-black border-red-400 font-bold rounded w-40 h-10 text-sm lg:w-48 lg:text-md lg:mt-4 m-2">
            <Link href="/developers/register">Developer</Link>
          </button>
        </span>
      </div>
      <form
        className="lg:mt-5 tracking-wider flex flex-col lg:w-6/12 gap-2 m-2"
        method="POST"
        action="https://team-5-final-project-pi.vercel.app/developer/register"
        onSubmit={simpleLogin}
      >
        <div>
          <div className="lg:m-2 m-3">
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={email}
              className="border-b pb-2 lg:bg-slate-50 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Email:"
              required
            />
          </div>

          <div className="flex flex-col m-3  lg:m-2">
            <input
              type="text"
              name="password"
              onChange={() => {}}
              value=""
              className="border-b pb-2 border-gray-600 lg:bg-slate-50 placeholder:text-gray-600 placeholder:text-xl w-full text-black py-1 px-2 leading-tight focus:outline-none"
              placeholder="Password:"
            />
            <p className="text-sm text-gray-500 mt-2 lg:m-2 m-2">
              Forgot Password?
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="button bg-red-400  font-bold rounded w-44 h-10 text-sm lg:w-64 lg:text-lg lg:mt-4 m-2"
          >
            Login
          </button>
        </div>

        <div className="flex flex-col"></div>

        <div className="hidden md:flex items-center gap-2"></div>
      </form>
    </div>
  );
}
