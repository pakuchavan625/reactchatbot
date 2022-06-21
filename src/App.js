import React, { useEffect, useState } from "react";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ChatbotComponents/ActionProvider";
import config from "./ChatbotComponents/Config";
import MessageParser from "./ChatbotComponents/MessageParser";
import "react-chatbot-kit/build/main.css";

function App() {
  return (
    <div className="box-wrapper">
      <div className="left-box">
        <header className="main-title">React Simple Chatbot</header>
        <header className="sub-title">A Simple React Chatbot component</header>
        <div className="icon">
          <div className="left-icon">
            <span class="fa-brands fa-facebook"></span>
            <span>Share</span>
            <span>100</span>
          </div>
          <div className="right-icon">
            <span class="fa-brands fa-twitter"></span>
            <span>twitter</span>
          </div>
        </div>
        <button className="btn btn-outline-light  button">Documnent</button>
      </div>
      <div className="right-box">
        <div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
