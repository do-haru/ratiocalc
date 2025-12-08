import "./RatioEntryList.css";

import RatioEntry from "./RatioEntry";

const RatioEntryList = ({
  entries,
  onDelete,
  onChange,
  baseValue1Ref,
  baseValue2Ref,
}) => {
  return (
    <div className="RatioEntryList">
      <div className="entry-container">
        {entries.map((entry, index) => (
          <RatioEntry
            key={entry.id}
            entry={entry}
            onDelete={onDelete}
            onChange={onChange}
            isDeleteDisabled={entries.length <= 2}
            baseValue1Ref={index === 0 ? baseValue1Ref : null}
            baseValue2Ref={index === 0 ? baseValue2Ref : null}
          />
        ))}
      </div>
    </div>
  );
};

export default RatioEntryList;
