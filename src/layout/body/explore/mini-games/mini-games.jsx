import {Container} from "react-bootstrap";
import './mini-games.scss';

const MiniGames = ({windowDimensions}) => {

  const images = {
    dice: process.env.PUBLIC_URL + '/images/explore/mini-games/dice.png',
    mutichoice: process.env.PUBLIC_URL + '/images/explore/mini-games/mutichoice.png',
    fillBlank: process.env.PUBLIC_URL + '/images/explore/mini-games/fill-blank.png'
  }

  return(
      <div className="mini-games">
        <span className="title-main">MINI GAMES</span>
        <Container>
          <div className="mini-games-box">
            <div className="mini-games-item">
              <img src={images.fillBlank} alt="fillBlank"/>
              <span className="title">Fill in blank</span>
            </div>
            <div className="mini-games-item center">
              <img src={images.mutichoice} alt="mutichoice"/>
              <span className="title">Multiple choice</span>
            </div>
            <div className="mini-games-item">
              <img src={images.dice} alt="dice"/>
              <span className="title">Arrange word</span>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default MiniGames;
