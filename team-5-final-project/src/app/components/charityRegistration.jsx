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

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <div>
      <h1>Contact form</h1>
      {formSuccess ? (
        <div>{formSuccessMessage}</div>
      ) : (
        <form method="POST" action="https://" onSubmit={submitForm}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={formData.email}
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              onChange={handleInput}
              value={formData.message}
            ></textarea>
          </div>

          <button type="submit">Send message</button>
        </form>
      )}
    </div>
  );
}
