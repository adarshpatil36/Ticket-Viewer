import React from "react";

export default function TicketItem({ item, onItemClick }) {
  return (
    <div className="TicketItem" onClick={() => onItemClick(item)}>
      <div>
        <span>
          <label>ID: </label>
          <span>{item.id}</span>
        </span>
        <span>
          <label>Subject: </label>
          <span>{item.subject}</span>
        </span>
      </div>
      <div>
        <span>
          <label>Created At: </label>
          <span>{item.created_at}</span>
        </span>
        <span>
          <label>Status: </label>
          <span>{item.status}</span>
        </span>
      </div>
    </div>
  );
}
