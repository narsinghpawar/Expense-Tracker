import "./Reports.css";
import { FaCalendarAlt, FaFilter, FaDownload } from "react-icons/fa";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

function Reports() {
  const incomeExpenseData = [
    { month: "Jan", income: 50000, expense: 32000 },
    { month: "Feb", income: 62000, expense: 38000 },
    { month: "Mar", income: 58000, expense: 42000 },
    { month: "Apr", income: 70000, expense: 47000 },
    { month: "May", income: 75000, expense: 50000 },
    { month: "Jun", income: 82000, expense: 54000 },
  ];

  const expenseCategoryData = [
    { name: "Food", value: 12000 },
    { name: "Rent", value: 18000 },
    { name: "Shopping", value: 9000 },
    { name: "Travel", value: 6000 },
    { name: "Bills", value: 7000 },
  ];

  const COLORS = ["#2563eb", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="reports-container">
      {/* Header */}

      <div className="reports-header">
        <div className="header-left">
          <h1>Financial Reports</h1>
          <p>Track your income, expenses and savings with analytics.</p>
        </div>

        <button className="download-btn">
          <FaDownload />
          Export Report
        </button>
      </div>

      {/* Filter */}

      <div className="filter-card">
        <div className="filter-title">
          <FaFilter />
          <span>Report Filters</span>
        </div>

        <div className="filter-grid">
          <div className="form-group">
            <label>Report Type</label>

            <select>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>

          <div className="form-group">
            <label>From Date</label>

            <div className="date-box">
              <FaCalendarAlt />
              <input type="date" />
            </div>
          </div>

          <div className="form-group">
            <label>To Date</label>

            <div className="date-box">
              <FaCalendarAlt />
              <input type="date" />
            </div>
          </div>

          {/* <div className="form-group">
            <label>Category</label>

            <select>
              <option>All Categories</option>
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Bills</option>
            </select>
          </div> */}

          <div className="form-group search-btn-area">
            <button className="generate-btn">Generate Report</button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="summary-grid">
        <div className="summary-card income">
          <h4>Total Income</h4>
          <h2>₹82,000</h2>
        </div>

        <div className="summary-card expense">
          <h4>Total Expense</h4>
          <h2>₹54,000</h2>
        </div>

        <div className="summary-card savings">
          <h4>Total Savings</h4>
          <h2>₹28,000</h2>
        </div>
      </div>

      {/* Charts */}

      <div className="chart-grid">
        {/* Bar Chart */}

        <div className="chart-card">
          <div className="chart-header">
            <h3>Income vs Expense</h3>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={incomeExpenseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="income" fill="#22c55e" radius={[8, 8, 0, 0]} />

              <Bar dataKey="expense" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}

        <div className="chart-card">
          <div className="chart-header">
            <h3>Expense Categories</h3>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={expenseCategoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {expenseCategoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}

      <div className="chart-card full-chart">
        <div className="chart-header">
          <h3>Monthly Spending Trend</h3>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={incomeExpenseData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Reports;
