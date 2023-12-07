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
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Register as a Charity</h1>
        {regSuccess ? (
          <div>
            {regSuccessMessage}
            <div className="text-green-500">{submissionMessage}</div>
          </div>
        ) : (
          <form
            className="space-y-4"
            method="POST"
            action="https://team-5-final-project-pi.vercel.app/charity/register"
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
                Organisation Name:
              </label>
              <input
                name="org_name"
                onChange={handleInput}
                value={registration.org_name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black">
                Charity Registration Number:
              </label>
              <input
                type="text"
                name="charity_reg_no"
                onChange={handleInput}
                value={registration.charity_reg_no}
                pattern="[0-9]*"
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
                name="confirm_password"
                onChange={handleInput}
                value={registration.confirm_password}
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
                  onChange={handleInput}
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
