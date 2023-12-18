import React, { useState } from "react";
import FetchUserByEmail from "@/db-components/FetchUserByEmail";
import { useRouter } from "next/navigation";

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
    <div className="text-left mx-3 lg:p-10 lg:flex lg:bg-slate-50 lg:justify-center lg:align-middle lg:text-xl lg:items-center lg:w-7/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="w-full max-w-md p-4">
        <h1 className="text-4xl font-bold mt-3 leading-relaxed">
          Log in{" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md">Here</span>
        </h1>
        <form
          className="bg-slate-50 mt-5 tracking-wider flex flex-col w-full lg:gap-10 gap-5"
          action="https://team-5-final-project-pi.vercel.app/developer/register"
          method="POST"
        >
          <div>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={email}
              className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black py-1 px-2 leading-tight focus:outline-none"
              placeholder="Email:"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              name="password"
              onChange={handleInput}
              value=""
              className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black py-1 px-2 leading-tight focus:outline-none"
              placeholder="Password:"
            />
          </div>

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

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="button bg-red-400 font-bold rounded w-36 h-12 text-xl lg:w-56 lg:text-2xl"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
