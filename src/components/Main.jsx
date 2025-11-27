import "./Main.css";

import RatioControls from "./RatioControls";
import RatioEntryList from "./RatioEntryList";
import RatioLabel from "./RatioLabel";

import { useState, useRef } from "react";

const Main = () => {
  // 기본 RatioEntry 3개
  const [entries, setEntries] = useState([1, 2, 3]);

  // id 카운터
  const nextId = useRef(4);

  // RatioEntry 추가 기능 (최대 10개)
  const addEntry = () => {
    if (entries.length >= 10) return;
    setEntries((prev) => [...prev, nextId.current]);
    nextId.current += 1;
  };

  // RatioEntry 삭제 기능 (최소 2개)
  const deleteEntry = (id) => {
    if (entries.length <= 2) return;
    setEntries((prev) => prev.filter((item) => item !== id));
  };

  return (
    <div className="Main">
      <RatioLabel />
      <RatioEntryList
        entries={entries}
        onAdd={addEntry}
        onDelete={deleteEntry}
      />
      <RatioControls />
    </div>
  );
};

export default Main;
