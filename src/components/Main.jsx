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

  // RatioEntry 초기화 기능 (처음 상태로 되돌림)
  const resetEntries = () => {
    nextId.current += 100;
    setEntries([nextId.current, nextId.current + 1, nextId.current + 2]);
    nextId.current += 4;
  };

  return (
    <div className="Main">
      <RatioLabel />
      <RatioEntryList
        entries={entries}
        onAdd={addEntry}
        onDelete={deleteEntry}
      />
      <RatioControls onReset={resetEntries} />
    </div>
  );
};

export default Main;
