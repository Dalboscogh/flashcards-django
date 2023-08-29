import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Esse site é dedicado para Pamella, minha esposa, parceira e amor de minha vida. Sabe que desejo te dar todas as maravilhas do universo e compartilhar esse pequeno tempo que temos de vida e sonhos. Obrigado pelo apoio de tornar isso real.");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <div className="message">
        {message}
      </div>

      <div className="sidebar">
        <button onClick={handleSidebarToggle}>
          <i className="fa fa-bars"></i>
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Log in/Sign up</a>
          </li>
          <li>
            <a href="#">Flashcards</a>
          </li>
        </ul>
      </div>

      <div className={isSidebarOpen ? "main-content-open" : "main-content-closed"}>
        <Home publications={publications} readmeFiles={readmeFiles} />
      </div>
    </div>
  );
}

const Home = ({ publications, readmeFiles }) => {
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default App;
