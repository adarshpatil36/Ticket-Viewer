import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function DisplaySelectedTicket({
  handleModalClose,
  showModal,
  item,
}) {
  return (
    <Modal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Requester ID: {item.requester_id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{item.subject}</Modal.Body>
      <Modal.Body>
        <h6>Description: </h6>
        {item.description}
      </Modal.Body>
      <Modal.Body>
        <h6>Created At: </h6>
        {item.created_at}
      </Modal.Body>
      <Modal.Body>
        <h6>Status: </h6>
        {item.status}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
