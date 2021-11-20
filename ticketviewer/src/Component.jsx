import React from "react";
import DisplayDate from "./DisplayDate";
import DisplayList from "./DisplayList";

function Component({ input }) {
  const getWrappedComponent = () => <div>{input}</div>;

  return (
    <>
      {!input ? (
        <DisplayDate></DisplayDate>
      ) : Array.isArray(input) ? (
        <DisplayList input={input}></DisplayList>
      ) : (
        typeof input != "object" && getWrappedComponent()
      )}
    </>
  );
}

export default Component;
