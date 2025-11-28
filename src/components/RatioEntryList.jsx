import "./RatioEntryList.css";

import RatioEntry from "./RatioEntry";

const RatioEntryList = ({ entries, onDelete, onChange }) => {
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
    </div>
  );
};

export default RatioEntryList;
