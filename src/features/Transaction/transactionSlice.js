import { createSlice } from "@reduxjs/toolkit";
import { getAllTransactions } from "./transactionThunk";

const initialState = {
  transactions: [],
  selectedTransaction: null,
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,

  reducers: {
    setSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },

    clearSelectedTransaction: (state) => {
      state.selectedTransaction = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getAllTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })

      .addCase(getAllTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedTransaction, clearSelectedTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
