import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = ({ title, subtitle, buttonText, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <img className="hero-image" src={imageUrl} alt="" />

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-button" onClick={() => navigate("/products")}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;
