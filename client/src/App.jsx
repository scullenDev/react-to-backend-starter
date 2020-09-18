import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";

const App = () => (
  <>
    <NavBar />
    <Container>
      <Route exact path="/add" component={AddContact} />
      <Route exact path={["/", "/contacts", "/contacts/:type"]} component={Contacts} />
    </Container>
  </>
);

export default App;
