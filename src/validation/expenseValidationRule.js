const expenseValidation = {
  title: {
    required: true,
    minLength: 3,
    maxLength: 50,
  },

  amount: {
    required: true,
    type: "number",
    min: 1,
  },

  category: {
    required: true,
  },

  expenseDate: {
    required: true,
  },

  paymentMethod: {
    required: true,
  },

  description: {
    required: false,
    maxLength: 250,
  },

  receipt: {
    required: false,
  },

  status: {
    required: false,
  },

  recurring: {
    required: false,
  },
};

export default expenseValidation;
