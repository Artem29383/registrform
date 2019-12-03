import { createSelector } from "reselect";


const getDataForm = state => {
  return state.formData.dataForm;
};

export const getDataFormReselect = createSelector([getDataForm], dataForm => dataForm);

const getIsFormValid = state => {
  return state.formData.isFormValid;
};

export const getIsFormValidReselect = createSelector([getIsFormValid], isFormValid => isFormValid);

const getIsAccount = state => {
  return state.formData.isAccount;
};

export const getIsAccountReselect = createSelector([getIsAccount], getIsAccount => getIsAccount);