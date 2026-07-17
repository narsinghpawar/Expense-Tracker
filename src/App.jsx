import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import Headers from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import AddExpense from "./pages/Expense/AddExpense";
import AddIncome from "./pages/Income/AddIncome";
import AddBuget from "./pages/Budget/AddBudget";
import AddReports from "./pages/Reports/AddReports";
import GetAllTransaction from "./pages/ViewTransaction/GetAllTransaction";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Headers />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expense/add" element={<AddExpense />} />
          <Route path="/income/add" element={<AddIncome />} />
          <Route path="/budget" element={<AddBuget />} />
          <Route path="/report" element={<AddReports />} />
          <Route path="/getAllTransaction" element={<GetAllTransaction />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
