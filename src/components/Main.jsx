import "./Main.css";

import RatioControls from "./RatioControls";
import RatioEntryList from "./RatioEntryList";
import RatioLabel from "./RatioLabel";

const Main = () => {
  return (
    <div className="Main">
      <RatioLabel />
      <RatioEntryList />
      <RatioControls />
    </div>
  );
};

export default Main;
