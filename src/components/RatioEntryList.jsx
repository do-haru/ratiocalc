import "./RatioEntryList.css";

import RatioEntry from "./RatioEntry";

import { useState } from "react";

const RatioEntryList = () => {
  // 기본 RatioEntry 3개
  const [entries, setEntries] = useState([1, 2, 3]);

  // RatioEntry 추가 기능 (최대 10개)
  const addEntry = () => {
    if (entries.length >= 10) return;
    setEntries((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="RatioEntryList">
      <div className="entry-container">
        {entries.map((id) => (
          <RatioEntry key={id} />
        ))}
      </div>
      <button
        className="add-entry-btn"
        onClick={addEntry}
        disabled={entries.length >= 10}
      >
        + 추가하기
      </button>
    </div>
  );
};

export default RatioEntryList;
