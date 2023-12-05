"use client";
import React, { useState } from "react";

export default function CharityRegistration() {
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    organisationName: "",
    charityRegNumber: "",
  });

  const [regSuccess, setRegSuccess] = useState(false);
  const [regSuccessMessage, setRegSuccessMessage] = useState("");

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

    // POST the data to the URL of the form
    fetch(regUrl, {
      method: "POST",
      body: JSON.stringify(registration),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRegSuccess(true);
        setRegSuccessMessage(data.submission_text);
        setRegistration({
          name: "",
          email: "",
          organisationName: "",
          charityRegNumber: "",
        });
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
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={registration.name}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={registration.email}
            />
          </div>

          <div>
            <label>Organisation Name</label>
            <textarea
              name="organisationName"
              onChange={handleInput}
              value={registration.organisationName}
            ></textarea>
          </div>

          <div>
            <label>Charity Reg Number</label>
            <input
              type="text"
              name="charityRegNumber"
              onChange={handleInput}
              value={registration.charityRegNumber}
            />
          </div>

          <button type="submit">Send message</button>
        </form>
      )}
    </div>
  );
}
