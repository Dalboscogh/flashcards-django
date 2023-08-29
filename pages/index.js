import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Esse site é dedicado para Pamella, minha esposa, parceira e amor de minha vida. Sabe que desejo te dar todas as maravilhas do universo e compartilhar esse pequeno tempo que temos de vida e sonhos. Obrigado pelo apoio de tornar isso real.");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getLinkedInPublications = async () => {
    const response = await axios.get("https://api.linkedin.com/v2/me/publications");
    return response.data;
  };

  const getGitHubReadmeFiles = async () => {
    const response = await axios.get("https://api.github.com/users/Dalboscogh/repos");
    return response.data.map((repo) => repo.readme);
  };

  useEffect(() => {
    getLinkedInPublications().then((publications) => setPublications(publications));
    getGitHubReadmeFiles().then((readmeFiles) => setReadmeFiles(readmeFiles));
  }, []);

  const publications = useState([]);
  const readmeFiles = useState([]);

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
      <h2>Publicações do LinkedIn</h2>
      {publications.map((publication) => (
        <div key={publication.id}>
          <h3>{publication.title}</h3>
          <p>{publication.description}</p>
        </div>
      ))}
      <h2>Arquivos README do GitHub</h2>
      {readmeFiles.map((readmeFile) => (
        <div key={readmeFile.name}>
          <h3>{readmeFile.name}</h3>
          <p>{readmeFile.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
