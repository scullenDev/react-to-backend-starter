import React from "react";
import { Table } from "reactstrap";

export const ContactTable = ({ children }) => (
  <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact Type</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Delete?</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  </>
);

export const ContactRow = ({ contact: { firstName, lastName, type, phoneNumber, email, id }, deleteContact }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{type}</td>
      <td>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </td>
      <td>
        <a href={`mailto:${email}`}>{email}</a>
      </td>
      <td>
        <i className="fas fa-times" onClick={() => deleteContact(id)}></i>
      </td>
    </tr>
  );
};
