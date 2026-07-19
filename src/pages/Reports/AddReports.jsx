import "./Reports.css";
import { FaCalendarAlt, FaFilter, FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReportDashboard } from "../../features/report/reportThunk";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
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
  const dispatch = useDispatch();

  const { report, loading, error } = useSelector((state) => state.report);

  const [filters, setFilters] = useState({
    type: "Monthly",
    fromDate: "",
    toDate: "",
  });

  useEffect(() => {
    dispatch(getReportDashboard(filters));
  }, [dispatch]);

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateReport = async () => {
    const result = await dispatch(getReportDashboard(filters));

    if (result.meta.requestStatus !== "fulfilled") {
      return;
    }

    const reportData = result.payload;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Expense Tracker Report", 14, 20);
    doc.setFontSize(12);
    doc.text(`Generated On: ${new Date().toLocaleDateString("en-IN")}`, 14, 30);
    autoTable(doc, {
      startY: 40,
      head: [["Summary", "Amount"]],
      body: [
        ["Total Income", `₹${reportData.summary.totalIncome}`],
        ["Total Expense", `₹${reportData.summary.totalExpense}`],
        ["Balance", `₹${reportData.summary.balance}`],
      ],
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Category", "Amount"]],
      body: reportData.categories.map((item) => [item._id, `₹${item.amount}`]),
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Month", "Income", "Expense"]],
      body: reportData.monthly.map((item) => [
        item.month,
        `₹${item.income}`,
        `₹${item.expense}`,
      ]),
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Title", "Type", "Amount", "Date"]],
      body: reportData.recentTransactions.map((item) => [
        item.title,
        item.type,
        `₹${item.amount}`,
        new Date(item.date).toLocaleDateString("en-IN"),
      ]),
    });

    doc.save("Expense_Report.pdf");
  };

  const incomeExpenseData = report?.monthly || [];
  const expenseCategoryData =
    report?.categories?.map((item) => ({
      name: item._id,
      value: item.amount,
    })) || [];

  const COLORS = [
    "#2563eb",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#14b8a6",
  ];

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

      {/* Error */}

      {error && (
        <div
          style={{
            color: "red",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}

      {/* Summary */}

      <div className="top-cards">
        <div className="card">
          <h4>Total Income</h4>
          <h2>₹{report?.summary?.totalIncome?.toLocaleString() || 0}</h2>
        </div>

        <div className="card">
          <h4>Total Expense</h4>
          <h2>₹{report?.summary?.totalExpense?.toLocaleString() || 0}</h2>
        </div>

        <div className="card">
          <h4>Balance</h4>
          <h2>₹{report?.summary?.balance?.toLocaleString() || 0}</h2>
        </div>
      </div>

      {/* Filters */}

      <div className="filter-card">
        <div className="filter-title">
          <FaFilter />
          <span>Report Filters</span>
        </div>

        <div className="filter-grid">
          <div className="form-group">
            <label>Report Type</label>

            <select name="type" value={filters.type} onChange={handleChange}>
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          <div className="form-group">
            <label>From Date</label>

            <div className="date-box">
              <FaCalendarAlt />

              <input
                type="date"
                name="fromDate"
                value={filters.fromDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>To Date</label>

            <div className="date-box">
              <FaCalendarAlt />

              <input
                type="date"
                name="toDate"
                value={filters.toDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group search-btn-area">
            <button
              className="generate-btn"
              onClick={generateReport}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Report"}
            </button>
          </div>
        </div>
      </div>

      {/* Charts */}

      {incomeExpenseData.length > 0 ? (
        <>
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
        </>
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>
          No report data available.
        </h3>
      )}
    </div>
  );
}

export default Reports;
