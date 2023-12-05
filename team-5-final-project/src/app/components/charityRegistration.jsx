import { useState } from "react";

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
    const data = new registration();

    Object.entries(regSuccess).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(regUrl, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRegSuccess({
          name: "",
          email: "",
          organisationName: "",
          charityRegNumber: "",
        });

        setRegSuccess(true);
        setRegSuccessMessage(data.submission_text);
      });
  };

  return (
    <div>
      <h1>Registration form</h1>
      {regSuccessSuccess ? (
        <div>{regSuccessMessage}</div>
      ) : (
        <form
          method="POST"
          action="https://team-5-final-project-pi.vercel.app/charity/register"
          onSubmit={submitForm}
        >
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={regData.name}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={regData.email}
            />
          </div>

          <div>
            <label>Organisation Name</label>
            <textarea
              name="organisationName"
              onChange={handleInput}
              value={regData.organisationName}
            ></textarea>
          </div>

          <div>
            <label>Charity Reg Number</label>
            <input
              type="text"
              name="charityRegNumber"
              onChange={handleInput}
              value={regData.charityRegNumber}
            />
          </div>

          <button type="submit">Send message</button>
        </form>
      )}
    </div>
  );
}
