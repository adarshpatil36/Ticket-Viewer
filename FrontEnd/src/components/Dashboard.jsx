import axios from "axios";
import React, { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    getTicketsData();
  }, []);

  //   const api = axios.create({
  //     baseURL: "https://zendeskcodingchallenge9546.zendesk.com/api/v2",
  //     responseType: "json",
  //     responseEncoding: "utf8",
  //   });
  const api = {
    baseURL: "https://zendeskcodingchallenge9546.zendesk.com/api/v2",
    responseType: "json",
    responseEncoding: "utf8",
  };

  const getTicketsData = () => {
    fetch("http://localhost:3001").then((res) => console.log(">>", res));
  };
  return (
    <div className="Dashboard">
      <span>Ticket Viewer</span>
    </div>
  );
}
