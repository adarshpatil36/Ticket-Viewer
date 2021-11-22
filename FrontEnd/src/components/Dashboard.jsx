import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTicketsData } from "../apis/apis";
import { CONSTANTS } from "../constants/constants";
import DisplaySelectedTicket from "./DisplaySelectedTicket";
import ErrorComponent from "./ErrorComponent";
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
      if (data == 401) {
        setError({ msg: "Unauthorized Access" });
      } else if (data == 404) {
        setError({ msg: "Could not found the requested data" });
      } else if (data == "Error: Network Error") {
        setError({
          msg: "Network error please check the server or refresh the page",
        });
      } else {
        settickets(data);
      }
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
        <div className="title">{CONSTANTS.TITLE}</div>
        <div className="DisplayList">
          {error ? (
            <ErrorComponent message={error.msg} />
          ) : Array.isArray(tickets) && tickets.length > 0 ? (
            <>
              <div className="subTitle">{CONSTANTS.SUB_TITLE}</div>
              {tickets.map((item, index) => (
                <TicketItem item={item} key={index} onItemClick={onItemClick} />
              ))}
            </>
          ) : (
            <h3>{CONSTANTS.NO_DATA}</h3>
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
