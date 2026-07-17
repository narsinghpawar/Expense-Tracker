const incomeValidation = {
  source: {
    required: true,
  },

  amount: {
    required: true,
    type: "number",
    min: 1,
  },

  paymentMethod: {
    required: true,
  },

  date: {
    required: true,
  },
};

export default incomeValidation;
