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
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4">
        <h1 className="text-4xl font-bold mt-3 mb-5 leading-relaxed text-center">
          Login here
        </h1>
        <form
          className="flex flex-col gap-5"
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
          <button
            type="submit"
            className="button bg-red-400 font-bold rounded h-12 text-xl"
          >
            Enter Email
          </button>
        </form>
      </div>
    </div>
  );
}
