import "./Footer.css";
import "../../styles/Theme.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <span>© {new Date().getFullYear()}</span>
          <span>Daily Expense Tracker</span>
        </div>
        <div className="footer-center">
          <span>Version 1.0.0</span>
        </div>
        <div className="footer-right">
          {" "}
          <span>Developed by</span>
          <strong>Narsingh Pawar</strong>
        </div>
      </footer>
    </>
  );
}
export default Footer;
