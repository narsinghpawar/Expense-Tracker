import "./Dashboard.css";

import {
  FaMoneyBillWave,
  FaArrowDown,
  FaWallet,
  FaUtensils,
  FaCar,
  FaShoppingBag,
  FaFileInvoiceDollar,
  FaPlusCircle,
  FaChartBar,
  FaBullseye,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdSavings } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      {/* ===================== Top Cards ===================== */}

      <div className="top-cards">
        <div className="card">
          <div className="card-icon income-icon">
            <FaMoneyBillWave />
          </div>

          <div className="card-content">
            <p>Total Income</p>
            <h2>₹58,450</h2>
            <span className="green">↑ 12.5% from last month</span>
          </div>

          <BsThreeDotsVertical className="menu" />
        </div>

        <div className="card">
          <div className="card-icon expense-icon">
            <FaArrowDown />
          </div>

          <div className="card-content">
            <p>Total Expense</p>
            <h2>₹28,735</h2>
            <span className="red">↑ 8.3% from last month</span>
          </div>

          <BsThreeDotsVertical className="menu" />
        </div>

        <div className="card">
          <div className="card-icon balance-icon">
            <FaWallet />
          </div>

          <div className="card-content">
            <p>Balance</p>
            <h2>₹1,25,430</h2>
            <span>Updated Now</span>
          </div>

          <BsThreeDotsVertical className="menu" />
        </div>
      </div>

      {/* ================= Bottom ================= */}

      <div className="bottom-grid">
        {/* Budget */}

        <div className="panel">
          <div className="panel-header">
            <h3>Budget Summary</h3>
            <a href="/">View All</a>
          </div>

          <div className="budget-item">
            <div className="budget-title">
              <div className="budget-icon food">
                <FaUtensils />
              </div>
              <span>Groceries</span>
            </div>

            <div className="progress">
              <div style={{ width: "76%" }}></div>
            </div>
          </div>
          <div className="budget-item">
            <div className="budget-title">
              <div className="budget-icon food">
                <FaUtensils />
              </div>
              <span>Food & Dining</span>
            </div>

            <div className="progress">
              <div style={{ width: "76%" }}></div>
            </div>
          </div>

          <div className="budget-item">
            <div className="budget-title">
              <div className="budget-icon transport">
                <FaCar />
              </div>

              <span>Transport</span>
            </div>

            <div className="progress">
              <div style={{ width: "81%" }}></div>
            </div>
          </div>

          <div className="budget-item">
            <div className="budget-title">
              <div className="budget-icon shopping">
                <FaShoppingBag />
              </div>

              <span>Shopping</span>
            </div>

            <div className="progress">
              <div style={{ width: "62%" }}></div>
            </div>
          </div>

          <div className="budget-item">
            <div className="budget-title">
              <div className="budget-icon bills">
                <FaFileInvoiceDollar />
              </div>

              <span>Bills & Utilities</span>
            </div>

            <div className="progress">
              <div style={{ width: "79%" }}></div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}

        <div className="panel">
          <div className="panel-header">
            <h3>Recent Transactions</h3>
            <a href="/">View All</a>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="circle swiggy">S</div>

              <div>
                <h4>Swiggy</h4>
                <small>Food</small>
              </div>
            </div>

            <span className="red">-₹650</span>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="circle uber">U</div>

              <div>
                <h4>Uber</h4>
                <small>Travel</small>
              </div>
            </div>

            <span className="red">-₹320</span>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="circle salary">
                <FaUniversity />
              </div>

              <div>
                <h4>Salary</h4>
                <small>Income</small>
              </div>
            </div>

            <span className="green">+₹58,450</span>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="panel">
          <h3>Quick Actions</h3>

          <div className="quick-grid">
            <button onClick={() => navigate("/expense/add")}>
              <FaPlusCircle />
              Add Transaction
            </button>

            <button onClick={() => navigate("/income/add")}>
              <FaMoneyBillWave />
              Add Income
            </button>

            <button onClick={() => navigate("/report")}>
              <FaChartBar />
              Reports
            </button>

            <button
              className="full-btn"
              onClick={() => navigate("/getAllTransaction")}
            >
              <FaCalendarAlt />
              View Transaction
            </button>

            {/* <button
              className="full-btn"
              onClick={() => navigate("billReminder")}
            >
              <FaCalendarAlt />
              Bills Reminder
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
