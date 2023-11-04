import React from "react";
import Input from "./Input/input";
import Messagepart from "./messagepart/Messagepart";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div className="chatwindow_main">
      <div className="botsection">
        <Messagepart />
        <Input />
      </div>
    </div>
  );
};

export default Chatbot;
