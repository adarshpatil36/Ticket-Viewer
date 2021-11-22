import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTicketsData } from "../apis/apis";
import DisplaySelectedTicket from "./DisplaySelectedTicket";
import TicketItem from "./TicketItem";

export default function Dashboard() {
  const [tickets, settickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState({});
  const [showModal, setshowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTicketsData();
  }, []);

  const setTicketsData = async () => {
    try {
      const data = await getTicketsData();
      console.log(">> ", data);
      if (data === 401) {
        setError({ msg: "Unauthorized Access" });
      } else if (data === 404) {
        setError({ msg: "Could not found the requested data" });
      } else if (data === "Network Error") {
        setError({
          msg: "Network error please check the server or refresh the page",
        });
      }
      settickets(data);
    } catch (error) {
      setError(error);
    }
  };

  const onItemClick = (data) => {
    const selectedItem = tickets.find((item) => item.id === data.id);
    setSelectedTicket(selectedItem);
    setshowModal(true);
  };

  const handleModalClose = () => {
    setshowModal(false);
    setSelectedTicket({});
  };

  return (
    <>
      <div className="Dashboard">
        <div className="title">Ticket Viewer</div>
        <div className="DisplayList">
          {Array.isArray(tickets) && tickets.length > 0 ? (
            <>
              <div className="subTitle">All Open Tickets</div>
              {tickets.map((item) => (
                <TicketItem item={item} onItemClick={onItemClick} />
              ))}
            </>
          ) : (
            <>No Results found</>
          )}
        </div>
      </div>
      <DisplaySelectedTicket
        handleModalClose={() => handleModalClose()}
        showModal={showModal}
        item={selectedTicket}
      />
    </>
  );
}
