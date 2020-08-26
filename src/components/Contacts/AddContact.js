import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Accordion,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addUserContact } from "../../redux/contacts/contactsOperations";

function AddContact({ addUserContact }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const firstNameChange = (e) => setFirstName(e.target.value);
  const secondNameChange = (e) => setSecondName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const numberChange = (e) => setNumber(e.target.value);

  const handleSubmit = () => {
    const fullName = `${firstName} ${secondName}`;
    const contact = {
      name: fullName.replace(/\b\w/g, (l) => l.toUpperCase()),
      number: number,
    };
    addUserContact(contact);
    setFirstName("");
    setSecondName("");
    setEmail("");
    setNumber("");
  };

  return (
    <Container>
      <Accordion>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="button"
            eventKey="0"
            className="btn btn-primary"
          >
            Add contacts
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Header>
            <Row className="justify-content-md-center">
              <Col xs lg="5">
                <h2 className="row row-cols-md-5 justify-content-center">
                  Add contacts
                </h2>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="FirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={firstNameChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="SecondName">
                      <Form.Label>Second Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Second Name"
                        name="secondName"
                        value={secondName}
                        onChange={secondNameChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={emailChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumber">
                      <Form.Label>Number</Form.Label>
                      <Form.Control
                        type="Number"
                        placeholder="Number"
                        name="number"
                        value={number}
                        onChange={numberChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Add contacts
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Header>
        </Accordion.Collapse>
      </Accordion>
    </Container>
  );
}

const mapDispatchToProps = {
  addUserContact,
};

export default connect(null, mapDispatchToProps)(AddContact);
