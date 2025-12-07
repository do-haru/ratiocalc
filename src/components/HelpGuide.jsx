import { useState } from "react";
import "./HelpGuide.css";

const HelpGuide = ({ onClose, images }) => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const nextImage = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="HelpGuide">
      <div className="help-window" onClick={(e) => e.stopPropagation()}>
        <button className="help-close-btn" onClick={onClose}>
          x
        </button>
        <div className="help-slide">
          <button className="slide-btn left" onClick={prevImage}>
            ‹
          </button>
          <img className="slide-image" src={images[index]} alt="guide" />
          <button className="slide-btn right" onClick={nextImage}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpGuide;
