import "./CurtainCards.css";

const CurtainCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-content">
          <img src="./images/polar.png" className="titleImg"/>
          <p>Introducing Bloom</p>
          <button className="learn-more-button">See More<img src="./images/arrow.svg" alt="" /> </button>
        </div>
        <div className="card-image">
          <img src="./images/card1.jpeg" alt="Card 1" />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
        <img src="./images/Vector.png" className="titleImg"/>
        <p>
            The Age of the Collective: From Hyper-Individualism to Networked
            Intelligence
          </p>
          <button className="learn-more-button">See More<img src="./images/arrow.svg" alt="" /> </button>
        </div>
        <div className="card-image">
          <img src="./images/card2.jpg" alt="Card 2" />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
        <img src="./images/semi.png" className="titleImg"/>
        <p>Social Media IS the Original Alignment Problem</p>
          <button className="learn-more-button">See More<img src="./images/arrow.svg" alt="" /> </button>
        </div>
        <div className="card-image">
          <img src="./images/card3.jpg" alt="Card 3" />
        </div>
      </div>
    </div>
  );
};

export default CurtainCards;