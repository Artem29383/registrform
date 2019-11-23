import {getStorage} from "../Utils/getlocalStorage";

const SET_DATAFORM_NAME = 'SET_DATAFORM_NAME';
const SET_DATAFORM_EMAIL = 'SET_DATAFORM_EMAIL';
const SET_DATAFORM_PASSWORD = 'SET_DATAFORM_PASSWORD';
const SET_DATAFORM_DATE_OF_BIRTH = 'SET_DATAFORM_DATE_OF_BIRTH';
const SET_DATAFORM_PHONE = 'SET_DATAFORM_PHONE';
const SET_IS_FORM_VALID = 'SET_IS_FORM_VALID';
const SET_IS_ACCOUNT_CREATED = 'SET_IS_ACCOUNT_CREATED';

let initialState = {
  dataForm: getStorage(),
  isFormValid: [{
    name: false,
    email: false,
    password: false,
    dateOfBirth: false,
    phone: false
  }],
  isAccount: false
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATAFORM_NAME:
      return {
        ...state, dataForm: state.dataForm.map(n => {
          return {...n, name: action.name}
        })
      };
    case SET_DATAFORM_EMAIL:
      return {
        ...state, dataForm: state.dataForm.map(n => {
          return {...n, email: action.email}
        })
      };
    case SET_DATAFORM_PASSWORD:
      return {
        ...state, dataForm: state.dataForm.map(n => {
          return {...n, password: action.password}
        })
      };
    case SET_DATAFORM_DATE_OF_BIRTH:
      return {
        ...state, dataForm: state.dataForm.map(n => {
          return {...n, dateOfBirth: action.dateOfBirth}
        })
      };
    case SET_DATAFORM_PHONE:
      return {
        ...state, dataForm: state.dataForm.map(n => {
          return {...n, phone: action.phone}
        })
      };
    case SET_IS_FORM_VALID: {
      return {
        ...state, isFormValid: state.isFormValid.map(n => {
          console.log(n);
          if ('name' === action.field) return {...n, name: action.isValid};
          if ('email' === action.field) return {...n, email: action.isValid};
          if ('password' === action.field)  return {...n, password: action.isValid};
          if ('date of birth' === action.field) return {...n, dateOfBirth: action.isValid};
          if ('phone number' === action.field)  return {...n, phone: action.isValid};
          else {return {...n}}
        })
      };
    }
    case SET_IS_ACCOUNT_CREATED:
    return {...state, isAccount: true};
    default:
      return state;
  }
};

export const setDataFormName = (name) => ({type: SET_DATAFORM_NAME, name});
export const setDataFormEmail = (email) => ({type: SET_DATAFORM_EMAIL, email});
export const setDataFormPassword = (password) => ({type: SET_DATAFORM_PASSWORD, password});
export const setDataFormBirth = (dateOfBirth) => ({type: SET_DATAFORM_DATE_OF_BIRTH, dateOfBirth});
export const setDataFormPhone = (phone) => ({type: SET_DATAFORM_PHONE, phone});
export const isFormValidCheck = (isValid, field) => ({type: SET_IS_FORM_VALID, isValid, field});
export const isAccountCreated = () => ({type: SET_IS_ACCOUNT_CREATED});

export default formReducer;