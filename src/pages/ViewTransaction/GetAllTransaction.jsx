import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./GetAllTransaction.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTransactions } from "../../features/Transaction/transactionThunk";
import { setSelectedTransaction } from "../../features/Transaction/transactionSlice";
import { setSelectedExpense } from "../../features/expense/expenseSlice";

function GetAllTransaction() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const { transactions, loading, error } = useSelector(
    (state) => state.transaction,
  );

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
            {loading ? (
              <tr>
                <td colSpan="8">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="8">{error}</td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td colSpan="8">No Transactions Found</td>
              </tr>
            ) : (
              transactions.map((item) => (
                <tr key={item._id}>
                  <td>
                    {new Date(item.expenseDate).toLocaleDateString("en-IN")}
                  </td>

                  <td>{item.title}</td>

                  <td>{item.category}</td>

                  <td>
                    <span className="type expense-badge">Expense</span>
                  </td>

                  <td>{item.paymentMethod}</td>

                  <td>₹{item.amount}</td>

                  <td>
                    <span
                      className={
                        item.status === "Paid"
                          ? "status completed"
                          : "status pending"
                      }
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(item)}
                    >
                      <FaEdit />
                    </button>

                    <button className="delete-btn">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetAllTransaction;
