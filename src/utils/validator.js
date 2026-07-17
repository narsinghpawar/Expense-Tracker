export const validateField = (name, value, rules) => {
  const fieldRule = rules[name];

  if (!fieldRule) return "";

  if (
    fieldRule.required &&
    (value === undefined || value === null || value.toString().trim() === "")
  ) {
    return "This field is required";
  }

  if (fieldRule.minLength && value.length < fieldRule.minLength) {
    return `Minimum ${fieldRule.minLength} characters required`;
  }

  if (fieldRule.maxLength && value.length > fieldRule.maxLength) {
    return `Maximum ${fieldRule.maxLength} characters allowed`;
  }

  if (fieldRule.type === "number" && isNaN(value)) {
    return "Enter valid number";
  }

  if (fieldRule.min && Number(value) < fieldRule.min) {
    return `Minimum value is ${fieldRule.min}`;
  }

  if (fieldRule.max && Number(value) > fieldRule.max) {
    return `Maximum value is ${fieldRule.max}`;
  }

  return "";
};

export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const error = validateField(field, formData[field], rules);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};
