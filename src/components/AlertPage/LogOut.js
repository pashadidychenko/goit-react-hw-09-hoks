import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/contacts/contactsOperations";
import { useLocalStorage } from "react-use";

function LogOut({ logoutUser }) {
  const [_, setValue] = useLocalStorage("token");
  let history = useHistory();

  const handleSubmit = () => {
    setValue(null);
    logoutUser();
    history.replace("/");
  };
  const handleCencel = () => {
    history.replace("/contacts");
  };

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Confirm log out</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Do you wont log out?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={handleCencel}>
          Cancel
        </Button>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Log out
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

const mapDispatchToProps = {
  logoutUser,
};

export default connect(null, mapDispatchToProps)(LogOut);
