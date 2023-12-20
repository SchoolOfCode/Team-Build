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
    <div className="lg:h-[calc(100vh-12rem)] lg:bg-slate-50 lg:w-11/12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:rounded-md">
      <div className="">
        <h1 className="lg:text-6xl text-3xl text-center font-bold leading-relaxed lg:text-center lg:mt-10">
          <span className="bg-emerald-400 py-1 px-2 rounded-md">Pitch</span>{" "}
          your new Project
        </h1>
        {regSuccess ? (
          <div>
            {regSuccessMessage}
            <div className="text-green-500">{submissionMessage}</div>
          </div>
        ) : (
          <div>
            <form
              className="bg-slate-50 lg:grid lg:grid-cols-12 lg:h-[calc(100vh-20rem)] flex flex-col justify-between mx-2 mt-5 lg:mt-1"
              method="POST"
              action="https://team-5-final-project-pi.vercel.app/developer/register"
              onSubmit={submitReg}
            >
              {/* div for title */}
              <div className="lg:col-span-4 lg:col-start-2 lg:flex lg:flex-col lg:justify-between mt-10 ">
                <div>
                  <input
                    type="text"
                    name="Project_Title"
                    onChange={handleInput}
                    value={registration.Project_Title}
                    className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
                    placeholder="Project Title:"
                    required
                  />
                </div>
                {/* div for Video link */}
                <div>
                  <input
                    name="Video_Link"
                    onChange={handleInput}
                    value={registration.Video_Link}
                    className="appearance-none bg-transparent border-b pb-2 border-gray-600 placeholder:text-gray-600 placeholder:text-xl w-full text-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
                    placeholder="YouTube Video Link:"
                  />
                </div>
                {/* div for Short Description */}
                <div>
                  <label className="appearance-none border-gray-600 placeholder:text-xl text-xl w-full text-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none">
                    Summary of your Project:
                  </label>
                  <textarea
                    type="text"
                    name="Short_Descr"
                    onChange={handleInput}
                    value={registration.Short_Descr}
                    className="appearance-none bg-grey-200 border border-gray-600 bg-slate-50 placeholder:text-gray-600 placeholder:text-xl w-full h-40 text-black mr-3 py-1 px-2 leading-tight focus:outline-none lg:mb-4"
                    required
                  />
                </div>
              </div>

              <div className="lg:col-span-5 lg:col-end-12 lg:flex lg:flex-col lg: justify-between mt-4 lg:mt-10">
                {/* div for Long Description */}
                <div className="">
                  <label className="appearance-none border-gray-600 text-xl placeholder:text-xl w-full text-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none">
                    Put the full details of your project here:
                  </label>
                  <textarea
                    type="VARCHAR"
                    name="Long_Descr"
                    onChange={handleInput}
                    value={registration.Long_Descr}
                    className="appearance-none bg-grey-200 border border-gray-600 bg-slate-50 placeholder:text-gray-600 placeholder:text-xl w-full h-56 lg:h-96 text-black mr-3 py-1 px-2 leading-tight focus:outline-none mb-4 lg:mb-14"
                    required
                  ></textarea>
                </div>

                {/* div for submit button link */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-red-400 text-white py-2 rounded-md mb-4"
                  >
                    Submit Form
                  </button>
                </div>
              </div>
              {!isValid && (
                <div className="text-red-500">
                  Please fill in all required fields.
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
