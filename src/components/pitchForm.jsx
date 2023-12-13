"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../../supabase.js";
import Link from "next/link.js";
import { useRouter } from "next/navigation";

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
      registration.Long_Descr &&
      registration.Video_Link;
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
        try {
          const { error2 } = await supabase.from("roles_of_users").insert({
            id: "169adbae-cb11-4c74-aa55-99c6c8c559df",
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
    <div className="min-h-screen flex pt-8 justify-left pl-5 border border-black rounded-2xl p-2 m-2 bg-amber-50">
      <div className="">
        {regSuccess ? (
          <div>
            {regSuccessMessage}
            <div className="text-green-500">{submissionMessage}</div>
          </div>
        ) : (
          <form
            className=""
            method="POST"
            action="https://team-5-final-project-pi.vercel.app/developer/register"
            onSubmit={submitReg}
          >
            <div className="">
              <label className="block text-sm font-semibold mb-1 text-black">
                Project Title:
              </label>
              <input
                type="text"
                name="Project_Title"
                onChange={handleInput}
                value={registration.Project_Title}
                className="w-80 px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Brief Summary:
              </label>
              <input
                type="text"
                name="Short_Descr"
                onChange={handleInput}
                value={registration.Short_Descr}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Detailed Description:
              </label>
              <input
                type="VARCHAR"
                name="Long_Descr"
                onChange={handleInput}
                value={registration.Long_Descr}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-black">
                  YouTube Video Link:
                </label>
                <input
                  name="Video_Link"
                  onChange={handleInput}
                  value={registration.Video_Link}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="flex flex-row justify-between py-2 mr-1">
              <label className="flex justify-start text-sm font-semibold mb-1 text-black">
                <Link href="/termsandconditions">
                  <u>Terms & Conditions:</u>
                </Link>
              </label>
              <input
                type="checkbox"
                name="t_and_c"
                onChange={handleInput}
                value={registration.t_and_c}
                className="border border-gray-300 rounded-md"
                required
              />
            </div>
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
