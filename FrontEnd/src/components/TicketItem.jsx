import React from "react";
import { CONSTANTS } from "../constants/constants";
import { formateDate } from "../utils/util";

export default function TicketItem({ item, onItemClick }) {
  return (
    <div
      className="TicketItem"
      data-testid="ticketItem"
      onClick={() => onItemClick(item)}
    >
      <div>
        <span>
          <label>{CONSTANTS.TICKET_DETAILS.ID}</label>
          <span>{item.id}</span>
        </span>
        <span>
          <label>{CONSTANTS.TICKET_DETAILS.SUBJECT}</label>
          <span>{item.subject}</span>
        </span>
      </div>
      <div>
        <span>
          <label>{CONSTANTS.TICKET_DETAILS.CREATED_AT}</label>
          <span>{formateDate(item.created_at)}</span>
        </span>
        <span>
          <label>{CONSTANTS.TICKET_DETAILS.STATUS}</label>
          <span>{item.status}</span>
        </span>
      </div>
    </div>
  );
}
