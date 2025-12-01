import "./RatioLabel.css";

const RatioLabel = () => {
  return (
    <div className="RatioLabel">
      <div className="Label1">
        <input type="text" value="재료" />
      </div>
      <div className="Label2">
        <input type="text" value="값1" />
        <p> : </p>
        <input type="text" value="값2" />
      </div>
      <div className="Label3">
        <button className="delete-entry-btn" disabled></button>
      </div>
    </div>
  );
};

export default RatioLabel;
