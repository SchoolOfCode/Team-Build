"use client";
import React, { useState } from "react";

//Snippet of code to insert to the database when the submit registration button is pressed
import {v4 as uuidv4} from "uuid";
import {supabase} from "../../../supabase.js";

// Insert to the main_users table
const usersId = uuidv4();
const {  error } = await supabase.from('main_users').insert({id: {usersId}, email: 'developer3@email.com', type: 'DEV'});

// // Insert to the dev_user_pref table
// const {  error2 } = await supabase.from('dev_user_pref').insert({id: {usersId}, first_name: 'David', surname: 'Dixon', contact_number: '0676534251', tech_background: 'I am a javascript developer', t_and_c: true, hours_range: 2, possible_mentor: false});

// // end of snippet


export default function DeveloperRegistration() {
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
          action="https://team-5-final-project-pi.vercel.app/developers/register"
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
