import React, { useEffect, useState } from "react";

function DisplayDate({ input }) {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  useEffect(() => {
    startTimer();
  }, []);
  const startTimer = () => {
    Date.prototype.today = function () {
      return (
        (this.getDate() < 10 ? "0" : "") +
        this.getDate() +
        "/" +
        (this.getMonth() + 1 < 10 ? "0" : "") +
        (this.getMonth() + 1) +
        "/" +
        this.getFullYear()
      );
    };

    Date.prototype.timeNow = function () {
      return (
        (this.getHours() < 10 ? "0" : "") +
        this.getHours() +
        ":" +
        (this.getMinutes() < 10 ? "0" : "") +
        this.getMinutes() +
        ":" +
        (this.getSeconds() < 10 ? "0" : "") +
        this.getSeconds()
      );
    };
    setInterval(() => {
      let date = new Date();
      console.log(date.timeNow(), " ", date.today());
      setTime(date.timeNow());
      setDate(date.today());
    }, 1000);
  };

  return (
    <>
      {!input && (
        <div>
          {date} {time}
        </div>
      )}
    </>
  );
}

export default DisplayDate;
