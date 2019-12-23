import { getStorage } from '../../utils/getlocalStorage';
import {
  SET_DATAFORM_NAME,
  SET_IS_ACCOUNT_CREATED,
  SET_IS_FORM_VALID
} from './actions';
import deepCopy from '../../utils/deepCopy';

const initialState = {
  dataForm: getStorage(),
  formValid: {
    'name': '',
    'email': '',
    'password': '',
    'dateOfBirth': '',
    'phoneNumber': '',
    'age': ''
  },
  isAccount: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    
    
    case SET_DATAFORM_NAME: {
      const dataFormCopy = deepCopy(state.dataForm);
      const { value, fieldName } = action.payload;
      dataFormCopy[fieldName] = value;
      return {
        ...state,
        dataForm: dataFormCopy
      };
    }
    
    
    case SET_IS_FORM_VALID: {
      const formValidCopy = deepCopy(state.formValid);
      const { value, fieldName } = action.payload;
      formValidCopy[fieldName] = value;
      return {
        ...state,
        formValid: formValidCopy
      };
    }
    
    
    case SET_IS_ACCOUNT_CREATED:
      return { ...state, isAccount: true };
    
    
    default:
      return state;
  }
};


export default reducers;