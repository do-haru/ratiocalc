import "./RatioEntry.css";

const RatioEntry = ({
  entry,
  onDelete,
  isDeleteDisabled,
  onChange,
  baseValue1Ref,
  baseValue2Ref,
}) => {
  const { id, ingredient, value1, value2 } = entry;

  return (
    <div className="RatioEntry">
      <div className="Entry1">
        <input
          type="text"
          placeholder="재료"
          value={ingredient}
          onChange={(e) => onChange(id, "ingredient", e.target.value)}
        />
      </div>
      <div className="Entry2">
        <input
          type="text"
          inputMode="numeric"
          placeholder="값1"
          value={value1}
          onChange={(e) => onChange(id, "value1", e.target.value)}
          ref={baseValue1Ref}
        />
        <p> : </p>
        <input
          type="text"
          inputMode="numeric"
          placeholder="값2"
          value={value2}
          onChange={(e) => onChange(id, "value2", e.target.value)}
          ref={baseValue2Ref}
        />
      </div>
      <div className="Entry3">
        <button
          className="delete-entry-btn"
          onClick={() => onDelete(id)}
          disabled={isDeleteDisabled}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default RatioEntry;
