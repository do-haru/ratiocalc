import "./RatioEntry.css";

const RatioEntry = () => {
  return (
    <div className="RatioEntry">
      <input type="text" placeholder="재료" />
      <p> : </p>
      <input type="number" placeholder="값1" />
      <p> : </p>
      <input type="number" placeholder="값2" />
    </div>
  );
};

export default RatioEntry;
