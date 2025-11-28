import "./RatioEntryList.css";

import RatioEntry from "./RatioEntry";

const RatioEntryList = ({ entries, onAdd, onDelete, onChange }) => {
  return (
    <div className="RatioEntryList">
      <div className="entry-container">
        {entries.map((entry) => (
          <RatioEntry
            key={entry.id}
            entry={entry}
            onDelete={onDelete}
            onChange={onChange}
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
