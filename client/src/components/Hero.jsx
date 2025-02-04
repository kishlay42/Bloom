import "./Hero.css";
const Hero = () => {
  return (
    <>
      <h1 className="hero-heading">
        Welcome to Bloom
        <br />A New Way to Connect Grow. and Thrive
      </h1>
      <p className="hero-paragraph">
        Break free from the noise of traditional social media. Discover a
        platform built to nourish<br/> meaningful relationships and empower personal
        growth.
      </p>
      <div className="hero-buttons">
        <button className="join-button">Join the Movement</button>
        <button className="learn-button">Learn More</button>
      </div>
    </>
  );
};

export default Hero;
