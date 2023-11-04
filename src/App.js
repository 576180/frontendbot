import React, { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Chatbot from "./Components/Chatbot/Chatbot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/navbar/navbar";


const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Chatbot />
    </div>
  );
};

export default App;


