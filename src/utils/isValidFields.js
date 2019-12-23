export const isValidFields = (dataForm, formValid) => {
  for (let key in dataForm) {
    if (!dataForm[key] || formValid[key]) {
      return true;
    }
  }
  return false;
};