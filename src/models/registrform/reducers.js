import { getStorage } from '../../utils/getlocalStorage';
import {
  SET_DATAFORM_NAME,
  SET_IS_ACCOUNT_CREATED,
  SET_IS_FORM_VALID
} from './actions';
import deepCopy from '../../utils/deepCopy';
import {
  normalize,
  schema
} from 'normalizr';

let initialState = {
  dataForm: getStorage(),
  isAccount: false
};

const dataFormScheme = new schema.Entity('dataForm');
const dataForms = { dataForm: [dataFormScheme] };
const dataNormalized = normalize(initialState, dataForms);


initialState = {
  dataForm: {
    entities: dataNormalized.entities.dataForm || {},
    ids: dataNormalized.result.dataForm || {}
  }
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_DATAFORM_NAME: {
      const dataFormCopy = deepCopy(state.dataForm);
      const { id, values } = action.payload;
      dataFormCopy.entities[id] = { ...state.dataForm.entities[id], values };
      dataFormCopy.ids = [...state.dataForm.ids];
      return {
        ...state,
        dataForm: dataFormCopy
      };
    }
    
    
    case SET_IS_FORM_VALID: {
      const dataFormCopy = deepCopy(state.dataForm);
      const { id, errorText, isValid } = action.payload;
      dataFormCopy.entities[id] = { ...state.dataForm.entities[id], errorText, isValid };
      dataFormCopy.ids = [...state.dataForm.ids];
      return {
        ...state,
        dataForm: dataFormCopy
      };
    }
    
    
    case SET_IS_ACCOUNT_CREATED:
      return { ...state, isAccount: true };
    
    
    default:
      return state;
  }
};


export default reducers;