import { useState } from "react";
import "./Expense.css";

function AddExpense() {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    expenseDate: "",
    paymentMethod: "",
    status: "Paid",
    recurring: "One Time",
    description: "",
    receipt: null,
  });

  return (
    <div className="expense-container">
      <div className="expense-card">
        <div className="expense-header">
          <h2>Add Expense</h2>
          <p>Track your daily expenses efficiently.</p>
        </div>

        <form>
          <div className="form-grid">
            <div className="form-group">
              <label>Expense Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Expense Title"
              />
            </div>

            <div className="form-group">
              <label>Amount *</label>
              <input type="number" name="amount" placeholder="₹ 0.00" />
            </div>

            <div className="form-group">
              <label>Category *</label>

              <select name="category">
                <option value="">Select Category</option>
                <option>Groceries</option>
                <option>Food & Dining</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Medical</option>
                <option>Electricity</option>
                <option>Water Bill</option>
                <option>Internet</option>
                <option>Education</option>
                <option>Entertainment</option>
                <option>Gas</option>
                <option>Others</option>
              </select>
            </div>

            <div className="form-group">
              <label>Expense Date *</label>

              <input type="date" name="expenseDate" />
            </div>

            <div className="form-group">
              <label>Payment Method *</label>

              <select name="paymentMethod">
                <option value="">Select</option>
                <option>Cash</option>
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Net Banking</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>

              <select name="status">
                <option>Paid</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="form-group">
              <label>Recurring</label>

              <select name="recurring">
                <option>One Time</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>

            <div className="form-group">
              <label>Receipt</label>

              <input type="file" name="receipt" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              placeholder="Write something..."
            />
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn">
              Save Expense
            </button>

            <button type="button" className="reset-btn">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
