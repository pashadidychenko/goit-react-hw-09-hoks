import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { registrationUser } from "../../redux/contacts/contactsOperations";
import { registrationError } from "../../redux/contacts/contactsActions";
import { statusRemember } from "../../redux/status/statusActions";

function RegistrationPage({
  registrationUser,
  registrationError,
  statusRemember,
}) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const firstNameChange = (e) => setFirstName(e.target.value);
  const secondNameChange = (e) => setSecondName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);
  const confirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = () => {
    const user = {
      name: `${firstName} ${secondName}`,
      email: email,
      password: password,
    };
    if (password !== confirmPassword) {
      registrationError("password dismach");
      return;
    } else {
      registrationUser(user);
      statusRemember(true);
    }
  };

  return (
    <Container>
      <br />
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h2>Registration</h2>
          <Form type="form">
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={firstNameChange}
              />
            </Form.Group>
            <Form.Group controlId="secondName">
              <Form.Label>Second Name</Form.Label>
              <Form.Control
                type="secondName"
                name="secondName"
                value={secondName}
                placeholder="Second Name"
                onChange={secondNameChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                suggested="email"
                autoComplete="email"
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={emailChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                suggested="password"
                autoComplete="new-password"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={passwordChange}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                suggested="confirmPassword"
                autoComplete="confirmPassword"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={confirmPasswordChange}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = {
  registrationUser,
  registrationError,
  statusRemember,
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
