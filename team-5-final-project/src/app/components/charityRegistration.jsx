"use client";
import Link from "next/link";
import React, { useState } from "react";
//Client component needs hydrating in the browser, "use client" allows this to happen
// React import for UseState hook, manage component's local state

//Functional compontent
//State variable "Registration" and function "setRegistration" to update state
//"Registration" state is an object that holds the form fields and its initial values
// Each field is initially set to an empty string, this will update when user interacts with form entering values.

export default function CharityRegistration() {
  const [registration, setRegistration] = useState({
    first_name: "",
    surname: "",
    contact_number: "",
    org_name: "",
    charity_reg_no: "",
    password: "",
    confirmpassword: "",
    t_and_c: "",
  });

  // "regSuccess" and "setRegSuccess" is a use state variable to track whether registation was successful
  // "regSuccessMessage" and "setRegSuccessMessage" is a use state variable used to store a message related to the registration success.
  // "showPassword" and "setShowPassword" is a use state variable that controls whether to show or hide the password
  // "isValid" and "setIsValid" is a use state variable to track the validity of the form
  // "submissionMessage" and "setSubmissionMessage" is a use state variable to store a message on submission whether it was a success or failure.

  const [regSuccess, setRegSuccess] = useState(false);
  const [regSuccessMessage, setRegSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // This function is a replication of the user using the functionality of the platform, it handles the input changes in the form fields.
  const handleInput = (e) => {
    // This extravts the field name and field value from the event object (Key value pair)
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // The 2nd half of the useState hook, it updates the "Registration" state using it's previous state and the new value.
    setRegistration((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  // This function validates the registration form, checking if all required fields are filled and the passwords match.
  const validateForm = () => {
    const isValidForm =
      registration.first_name &&
      registration.surname &&
      registration.contact_number &&
      registration.org_name &&
      registration.charity_reg_no &&
      registration.password &&
      registration.password === registration.confirmpassword;
    registration.t_and_c && setIsValid(isValidForm);

    // This will return and update the "isValid" state based on the forms overall validity
    return isValidForm;
  };

  // This function is in play when the registration form is submitted
  // the e.preventDefault stops an empty/default form being submitted
  const submitReg = (e) => {
    e.preventDefault();

    // Uses previous function above and shows an alert if the form isn't valid and exits with the return.
    if (!validateForm()) {
      alert(
        "Please fill in all required fields and make sure passwords match."
      );
      return;
    }

    // A varaible that gets the URL to which the form should be submitted from the forms "action", this is the form being submitted and sent.
    const regUrl = e.target.action;

    // Using the fetch API to send a POST request to the registration URL.
    // Converts the registration data to JSON format to be read.
    fetch(regUrl, {
      method: "POST",
      body: JSON.stringify(registration),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      // Checks if the HTTP response status is "OK"
      // If not, throw error with HTTP status.
      // If the response is "OK" parse it was JSON and return result.
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
          first_name: "",
          surname: "",
          contact_number: "",
          org_name: "",
          charity_reg_no: "",
          password: "",
          confirm_password: "",
          t_and_c: "",
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
    <div className="bg-yellow-100 text-left mx-3 lg:flex lg:justify-center lg:align-middle  lg:items-center ">
      <div className="">
        <h1 className="text-4xl font-bold">
          Register as a{" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            Charity
          </span>
        </h1>
        {regSuccess ? (
          <div>
            {regSuccessMessage}
            <div className="">{submissionMessage}</div>
          </div>
        ) : (
          <form
            className="bg-green-300 mt-5 tracking-wider flex flex-col w-full"
            method="POST"
            action="https://team-5-final-project-pi.vercel.app/charity/register"
            onSubmit={submitReg}
          >
            <div>
              <label className="">First Name:</label>
              <input
                type="text"
                name="first_name"
                onChange={handleInput}
                value={registration.first_name}
                className="w-full lg:w-1/2"
                required
              />
            </div>
            <div>
              <label className="">Surname:</label>
              <input
                type="text"
                name="surname"
                onChange={handleInput}
                value={registration.surname}
                className=""
                required
              />
            </div>
            <div>
              <label className="">Contact Number:</label>
              <input
                type="text"
                name="contact_number"
                onChange={handleInput}
                value={registration.contact_number}
                pattern="[0-9]*"
                className=""
                required
              />
            </div>
            <div>
              <label className="">Organisation Name:</label>
              <input
                name="org_name"
                onChange={handleInput}
                value={registration.org_name}
                className=""
                required
              />
            </div>
            <div>
              <label className="">Charity Registration Number:</label>
              <input
                type="text"
                name="charity_reg_no"
                onChange={handleInput}
                value={registration.charity_reg_no}
                pattern="[0-9]*"
                className=""
                required
              />
            </div>
            <div>
              <label className="">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleInput}
                value={registration.password}
                className=""
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className=""
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
            <div>
              <label className="">Confirm Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm_password"
                onChange={handleInput}
                value={registration.confirm_password}
                className=""
                required
              />
            </div>
            <div>
              <div className="">
                <input
                  type="checkbox"
                  id="terms&conditions"
                  name="t_and_c"
                  onChange={handleInput}
                  value={registration.t_and_c}
                  className=""
                  required
                />
                <span className="">
                  Click here to agree to the{" "}
                  <Link href="../termsandconditions">
                    <u>
                      <b>Terms and Conditions</b>
                    </u>
                  </Link>
                </span>
              </div>
            </div>
            <button type="submit" className="">
              Submit Form
            </button>
            {!isValid && (
              <div className="">Please fill in all required fields.</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
