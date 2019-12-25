export const isValidFields = (dataForm, ids) => {
  return ids.every(field => dataForm[field].isValid)
};