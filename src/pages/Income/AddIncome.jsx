import "./AddIncome.css";
function AddIncome() {
  return (
    <div className="income-container">
      <div className="income-card">
        <div className="income-header">
          <h2>Add Income</h2>
          <p>Record and manage your income efficiently.</p>
        </div>

        <form>
          <div className="income-grid">
            <div className="form-group">
              <label>Income Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Salary, Freelancing..."
              />
            </div>

            <div className="form-group">
              <label>Amount *</label>
              <input type="number" name="amount" placeholder="₹ 0.00" />
            </div>

            <div className="form-group">
              <label>Income Source *</label>

              <select name="source">
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
            </div>

            <div className="form-group">
              <label>Income Date *</label>
              <input type="date" name="incomeDate" />
            </div>

            <div className="form-group">
              <label>Payment Method *</label>

              <select name="paymentMethod">
                <option value="">Select Method</option>
                <option>Bank Transfer</option>
                <option>UPI</option>
                <option>Cash</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Cheque</option>
              </select>
            </div>
          </div>{" "}
          {/* <-- Closing income-grid div */}
          <div className="form-group full-width">
            <label>Description</label>
            <textarea
              rows="5"
              name="description"
              placeholder="Additional Notes..."
            />
          </div>
          <div className="button-group">
            <button className="save-btn" type="submit">
              Save Income
            </button>

            <button className="reset-btn" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddIncome;
