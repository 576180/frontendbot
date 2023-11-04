import React from "react";
import "./home.css"; // Import the CSS file
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <div className="main-body">
        <div className="home-left">
          <img src="https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg?w=740" alt="right"/>
        </div>
        <div className="home-right">
          <div className="right-body">
            <div className="btns-div">
              <Link to="dashboard">
                <button className="button">Dashboard</button>
              </Link>
              <Link to="chatbot">
                <button className="button">Chatbot</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
