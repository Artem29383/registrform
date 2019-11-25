import {getStorage} from "../Utils/getlocalStorage";

const SET_DATAFORM_NAME = 'SET_DATAFORM_NAME';
const SET_IS_FORM_VALID = 'SET_IS_FORM_VALID';
const SET_IS_ACCOUNT_CREATED = 'SET_IS_ACCOUNT_CREATED';

let initialState = {
  dataForm: getStorage(),
  isFormValid: [{
    'name': '',
    'email': '',
    'password': '',
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
          if ('name' === action.field) return {...n, 'name': action.text};
          if ('email' === action.field) return {...n, 'email': action.text};
          if ('password' === action.field)  return {...n, 'password': action.text};
          if ('Date of Birth' === action.field) return {...n, 'Date of Birth': action.text};
          if ('Phone number' === action.field)  return {...n, 'Phone number': action.text};
          else {return {...n}}
        })
      };
    case SET_IS_FORM_VALID: {
      return {
        ...state, isFormValid: state.isFormValid.map(n => {
          if ('name' === action.field) return {...n, 'name': action.isValid};
          if ('email' === action.field) return {...n, 'email': action.isValid};
          if ('password' === action.field)  return {...n, 'password': action.isValid};
          if ('Date of Birth' === action.field) return {...n, 'Date of Birth': action.isValid};
          if ('Phone number' === action.field)  return {...n, 'Phone number': action.isValid};
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

export const setDataFormName = (text, field) => ({type: SET_DATAFORM_NAME, text, field});
export const isFormValidCheck = (isValid, field) => ({type: SET_IS_FORM_VALID, isValid, field});
export const isAccountCreated = () => ({type: SET_IS_ACCOUNT_CREATED});

export default formReducer;