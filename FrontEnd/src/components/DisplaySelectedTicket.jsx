import React from "react";
import { Modal, Button } from "react-bootstrap";
import { CONSTANTS } from "../constants/constants";
import { formateDate } from "../utils/util";

export default function DisplaySelectedTicket({
  handleModalClose,
  showModal,
  item,
}) {
  return (
    <Modal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {CONSTANTS.TICKET_DETAILS.REQUESTER_ID}
          {item.requester_id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{item.subject}</Modal.Body>
      <Modal.Body>
        <h6>{CONSTANTS.TICKET_DETAILS.DESCRIPTION}</h6>
        {item.description}
      </Modal.Body>
      <Modal.Body>
        <h6>{CONSTANTS.TICKET_DETAILS.CREATED_AT}</h6>
        {formateDate(item.created_at)}
      </Modal.Body>
      <Modal.Body>
        <h6>{CONSTANTS.TICKET_DETAILS.STATUS}</h6>
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
