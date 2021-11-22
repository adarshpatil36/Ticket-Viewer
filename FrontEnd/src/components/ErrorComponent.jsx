import React from "react";
import { CONSTANTS } from "../constants/constants";

export default function ErrorComponent({ message }) {
  return (
    <div className="ErrorComponent">
      {CONSTANTS.ERROR_MESSAGE} <span> {message}</span>
    </div>
  );
}
