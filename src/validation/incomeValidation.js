const incomeValidation = {
  title: {
    required: true,
    minLength: 3,
    maxLength: 50,
  },

  amount: {
    required: true,
    type: "number",
    min: 1,
    max: 10000000,
  },

  incomeSource: {
    required: true,
  },

  incomeDate: {
    required: true,
  },

  paymentMethod: {
    required: true,
  },

  description: {
    maxLength: 500,
  },
};

export default incomeValidation;
