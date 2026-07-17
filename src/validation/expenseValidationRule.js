const expenseValidation = {
  title: {
    required: true,
    minLength: 3,
    maxLength: 50,
  },

  amount: {
    required: true,
    min: 1,
    max: 500000,
    type: "number",
  },

  category: {
    required: true,
  },

  paymentMethod: {
    required: true,
  },

  date: {
    required: true,
  },

  description: {
    maxLength: 200,
  },
};

export default expenseValidation;
