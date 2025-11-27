import "./RatioEntryList.css";

import RatioEntry from "./RatioEntry";

const RatioEntryList = ({ entries, onAdd, onDelete }) => {
  return (
    <div className="RatioEntryList">
      <div className="entry-container">
        {entries.map((id) => (
          <RatioEntry
            key={id}
            id={id}
            onDelete={onDelete}
            isDeleteDisabled={entries.length <= 2}
          />
        ))}
      </div>
      <button
        className="add-entry-btn"
        onClick={onAdd}
        disabled={entries.length >= 10}
      >
        + 추가하기
      </button>
    </div>
  );
};

export default RatioEntryList;
