import { getStorage } from '../utils/getlocalStorage';
import {
  SET_DATAFORM_NAME,
  SET_IS_ACCOUNT_CREATED,
  SET_IS_FORM_VALID
} from './actions';
import deepCopy from '../utils/deepCopy';

const initialState = {
  dataForm: getStorage(),
  isFormValid: {
    'Name': '',
    'Email': '',
    'Password': '',
    'Date of Birth': '',
    'Phone number': ''
  },
  isAccount: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    
    
    case SET_DATAFORM_NAME: {
      const isDataFormCopy = deepCopy(state.dataForm);
      const { text, fieldName } = action.payload;
      isDataFormCopy[fieldName] = text;
      return {
        ...state,
        dataForm: isDataFormCopy
      };
    }
    
    
    case SET_IS_FORM_VALID: {
      const isFormValidCopy = deepCopy(state.isFormValid);
      const { text, fieldName } = action.payload;
      isFormValidCopy[fieldName] = text;
      return {
        ...state,
        isFormValid: isFormValidCopy
      };
    }
    
    
    case SET_IS_ACCOUNT_CREATED:
      return { ...state, isAccount: true };
    
    
    default:
      return state;
  }
};


export default reducers;