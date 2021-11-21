import React from "react";

export default function TicketItem({ item, onItemClick }) {
  return (
    <div onClick={() => onItemClick(item)}>
      subject {item.subject} id {item.id} created_at {item.created_at} status{" "}
      {item.status}
    </div>
  );
}
