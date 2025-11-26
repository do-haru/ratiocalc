import RatioEntry from "./RatioEntry";
import "./RatioEntryList.css";

const RatioEntryList = () => {
  return (
    <div className="RatioEntryList">
      <div className="entry-container">
        <RatioEntry />
        <RatioEntry />
        <RatioEntry />
      </div>
      <button className="add-entry-btn">+ 추가하기</button>
    </div>
  );
};

export default RatioEntryList;
