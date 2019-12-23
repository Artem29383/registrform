import { createSelector } from 'reselect';

const getDataForm = state => {
  return state.formData.dataForm;
};

export const getDataFormSelector = createSelector([getDataForm], dataForm => dataForm);

const getIsFormValid = state => {
  return state.formData.isFormValid;
};

export const getIsFormValidSelector = createSelector([getIsFormValid], isFormValid => isFormValid);

const getIsAccount = state => {
  return state.formData.isAccount;
};

export const getIsAccountSelector = createSelector([getIsAccount], getIsAccount => getIsAccount);