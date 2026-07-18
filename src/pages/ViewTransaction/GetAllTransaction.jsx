import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaWallet,
  FaArrowDown,
  FaExchangeAlt,
} from "react-icons/fa";
import "./GetAllTransaction.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTransactions } from "../../features/transaction/transactionThunk";

function GetAllTransaction() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);
  // const { transactions, loading, error } = useSelector(
  //   (state) => state.transaction,
  // );
  const transactions = [
    {
      id: 1,
      date: "16-Jul-2026",
      title: "Salary",
      category: "Salary",
      type: "Income",
      payment: "Bank",
      amount: "₹75,000",
      status: "Completed",
    },
    {
      id: 2,
      date: "15-Jul-2026",
      title: "Groceries",
      category: "Food",
      type: "Expense",
      payment: "UPI",
      amount: "₹2,500",
      status: "Completed",
    },
    {
      id: 3,
      date: "14-Jul-2026",
      title: "House Rent",
      category: "Rent",
      type: "Expense",
      payment: "Bank",
      amount: "₹15,000",
      status: "Pending",
    },
    {
      id: 4,
      date: "13-Jul-2026",
      title: "Freelancing",
      category: "Business",
      type: "Income",
      payment: "Bank",
      amount: "₹20,000",
      status: "Completed",
    },
    {
      id: 5,
      date: "12-Jul-2026",
      title: "Shopping",
      category: "Shopping",
      type: "Expense",
      payment: "Card",
      amount: "₹6,200",
      status: "Completed",
    },
  ];

  return (
    <div className="transaction-container">
      {/* Header */}
      <div className="transaction-header">
        <div>
          <h2>View All Transactions</h2>
          <p>Manage all your income and expense records</p>
        </div>

        <button className="add-btn">
          <FaPlus /> Add Transaction
        </button>
      </div>

      {/* Search & Filter */}
      <div className="toolbar">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search Transaction..." />
        </div>
      </div>

      {/* Table */}
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
                <td>{item.amount}</td>
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
                  <button className="edit-btn">
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

      {/* Pagination */}
      <div className="pagination">
        <button>Previous</button>

        <div className="pages">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <button>Next</button>
      </div>
    </div>
  );
}

export default GetAllTransaction;
