import logo from "../../assets/Logo.png";
import "./Header.css";
import "../../styles/Theme.css";
function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <h2>Expense Traker</h2>
            <span>
              {" "}
              <span>Manage Your Daily Expenses</span>
            </span>
          </div>
        </div>
        <div className="header-right">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">🌙</button>
          <div className="profile">
            <img src="https://i.pravatar.cc/40" alt="Profile" />
            <span>Narsingh</span>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
