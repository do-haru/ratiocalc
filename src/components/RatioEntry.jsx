import "./RatioEntry.css";

const RatioEntry = () => {
  return (
    <div className="RatioEntry">
      <div className="Entry1">
        <input type="text" placeholder="재료" />
      </div>

      <div className="Entry2">
        <input type="text" inputMode="numeric" placeholder="값1" />
        <p> : </p>
        <input type="text" inputMode="numeric" placeholder="값2" />
      </div>
    </div>
  );
};

export default RatioEntry;
