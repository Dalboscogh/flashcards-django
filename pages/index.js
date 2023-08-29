import React, { useState, useEffect } from "react";
import axios from "axios";

import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'
import image8 from '../assets/images/image8.jpg'
import image9 from '../assets/images/image9.jpg'
import image10 from '../assets/images/image10.jpg'
import image11 from '../assets/images/image11.jpg'
import image12 from '../assets/images/image12.jpg'
import image13 from '../assets/images/image13.jpg'
import image14 from '../assets/images/image14.jpg'


function App() {
  const [message, setMessage] = useState("Esse site é dedicado para Pamella, minha esposa, parceira e amor de minha vida. Sabe que desejo te dar todas as maravilhas do universo e compartilhar esse pequeno tempo que temos de vida e sonhos. Obrigado pelo apoio de tornar isso real.");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [image, setImage] = useState();
  const [currentImageId, setCurrentImageId] = useState();
  const [text, setText] = useState();
  const [caption, setCaption] = useState();
  
  function handleClick() {
    if (!image) {
        setText()
        setCaption('Oi, razão da minha felicidade')
        setImage(image1)
        setCurrentImageId(1)
    } else if (currentImageId === 1) {
        setText()
        setCaption('Meu xodó e dona do melhor dengo')
        setImage(image2)
        setCurrentImageId(2)
    } else if (currentImageId === 2) {
        setText()
        setCaption('Minha parceira para a vida')
        setImage(image3)
        setCurrentImageId(3)
    } else if (currentImageId == 0) {
        setImage()
        setCaption()
        setText('Te amo demais! S2')
        setCurrentImageId(1)
    } else if (currentImageId == 3) {
    setImage()
    setCaption()
    setText('Companheira nas doideras')
    setCurrentImageId(4)
    } else if (currentImageId == 4) {
      setImage()
      setCaption()
      setText('Que tem síndrome de Gumball')
      setCurrentImageId(5)
    } else if (currentImageId == 5) {
      setImage()
      setCaption()
      setText('Mas também sofre do beijo mais gostoso desse universo')
      setCurrentImageId(6)
    } else if (currentImageId == 6) {
      setImage()
      setCaption()
      setText('Você é meu cheiro')
      setCurrentImageId(7)
    } else if (currentImageId == 7) {
      setImage()
      setCaption()
      setText('Minha felicidade')
      setCurrentImageId(8)
    } else if (currentImageId == 8) {
      setImage()
      setCaption()
      setText('Meu tudo.')
      setCurrentImageId(9)
    } else if (currentImageId == 9) {
      setImage()
      setCaption()
      setText('A gente sempre tenta ser fit')
      setCurrentImageId(10)
    } else if (currentImageId == 10) {
      setImage()
      setCaption()
      setText('mas é um desafio, porque ficar de grudinho é a melhor coisa que existe')
      setCurrentImageId(11)
    } else if (currentImageId == 11) {
      setImage()
      setCaption()
      setText('Somos um casalzão lindo')
      setCurrentImageId(12)
    } else if (currentImageId == 12) {
      setImage()
      setCaption()
      setText('Sou feliz por você ser minha família')
      setCurrentImageId(13)
    } else if (currentImageId == 13) {
      setImage()
      setCaption()
      setText('Porque você é meu raio de sol')
      setCurrentImageId(14)
    }  else if (currentImageId == 14) {
      setImage()
      setCaption()
      setText('Meu tudo.')
      setCurrentImageId(0)
    }
}
  return (
    <div className="App">
      <div className="message">
        {message}
      </div>

      <div className="container">
                <div className="header">
                    <input type="button" value="Clique aqui" onClick={ handleClick }></input>
                    <h1>Para boiolagem</h1>
                </div>

                <p className="text">{ caption }</p>
                <div className="imageContainer">
                    <Image className="image" src={ image } />
                    <h1 className="text">{ text }</h1>
                </div>
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
    </div>
  );
}

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default App;
