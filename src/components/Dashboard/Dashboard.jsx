import "./Dashboard.css";
import {
  FaMoneyBillWave,
  FaArrowDown,
  FaWallet,
  FaPlusCircle,
  FaChartBar,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearSelectedExpense } from "../../features/expense/expenseSlice";
import { getDashboardSummary } from "../../features/dashboard/dashboardThunk";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Dashboard state from Redux
  const { summary, loading, error } = useSelector((state) => state.dashboard);

  // Load dashboard summary when page opens
  useEffect(() => {
    dispatch(getDashboardSummary());
  }, [dispatch]);

  const handleAddExpense = () => {
    dispatch(clearSelectedExpense());
    navigate("/expense/add");
  };

  return (
    <div className="dashboard">
      {/* Show error if API fails */}
      {error && (
        <div
          style={{
            color: "red",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          {typeof error === "string" ? error : "Unable to load dashboard data"}
        </div>
      )}

      <div className="top-cards">
        {/* Total Income */}
        <div className="card">
          <div className="card-icon income-icon">
            <FaMoneyBillWave />
          </div>

          <div className="card-content">
            <p>Total Income</p>

            <h2>
              {loading
                ? "Loading..."
                : `₹${summary?.totalIncome?.toLocaleString() || 0}`}
            </h2>

            <span className="green">Updated from database</span>
          </div>

          <BsThreeDotsVertical className="menu" />
        </div>

        {/* Total Expense */}
        <div className="card">
          <div className="card-icon expense-icon">
            <FaArrowDown />
          </div>

          <div className="card-content">
            <p>Total Expense</p>

            <h2>
              {loading
                ? "Loading..."
                : `₹${summary?.totalExpense?.toLocaleString() || 0}`}
            </h2>

            <span className="red">Updated from database</span>
          </div>

          <BsThreeDotsVertical className="menu" />
        </div>

        {/* Balance */}
        <div className="card">
          <div className="card-icon balance-icon">
            <FaWallet />
          </div>

          <div className="card-content">
            <p>Balance</p>

            <h2>
              {loading
                ? "Loading..."
                : `₹${summary?.balance?.toLocaleString() || 0}`}
            </h2>

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

            <button
              style={{
                border: "none",
                background: "none",
                color: "#3b82f6",
                cursor: "pointer",
              }}
              onClick={() => navigate("/getAllTransaction")}
            >
              View All
            </button>
          </div>

          {/* Dummy Data */}
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
