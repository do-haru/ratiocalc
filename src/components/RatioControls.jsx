import "./RatioControls.css";

const RatioControls = ({ onReset }) => {
  return (
    <div className="RatioControls">
      <button className="reset-btn" onClick={onReset}>
        초기화
      </button>
      <button className="calculate-btn">계산</button>
    </div>
  );
};

export default RatioControls;
