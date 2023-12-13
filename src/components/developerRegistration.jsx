"use client";
import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../supabase.js"
import { useRouter } from "next/navigation";

export default function DeveloperRegistration() {
  const [registration, setRegistration] = useState({
    first_name: "",
    surname: "",
    contact_number: "",
    tech_background: "",
    hours_range: "",
    email: "",
    possible_mentor: false,
    password: "",
    confirmpassword: "",
    t_and_c: false,
  });

  const router = useRouter();

  const [regSuccess, setRegSuccess] = useState(false);
  const [regSuccessMessage, setRegSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    console.log(fieldName, fieldValue);
    setRegistration((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleChkBoxInput = (e) => {
    const { name, type, checked, value } = e.target;

    setRegistration((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const isValidForm =
      registration.first_name &&
      registration.surname &&
      registration.contact_number &&
      registration.tech_background &&
      registration.hours_range &&
      registration.email &&
      registration.password &&
      registration.password === registration.confirmpassword;
    registration.t_and_c && setIsValid(isValidForm);
    return isValidForm;
  };

  const submitReg = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert(
        "Please fill in all required fields and make sure passwords match."
      );
      return;
    }

    // Pass the registration form data to the database to complete the registration.
    // This is achieved by inserting a main_users row for the new user and then attaching a dev_user_pref table row to that new user

    // Insert the new user into the main_users table

    const usersId = uuidv4();
    try {
      const { error } = await supabase.from("main_users").insert({
        id: usersId,
        email: registration.email,
        type: "DEV",
        password: registration.password,
      });
      if (error) {
        console.log(error);
        return;
      } else {
        // Now Insert the new users preferences into the dev_user_pref table
        try {
          const { error2 } = await supabase.from("dev_user_pref").insert({
            id: usersId,
            first_name: registration.first_name,
            surname: registration.surname,
            contact_number: registration.contact_number,
            tech_background: registration.tech_background,
            t_and_c: registration.t_and_c,
            hours_range: registration.hours_range,
            possible_mentor: registration.possible_mentor,
          });
          if (error2) {
            console.log(error2);
            return;

            // Both database insets are successful so refresh the page.
          } else {
            setRegSuccess(true);
            setRegistration({
              first_name: "",
              surname: "",
              contact_number: "",
              tech_background: "",
              hours_range: "",
              email: "",
              possible_mentor: "",
              password: "",
              confirmpassword: "",
              t_and_c: "",
            });
            setSubmissionMessage("Thank you for your submission!");

            alert("Thank you for your submission!");

            router.push("/developers/dashboard");

            return;
          }
        } catch (error) {
          console.log("Failed to add to dev_user_pref");
          return;
        }
      }
    } catch (error) {
      console.log("Failed to add to main_users");
      return;
    }
  };

  return (
    <div className="text-left mx-3  lg:p-10 lg:flex lg:bg-slate-50 lg:justify-center lg:align-middle lg:text-xl lg:items-center lg:w-7/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="">
        <h1 className="text-4xl font-bold mt-3 leading-relaxed">
          Register as a{" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md">Developer</span>
        </h1>
        {regSuccess ? (
          <div>
            {regSuccessMessage}
            <div className="text-green-500">{submissionMessage}</div>
          </div>
        ) : (
          <form
            className="bg-slate-50 mt-5 tracking-wider flex flex-col w-full lg:grid lg:grid-cols-2 lg:gap-10 gap-5"
            method="POST"
            action="https://team-5-final-project-pi.vercel.app/developer/register"
            onSubmit={submitReg}
          >
            <div>
              <input
                type="text"
                name="first_name"
                onChange={handleInput}
                value={registration.first_name}
                className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="First Name:"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="surname"
                onChange={handleInput}
                value={registration.surname}
                className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Last Name:"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="contact_number"
                onChange={handleInput}
                value={registration.contact_number}
                pattern="[0-9]*"
                className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Contact Number:"
                required
              />
            </div>
            <div>
              <input
                type="VARCHAR"
                name="tech_background"
                onChange={handleInput}
                value={registration.tech_background}
                className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Technical Background:"
                required
              ></input>
            </div>
            <div>
              <div></div>

              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="email"
                  onChange={handleInput}
                  value={registration.email}
                  className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Email:"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleInput}
                value={registration.password}
                className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Password:"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm_password"
                onChange={handleInput}
                value={registration.confirm_password}
                className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Confirm Password:"
                required
              />
            </div>
            <div>
              <select
                name="hours_range"
                onChange={handleInput}
                value={registration.hours_range}
                className="bg-transparent border-b pb-2 border-gray-600 text-xl text-gray-600 placeholder:text-xl w-full mr-3 py-1 leading-tight focus:outline-none"
                placeholder="Select your hour range"
                required
              >
                <option value="" disabled>
                  Select your hour range
                </option>
                <option value="1">0 - 2</option>
                <option value="2">2 - 5</option>
                <option value="3">5 - 10</option>
                <option value="4">10 - 20</option>
                <option value="5">20+</option>
              </select>
            </div>
            <div>
              <label className="border-b pb-2 border-gray-600 text-xl text-gray-600 placeholder:text-xl w-full">
                Willing to mentor a junior dev?
              </label>
              <input
                type="checkbox"
                name="possible_mentor"
                onChange={handleChkBoxInput}
                value={registration.possible_mentor}
                className="ml-2"
                // className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />{" "}
            </div>
            <div>
              <div className="border-b pb-2 border-gray-600 text-md text-gray-600 placeholder:text-xl w-full">
                I agree to the{" "}
                <Link href="../termsandconditions" className="ml-1">
                  <u>
                    <b>Terms and Conditions</b>
                  </u>
                </Link>
                <input
                  type="checkbox"
                  id="terms&conditions"
                  name="t_and_c"
                  onChange={handleChkBoxInput}
                  value={registration.t_and_c}
                  className="ml-2"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="button bg-red-400 font-bold rounded w-36 h-12 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-4"
            >
              Submit Form
            </button>

            {!isValid && (
              <div className="text-red-500">
                Please fill in all required fields.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
