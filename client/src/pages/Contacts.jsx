import React, { useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Label, Input, Button } from "reactstrap";
import API from "../utils/API";
import { ContactTable, ContactRow } from "../components/ContactTable";

const Contacts = () => {
  const history = useHistory();
  const [type, setType] = useState("");
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    // TODO: determine how to get all contacts from the backend and save in state
  };

  useEffect(() => {
    getContacts();
  }, [type]);

  const deleteContact = (id) => {
    // TODO: determine how to delete the contact with the provided id and reload the updated contacts list
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mt-4 mb-4">Your {type} Contacts:</h1>
        <Button
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            history.push("/add");
          }}
        >
          Add New Contact
        </Button>
      </div>
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
