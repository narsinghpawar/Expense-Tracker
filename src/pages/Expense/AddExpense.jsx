import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Expense.css";

import { addExpense } from "../../features/expense/expenseThunk";
import expenseValidation from "../../validation/expenseValidationRule";
import { validateField, validateForm } from "../../utils/validator";

const initialState = {
  title: "",
  amount: "",
  category: "",
  expenseDate: "",
  paymentMethod: "",
  status: "Paid",
  recurring: "One Time",
  description: "",
  receipt: null,
};

function AddExpense() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.expense);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value, expenseValidation);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, expenseValidation);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await dispatch(addExpense(formData)).unwrap();
      alert("Expense Added Successfully");
      setFormData(initialState);
      setErrors({});
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
  };

  return (
    <div className="expense-container">
      <div className="expense-card">
        <div className="expense-header">
          <h2>Add Expense</h2>
          <p>Track your daily expenses efficiently.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Expense Title */}
            <div className="form-group">
              <label>Expense Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Expense Title"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="error">{errors.title}</p>
            </div>

            {/* Amount */}
            <div className="form-group">
              <label>Amount *</label>
              <input
                type="number"
                name="amount"
                placeholder="₹ 0.00"
                value={formData.amount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="error">{errors.amount}</p>
            </div>

            {/* Category */}
            <div className="form-group">
              <label>Category *</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                onBlur={handleBlur}
              >
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

              <p className="error">{errors.category}</p>
            </div>

            {/* Expense Date */}
            <div className="form-group">
              <label>Expense Date *</label>

              <input
                type="date"
                name="expenseDate"
                value={formData.expenseDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <p className="error">{errors.expenseDate}</p>
            </div>

            {/* Payment Method */}
            <div className="form-group">
              <label>Payment Method *</label>

              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select</option>
                <option>Cash</option>
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Net Banking</option>
              </select>

              <p className="error">{errors.paymentMethod}</p>
            </div>

            {/* Status */}
            <div className="form-group">
              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Paid</option>
                <option>Pending</option>
              </select>

              <p className="error">{errors.status}</p>
            </div>

            {/* Recurring */}
            <div className="form-group">
              <label>Recurring</label>

              <select
                name="recurring"
                value={formData.recurring}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>One Time</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>

              <p className="error">{errors.recurring}</p>
            </div>

            {/* Receipt */}
            <div className="form-group">
              <label>Receipt</label>

              <input type="file" name="receipt" onChange={handleChange} />
            </div>
          </div>

          {/* Description */}
          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              name="description"
              rows="5"
              placeholder="Write something..."
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <p className="error">{errors.description}</p>
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? "Saving..." : "Save Expense"}
            </button>

            <button type="button" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
