import "./RatioControls.css";

const RatioControls = ({ entries, onAdd, onReset, onCalculate }) => {
  return (
    <div className="RatioControls">
      <div className="controls-add">
        <button
          className="add-entry-btn"
          onClick={onAdd}
          disabled={entries.length >= 10}
        >
          + 추가하기
        </button>
      </div>

      <div className="controls-actions">
        <button className="reset-btn" onClick={onReset}>
          초기화
        </button>
        <button className="calculate-btn" onClick={onCalculate}>
          계산
        </button>
      </div>
    </div>
  );
};

export default RatioControls;
