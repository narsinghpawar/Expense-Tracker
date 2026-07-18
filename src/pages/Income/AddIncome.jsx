import "./AddIncome.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateField, validateForm } from "../../utils/validator";
import incomeValidation from "../../validation/incomeValidation";
import { addIncome } from "../../features/Income/IncomeThunk";

function AddIncome() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.income);

  const initialState = {
    title: "",
    amount: "",
    incomeSource: "",
    incomeDate: "",
    paymentMethod: "",
    description: "",
  };

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

    const error = validateField(name, value, incomeValidation);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData, incomeValidation);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await dispatch(addIncome(formData)).unwrap();

      alert("Income Added Successfully");

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
    <div className="income-container">
      <div className="income-card">
        <div className="income-header">
          <h2>Add Income</h2>
          <p>Record and manage your income efficiently.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="income-grid">
            <div className="form-group">
              <label>Income Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Salary, Freelancing..."
              />
              <p className="error">{errors.title}</p>
            </div>

            <div className="form-group">
              <label>Amount *</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="₹ 0.00"
              />
              <p className="error">{errors.amount}</p>
            </div>

            <div className="form-group">
              <label>Income Source *</label>

              <select
                name="incomeSource"
                value={formData.incomeSource}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Source</option>
                <option>Salary</option>
                <option>Business</option>
                <option>Freelancing</option>
                <option>Rental Income</option>
                <option>Investment</option>
                <option>Interest</option>
                <option>Gift</option>
                <option>Bonus</option>
                <option>Refund</option>
                <option>Others</option>
              </select>

              <p className="error">{errors.incomeSource}</p>
            </div>

            <div className="form-group">
              <label>Income Date *</label>

              <input
                type="date"
                name="incomeDate"
                value={formData.incomeDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <p className="error">{errors.incomeDate}</p>
            </div>

            <div className="form-group">
              <label>Payment Method *</label>

              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Method</option>
                <option>Bank Transfer</option>
                <option>UPI</option>
                <option>Cash</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Cheque</option>
              </select>

              <p className="error">{errors.paymentMethod}</p>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              placeholder="Additional Notes..."
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <p className="error">{errors.description}</p>
          </div>

          {error && <p className="error">{error}</p>}

          <div className="button-group">
            <button className="save-btn" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Income"}
            </button>

            <button className="reset-btn" type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddIncome;
