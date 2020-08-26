import React, { useState } from "react";
import { loginUser } from "../../redux/contacts/contactsOperations";
import { statusRemember } from "../../redux/status/statusActions";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage({ loginUser, statusRemember }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleSubmit = () => loginUser({ email, password });
  const handleCheked = (e) => statusRemember(e.target.checked);

  return (
    <Container>
      <br />
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                suggested="email"
                name="email"
                value={email}
                autoComplete="email"
                onChange={handleChangeEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                suggested="password"
                name="password"
                value={password}
                autoComplete="password"
                onChange={handleChangePassword}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
                onChange={handleCheked}
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
  loginUser,
  statusRemember,
};

export default connect(null, mapDispatchToProps)(LoginPage);
