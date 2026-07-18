import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./GetAllTransaction.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTransactions } from "../../features/transaction/transactionThunk";
import { setSelectedTransaction } from "../../features/transaction/transactionSlice";
import { setSelectedExpense } from "../../features/expense/expenseSlice";

function GetAllTransaction() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const handleEdit = (item) => {
    dispatch(
      setSelectedExpense({
        id: item.id,
        title: item.title,
        amount: item.amount,
        category: item.category,
        expenseDate: item.date,
        paymentMethod: item.payment,
        status: item.status,
        recurring: item.recurring || "One Time",
        description: item.description || "",
        receipt: null,
      }),
    );

    navigate("/expense/add");
  };

  const transactions = [
    {
      id: 1,
      date: "16-Jul-2026",
      title: "Salary",
      category: "Salary",
      type: "Income",
      payment: "Bank",
      amount: "75000",
      status: "Completed",
    },
    {
      id: 2,
      date: "15-Jul-2026",
      title: "Groceries",
      category: "Food",
      type: "Expense",
      payment: "UPI",
      amount: "2500",
      status: "Completed",
    },
    {
      id: 3,
      date: "14-Jul-2026",
      title: "House Rent",
      category: "Rent",
      type: "Expense",
      payment: "Bank",
      amount: "15000",
      status: "Pending",
    },
  ];

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <div>
          <h2>View All Transactions</h2>
          <p>Manage all your income and expense records</p>
        </div>

        <button
          className="add-btn"
          onClick={() => navigate("/transaction/add")}
        >
          <FaPlus /> Add Transaction
        </button>
      </div>

      <div className="toolbar">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search Transaction..." />
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Category</th>
              <th>Type</th>
              <th>Payment</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>

                <td>
                  <span
                    className={
                      item.type === "Income"
                        ? "type income-badge"
                        : "type expense-badge"
                    }
                  >
                    {item.type}
                  </span>
                </td>

                <td>{item.payment}</td>

                <td>₹{item.amount}</td>

                <td>
                  <span
                    className={
                      item.status === "Completed"
                        ? "status completed"
                        : "status pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <button className="edit-btn" onClick={() => handleEdit(item)}>
                    <FaEdit />
                  </button>

                  <button className="delete-btn">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetAllTransaction;
