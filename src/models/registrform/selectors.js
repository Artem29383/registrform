import { createSelector } from 'reselect';

const getDataForm = state => {
  return state.formData.dataForm.entities;
};

export const getDataFormSelector = createSelector([getDataForm], dataForm => dataForm);

const getDataFormId = state => {
  return state.formData.dataForm.ids;
};

export const getDataFormIdSelector = createSelector([getDataFormId], id => id);


const getIsAccount = state => {
  return state.formData.isAccount;
};

export const getIsAccountSelector = createSelector([getIsAccount], getIsAccount => getIsAccount);