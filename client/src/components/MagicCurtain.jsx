import CurtainCards from "./CurtainCards";
import "./MagicCurtain.css";

const MagicCurtain = () => {
  return (
    <div className="magic-curtain">
      <div className="magic-curtain-content">
        <h1>The Magic of Bloom</h1>
      </div>{" "}
      <div className="magic-wand">
        <div className="black"></div>
        <div className="white"></div>
      </div>
      <CurtainCards/>
    </div>
  );
};

export default MagicCurtain;
