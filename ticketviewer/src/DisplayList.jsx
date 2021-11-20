import React from "react";

function DisplayList({ input }) {
  return (
    <>
      {input.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}

export default DisplayList;
