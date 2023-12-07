"use client";
import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../../supabase.js";
import { useRouter } from "next/navigation"

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

  const  submitReg = async (e) => {
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
  const { error } = await supabase
    .from("main_users")
    .insert({
      id: usersId,
      email: registration.email,
      type: "DEV",
      password: registration.password,
    });
  if (error) {
    console.log(error);
    return;
  } else 
  {

    // Now Insert the new users preferences into the dev_user_pref table
    try {
      const { error2 } = await supabase
        .from("dev_user_pref")
        .insert({
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
         
          router.push('/developers/dashboard');
          
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Register as a Developer</h1>
        {regSuccess ? (
          <div>
            {regSuccessMessage}
            <div className="text-green-500">{submissionMessage}</div>
          </div>
        ) : (
          <form
            className="space-y-4"
            method="POST"
            action="https://team-5-final-project-pi.vercel.app/developer/register"
            onSubmit={submitReg}

          >
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                First Name:
              </label>
              <input
                type="text"
                name="first_name"
                onChange={handleInput}
                value={registration.first_name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Surname:
              </label>
              <input
                type="text"
                name="surname"
                onChange={handleInput}
                value={registration.surname}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Contact Number:
              </label>
              <input
                type="text"
                name="contact_number"
                onChange={handleInput}
                value={registration.contact_number}
                pattern="[0-9]*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Technical Background:
              </label>
              <input
                type="VARCHAR"
                name="tech_background"
                onChange={handleInput}
                value={registration.tech_background}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              ></input>
            </div>
            <div>
              <div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-black">
                    How many hours are you available for?
                  </label>
                  <select
                    name="hours_range"
                    onChange={handleInput}
                    value={registration.hours_range}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-black">
                  Would you be willing to mentor a junior dev?
                </label>
                <input
                  type="checkbox"
                  name="possible_mentor"
                  onChange={handleChkBoxInput}
                  value={registration.possible_mentor}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
              </div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Email:
              </label>
              <input
                type="text"
                name="email"
                onChange={handleInput}
                value={registration.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleInput}
                value={registration.password}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-blue-500 text-sm mt-2 inline-block"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Confirm Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmpassword"
                onChange={handleInput}
                value={registration.confirmpassword}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
            <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms&conditions"
                  name="t_and_c"
                  onChange={handleChkBoxInput}
                  value={registration.t_and_c}
                  className="mr-2"
                  required
                />
                <span className="text-sm text-gray-600">
                  Click here to agree to the{" "}
                  <Link href="../termsandconditions">
                    <u>
                      <b>Terms and Conditions</b>
                    </u>
                  </Link>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
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
