import React from "react";
import { Alert } from "reactstrap";

const ErrorAlert = ({ type, children }) => {
  return <Alert color={type || "warning"}>{children}</Alert>;
};

export default ErrorAlert;
