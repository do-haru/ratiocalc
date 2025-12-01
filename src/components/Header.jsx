import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-info">
        <button className="help-button">?</button>
      </div>
      <div className="header-title">
        <h1 className="title">비율 계산기</h1>
      </div>
    </div>
  );
};

export default Header;
