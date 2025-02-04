import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import MovingLogo from "./components/MovingLogo";
import LotusBloom from "./components/LotusBloom";
import MagicCurtain from "./components/MagicCurtain";
import LastSection from "./components/LastSection";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovingLogo />
      <Hero />
      <LotusBloom />
      <MagicCurtain/>
      <LastSection/>
      
    </div>
  );
};

export default App;
