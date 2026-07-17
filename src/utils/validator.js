const validator = (name, value, rules) => {
  const fieldRule = rules[name];

  if (!fieldRule) {
    return "";
  }

  // Required

  if (fieldRule.required) {
    if (
      value === undefined ||
      value === null ||
      value.toString().trim() === ""
    ) {
      return "This field is required";
    }
  }

  // Min Length

  if (fieldRule.minLength) {
    if (value.length < fieldRule.minLength) {
      return `Minimum ${fieldRule.minLength} characters required`;
    }
  }

  // Max Length

  if (fieldRule.maxLength) {
    if (value.length > fieldRule.maxLength) {
      return `Maximum ${fieldRule.maxLength} characters allowed`;
    }
  }

  // Number

  if (fieldRule.type === "number") {
    if (isNaN(value)) {
      return "Enter valid number";
    }
  }

  // Minimum Value

  if (fieldRule.min) {
    if (Number(value) < fieldRule.min) {
      return `Minimum value is ${fieldRule.min}`;
    }
  }

  // Maximum Value

  if (fieldRule.max) {
    if (Number(value) > fieldRule.max) {
      return `Maximum value is ${fieldRule.max}`;
    }
  }

  return "";
};

export default validator;
