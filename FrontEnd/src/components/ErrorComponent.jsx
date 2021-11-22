import React from "react";

export default function ErrorComponent({ message }) {
  return (
    <div className="ErrorComponent">
      Oops, there is an error : <span> {message}</span>
    </div>
  );
}
