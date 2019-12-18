export const isValidFields = (dataForm, isFormValid) => {
  for (let key in dataForm) {
    if (!dataForm[key] || isFormValid[key]) {
      return true;
    }
  }
  return false;
};