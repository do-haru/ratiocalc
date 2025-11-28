import "./Main.css";

import RatioControls from "./RatioControls";
import RatioEntryList from "./RatioEntryList";
import RatioLabel from "./RatioLabel";

import { useState, useRef } from "react";

const Main = () => {
  // Entry 배열 (id, ingredient, value1, value2를 모두 state로 관리)
  // 기본 RatioEntry 3개
  const [entries, setEntries] = useState([
    { id: 1, ingredient: "", value1: "", value2: "" },
    { id: 2, ingredient: "", value1: "", value2: "" },
    { id: 3, ingredient: "", value1: "", value2: "" },
  ]);

  // id 카운터
  const nextId = useRef(4);

  // RatioEntry 추가 기능 (최대 10개)
  const addEntry = () => {
    if (entries.length >= 10) return;
    setEntries((prev) => [
      ...prev,
      { id: nextId.current, ingredient: "", value1: "", value2: "" },
    ]);
    nextId.current += 1;
  };

  // RatioEntry 값 변경
  const updateEntry = (id, field, value) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id == id ? { ...entry, [field]: value } : entry
      )
    );
  };

  // RatioEntry 삭제 기능 (최소 2개)
  const deleteEntry = (id) => {
    if (entries.length <= 2) return;
    setEntries((prev) => prev.filter((item) => item.id !== id));
  };

  // RatioEntry 초기화 기능 (처음 상태로 되돌림)
  const resetEntries = () => {
    nextId.current = 4;
    setEntries([
      { id: 1, ingredient: "", value1: "", value2: "" },
      { id: 2, ingredient: "", value1: "", value2: "" },
      { id: 3, ingredient: "", value1: "", value2: "" },
    ]);
  };

  return (
    <div className="Main">
      <RatioLabel />
      <RatioEntryList
        entries={entries}
        onAdd={addEntry}
        onDelete={deleteEntry}
        onChange={updateEntry}
      />
      <RatioControls onReset={resetEntries} />
    </div>
  );
};

export default Main;
