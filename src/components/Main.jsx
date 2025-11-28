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
        entry.id === id ? { ...entry, [field]: value } : entry
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

  // 계산
  const calculateEntries = () => {
    if (entries.length === 0) return;

    const base = entries[0];

    const baseValue1 = Number(base.value1);
    const baseValue2 = Number(base.value2);

    if (!baseValue1 || !baseValue2) {
      alert("첫 번째 항목의 값1과 값2를 모두 입력해주세요");
      return;
    }

    const ratio = baseValue2 / baseValue1;

    const ResultEntries = entries.map((entry, index) => {
      const v1 = entry.value1 === "" ? "" : Number(entry.value1);
      const v2 = entry.value2 === "" ? "" : Number(entry.value2);

      if (index === 0) return entry; // 기준 entry는 그대로 둠

      // 값1만 있는 경우
      if (v1 && !v2) {
        return {
          ...entry,
          value2: Math.round(v1 * ratio),
        };
      }

      // 값2만 있는 경우
      if (!v1 && v2) {
        return {
          ...entry,
          value1: Math.round(v2 / ratio),
        };
      }

      // 둘 다 없거나 둘 다 있으면 그대로 유지
      return entry;
    });
    setEntries(ResultEntries);
  };

  return (
    <div className="Main">
      <RatioLabel />
      <RatioEntryList
        entries={entries}
        onDelete={deleteEntry}
        onChange={updateEntry}
      />
      <RatioControls
        entries={entries}
        onAdd={addEntry}
        onReset={resetEntries}
        onCalculate={calculateEntries}
      />
    </div>
  );
};

export default Main;
