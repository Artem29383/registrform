import {getStorage} from "../Utils/getlocalStorage";

const SET_DATAFORM_NAME = 'SET_DATAFORM_NAME';
const SET_IS_FORM_VALID = 'SET_IS_FORM_VALID';
const SET_IS_ACCOUNT_CREATED = 'SET_IS_ACCOUNT_CREATED';

let initialState = {
  dataForm: getStorage(),
  isFormValid: [{
    'Name': '',
    'Email': '',
    'Password': '',
    'Date of Birth': '',
    'Phone number': ''
  }],
  isAccount: false
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATAFORM_NAME:
      return {
        ...state, dataForm: state.dataForm.map(n => {
          for (let key in n) {
            if (action.field === key) {
              return {...n, [key]: action.text}
            }
          }
        })
      };
    case SET_IS_FORM_VALID: {
      return {
        ...state, isFormValid: state.isFormValid.map(n => {
          for (let key in n) {
            if (action.field === key) {
              return {...n, [key]: action.isValid}
            }
          }
        })
      };
    }
    case SET_IS_ACCOUNT_CREATED:
      return {...state, isAccount: true};
    default:
      return state;
  }
};

export const setDataFormName = (text, field) => ({type: SET_DATAFORM_NAME, text, field});
export const isFormValidCheck = (isValid, field) => ({type: SET_IS_FORM_VALID, isValid, field});
export const isAccountCreated = () => ({type: SET_IS_ACCOUNT_CREATED});

export default formReducer;