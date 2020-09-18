import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import ContactForm from "../components/ContactForm";

const AddContact = () => {
  const history = useHistory();

  const [error, setError] = useState({
    isError: false,
    message: "",
    type: "success",
  });

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    type: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setContact({ ...contact, [name]: value });
  };

  const addContact = (e) => {
    e.preventDefault();
    API.addContact(contact)
      .then(() => {
        history.push("/contacts");
      })
      .catch((err) => {
        setError({
          isError: true,
          message: err.response.data.join(", "),
          type: "danger",
        });
      });
  };

  return (
    <>
      <h1 className="mt-4 mb-4">Add a Contact:</h1>
      <ContactForm contact={contact} error={error} handleInputChange={handleInputChange} addContact={addContact} />
    </>
  );
};

export default AddContact;
