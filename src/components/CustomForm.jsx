"use client";
const { useState } = require("react");

// const CustomForm = ({children}) => {
//   const [formData, setFormData] = useState();
//   const submitForm = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <form>
//       <h1>name</h1>
//         {children}
//         <button onClick={() => submitForm(inputData)}>Submit</button>
//       </form>
//     </>
//   );
// };

// export default CustomForm


const CustomForm = (incomingValues) => {
  const [formData, setFormData] = useState();
  const submitForm = (data) => {
    console.log(data);
  };

  const handleInput = (e) => {
    // This extravts the field name and field value from the event object (Key value pair)
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // The 2nd half of the useState hook, it updates the "Registration" state using it's previous state and the new value.
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <>
      <form>
        {incomingValues.forEach((e) => {
          <>
            <label className="block text-sm font-semibold mb-1 text-black">
              {e.labelName}{" "}
            </label>
            <input
              type={e.type}
              name={e.labelName}
              onChange={handleInput}
              value={formData.first_name}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </>
        })}
      </form>
    </>
  );
};

export default CustomForm;
