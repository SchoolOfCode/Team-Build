import { useState } from "react";

export default function CharityRegistration() {
    const [registration, setRegistration] = useState({
      name: "",
      email: "",
      organisationName: "",
      charityRegNumber: "",
    });
    
    const [regSuccess, setRegSuccess] = useState(false)
    const [regSuccessMessage, setRegSuccessMessage] = useState("")
    
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setRegistration((prevState) => ({

            ...prevState, [fieldName]: fieldValue}));
    } 
    const submitReg = (e) => {
        e.preventDefault() 

        const regUrl = e.target.action;
        const data = new registration()

    


    }
  }