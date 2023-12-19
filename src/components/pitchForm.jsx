"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../supabase.js";
import Link from "next/link.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function PitchForm() {
  const [registration, setRegistration] = useState({
    Project_Title: "",
    Short_Descr: "",
    Long_Descr: "",
    Video_Link: "",
  });

  const router = useRouter();

  const [regSuccess, setRegSuccess] = useState(false);
  const [regSuccessMessage, setRegSuccessMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setRegistration((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const validateForm = () => {
    const isValidForm =
      registration.Project_Title &&
      registration.Short_Descr &&
      registration.Long_Descr;
    //    registration.Video_Link;
    return isValidForm;
  };

  const submitReg = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields");
      return;
    }

    const projectId = uuidv4();
    try {
      const { error } = await supabase.from("projects").insert({
        project_id: projectId,
        status: 1,
        title: registration.Project_Title,
        short_desc: registration.Short_Descr,
        long_desc: registration.Long_Descr,
        link_to_video: registration.Video_Link,
      });

      if (error) {
        console.error(error);

        return;
      } else {
        // if there's no error, carry on trying the next block of code
        try {
          const ctyId = localStorage.getItem("userId");
          const { error2 } = await supabase.from("roles_of_users").insert({
            id: ctyId,
            project_id: projectId,
            role: 1,
          });
          if (error2) {
            console.error(error2);
            return;
          } else {
            setRegSuccess(true);
            setRegSuccessMessage("Registration successful!");
            setSubmissionMessage("Your project has been submitted.");

            router.push("/charity/dashboard");
            return;
          }
        } catch (error) {
          console.log("Failed to add to roles_of_users");
          return;
        }
      }
    } catch (error) {
      console.error(`Failed to add project to db ${error}`);
      return;
    }
  };
  return (
    <div className="text-left mx-3 lg:p-10 lg:flex lg:bg-slate-50 lg:justify-center lg:align-middle lg:text-xl lg:items-center lg:w-7/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="">
        <h1 className="text-4xl font-bold mt-3 leading-relaxed">
          Submit New {""}
          <span className="bg-emerald-400 py-1 px-2 rounded-md">Pitch</span>
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
            <label className="appearance-none border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none">
            Title: </label>
            </div>
            <div className="">
              <textarea
                type="text"
                name="Project_Title"
                onChange={handleInput}
                value={registration.Project_Title}
                className="appearance-none bg-transparent border border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full h-8 text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                // placeholder="Project Title:"
                required
              />
            </div>

            
            <div>   
            <label className="appearance-none border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none">
              Short Description: </label>
            <div>
              <textarea
                type="text"
                name="Short_Descr"
                onChange={handleInput}
                value={registration.Short_Descr}
                // className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                className="appearance-none bg-transparent border border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full h-35 text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                // placeholder="Brief Summary:"
                required
              />
            </div>
            </div>

            

            <div>
              <label className="appearance-none border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none">
                Detailed Description:
              </label>

              <textarea
                type="VARCHAR"
                name="Long_Descr"
                onChange={handleInput}
                value={registration.Long_Descr}
                className="appearance-none bg-transparent border border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full h-48 text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required></textarea>
            
            </div>

            <div> 
            <label className="appearance-none border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none">
              YouTube Video Link: </label>
            </div>
              <div>
                <input
                  name="Video_Link"
                  onChange={handleInput}
                  value={registration.Video_Link}
                  className="appearance-none bg-transparent border border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full h-8 text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                 
                />
              </div>
            

            {/* <div className=" py-2 mr-1">
              <label className="appearance-none bg-transparent border-b font-bold pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none">
                <Link href="/termsandconditions">Terms & Conditions:</Link>
              </label>
              <input
                type="checkbox"
                name="t_and_c"
                onChange={handleInput}
                value={registration.t_and_c}
                className="border border-gray-300 rounded-md"
                required
              />
            </div> */}
            <button
              type="submit"
              className="w-full bg-red-400 text-white py-2 rounded-md"
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
