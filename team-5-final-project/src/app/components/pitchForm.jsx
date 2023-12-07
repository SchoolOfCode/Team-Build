"use client";
import React, { useState } from "react";

export default function PitchForm() {
  const [registration, setRegistration] = useState({
    Project_Title: "",
    Short_Descr: "",
    Long_Descr: "",
    Video_Link: "",
  });

  const [regSuccess, setRegSuccess] = useState(false);
  const [regSuccessMessage, setRegSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const submitReg = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields");
      return;
    }

    const regUrl = e.target.action;

    fetch(regUrl, {
      method: "POST",
      body: JSON.stringify(registration),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRegSuccess(true);
        setRegSuccessMessage(data.submission_text);
        setRegistration({
          Project_Title: "",
          Short_Descr: "",
          Long_Descr: "",
          Video_Link: "",
        });
        setSubmissionMessage("Thank you for your submission!");

        alert("Thank you for your submission!");

        window.history.back();
      })
      .catch((error) => {
        console.error("Error during fetch:", error);

        let errorMessage = "An error occurred. Please try again later.";

        if (error.message.includes("NetworkError")) {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else if (error.message.includes("HTTP error! Status:")) {
          errorMessage = "Server error. Please try again later.";
        }
        alert(errorMessage);

        setError(errorMessage);
      });
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
                name="short_descr"
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
              ></input>
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
                ></input>
              </div>
            </div>

            <div className="flex flex-wrap justify-between">
              <label className="block text-sm font-semibold mb-1 text-black">
                Terms & Conditions:
              </label>
              <input
                type="checkbox"
                name="t_and_c"
                onChange={handleInput}
                value={registration.t_and_c}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
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
