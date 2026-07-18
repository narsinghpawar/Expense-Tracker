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
import { clearSelectedExpense } from "../../features/expense/expenseSlice";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddExpense = () => {
    dispatch(clearSelectedExpense());
    navigate("/expense/add");
  };
  return (
    <div className="dashboard">
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
            <button onClick={handleAddExpense}>
              <FaPlusCircle />
              Add Expense
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
