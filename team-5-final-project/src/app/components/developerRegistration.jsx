"use client";
import React, { useState } from "react";

export default function DeveloperRegistration() {
  const [registration, setRegistration] = useState({
    fullname: "",
    number: "",
    technicalbackground: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [regSuccess, setRegSuccess] = useState(false);
  const [regSuccessMessage, setRegSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setRegistration((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitReg = (e) => {
    e.preventDefault();

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
          fullname: "",
          number: "",
          technicalbackground: "",
          email: "",
          password: "",
          confirmpassword: "",
        });

        window.alert("Thank you for your submission!");

        window.history.back();
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  };

  return (
    <div>
      <h1>Registration form</h1>
      {regSuccess ? (
        <div>{regSuccessMessage}</div>
      ) : (
        <form
          method="POST"
          action="https://team-5-final-project-pi.vercel.app/charity/register"
          onSubmit={submitReg}
        >
          <div>
            <label>Your Full Name:</label>
            <input
              type="text"
              name="fullname"
              onChange={handleInput}
              value={registration.fullname}
              style={{ color: "black" }}
            />
          </div>

          <div>
            <label>Your Contact Number:</label>
            <input
              type="text"
              name="number"
              onChange={handleInput}
              value={registration.number}
              pattern="[0-9]*"
              style={{ color: "black" }}
            />
          </div>

          <div>
            <label>Please share your technical background:</label>
            <textarea
              name="technicalbackground"
              onChange={handleInput}
              value={registration.technicalbackground}
              style={{ color: "black" }}
            ></textarea>
          </div>

          <div>
            <label>Your Email:</label>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={registration.email}
              style={{ color: "black" }}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
              name="password"
              onChange={handleInput}
              value={registration.password}
              style={{ color: "black" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
              name="confirmpassword"
              onChange={handleInput}
              value={registration.confirmpassword}
              style={{ color: "black" }}
            />
          </div>

          <button type="submit">Submit Form</button>
        </form>
      )}
    </div>
  );
}
