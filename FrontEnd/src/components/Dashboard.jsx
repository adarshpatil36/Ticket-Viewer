import React, { useEffect, useState } from "react";
import { getTicketsData } from "../apis/apis";
import { CONSTANTS } from "../constants/constants";
import DisplaySelectedTicket from "./DisplaySelectedTicket";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import PaginationComponent from "./PaginationComponent";
import TicketItem from "./TicketItem";

export default function Dashboard() {
  const [tickets, settickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState({});
  const [showModal, setshowModal] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const dataLimit = 5;
  const pageLimit = 3;

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return tickets.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    let totalPages = Math.ceil(tickets.length / dataLimit);
    let groupSize =
      start + pageLimit <= totalPages ? pageLimit : totalPages - pageLimit;
    return new Array(groupSize || 0).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    setTicketsData();
  }, []);

  const setTicketsData = async () => {
    setisLoading(true);
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
        setPages(Math.ceil(data.length / dataLimit));
      }
    } catch (error) {
      setError(error);
    }
    setisLoading(false);
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
              {getPaginatedData().map((item, index) => (
                <TicketItem item={item} key={index} onItemClick={onItemClick} />
              ))}
              <PaginationComponent
                goToPreviousPage={goToPreviousPage}
                currentPage={currentPage}
                getPaginationGroup={getPaginationGroup}
                changePage={changePage}
                pages={pages}
                goToNextPage={goToNextPage}
              />
            </>
          ) : isLoading ? (
            <Loader />
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
