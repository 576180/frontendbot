import React from "react";
// import "./typingindicator.css";
import { ThreeDots } from "react-loader-spinner";

export default function TypingIndicator() {
  return (
    <div className="px-4">
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#1bb0aa"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
