"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [registration, setRegistration] = useState({
    Full_Name: "",
    User_Email: "",
    Long_Descr: "",
  });

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
      registration.Full_Name &&
      registration.User_Email &&
      registration.Long_Descr;
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
          Full_Name: "",
          User_Email: "",
          Long_Descr: "",
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
    <div className=" flex py-6 justify-left pl-5 border border-black rounded-2xl p-2 m-2 bg-amber-50">
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
              <label className="block text-lg py-2 font-semibold mb-1 text-black">
                Full Name:
              </label>
              <input
                type="text"
                name="Full_Name"
                onChange={handleInput}
                value={registration.Full_Name}
                className="w-80 px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-lg py-4 font-semibold text-black">
                Email:
              </label>
              <input
                type="text"
                name="User_Email"
                onChange={handleInput}
                value={registration.User_Email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="">
              <label className="block text-lg py-4 font-semibold text-black">
                Message:
              </label>
              <input
                type="VARCHAR"
                name="Long_Descr"
                onChange={handleInput}
                value={registration.Long_Descr}
                className="w-full px-4 py-20 border border-gray-300 rounded-md"
                required
              ></input>
            </div>
            <button
              type="submit"
              className="mt-4 ml-11 w-60 bg-red-400 text-white font-bold text-lg py-2 rounded"
            >
              Submit
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
