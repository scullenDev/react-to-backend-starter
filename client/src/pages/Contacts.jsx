import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { FormGroup, Label, Input } from "reactstrap";
import API from "../utils/API";
import { ContactTable, ContactRow } from "../components/ContactTable";

const Contacts = () => {
  // const { type: contactType } = useParams("");
  const [type, setType] = useState("");
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    API.getContacts(type)
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContacts();
  }, [type]);

  const deleteContact = (id) => {
    API.deleteContact(id)
      .then(() => getContacts())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="mt-4 mb-4">Your {type} Contacts:</h1>
      <FormGroup>
        <Label for="contactType" hidden>
          Filter by Contact Type:
        </Label>
        <Input
          type="select"
          name="contactType"
          id="contactType"
          onChange={({ target }) => setType(target.value)}
          defaultValue="disabled"
        >
          <option value="disabled" disabled="disabled">
            Select Category
          </option>
          <option value="">All</option>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </Input>
      </FormGroup>
      <ContactTable>
        {contacts.map((contact) => (
          <ContactRow contact={contact} deleteContact={deleteContact} key={contact.id} />
        ))}
      </ContactTable>
    </>
  );
};

export default Contacts;
