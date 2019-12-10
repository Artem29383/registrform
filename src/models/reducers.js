import { getStorage } from '../utils/getlocalStorage';
import {
  SET_DATAFORM_NAME,
  SET_IS_ACCOUNT_CREATED,
  SET_IS_FORM_VALID
} from './actions';

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

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATAFORM_NAME:
      return {
        ...state, dataForm: state.dataForm.map(n => {
          return {...n, [action.payload[1]]: action.payload[0]}
        })
      };
    case SET_IS_FORM_VALID: {
      return {
        ...state, isFormValid: state.isFormValid.map(n => {
          return {...n, [action.payload[1]]: action.payload[0]}
        })
      };
    }
    case SET_IS_ACCOUNT_CREATED:
      return {...state, isAccount: true};
    default:
      return state;
  }
};


export default reducers;