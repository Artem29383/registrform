export const getStorage = () => {
  if (localStorage.getItem('formData')) {
    return {dataForm: JSON.parse(localStorage.getItem('formData'))}
  }
  return {dataForm: [{
    id: 1,
    name: 'name',
    type: 'text',
    title: 'Name',
    isValid: false,
    errorText: '',
    values: ''
  },
    {
      id: 2,
      name: 'email',
      type: 'text',
      title: 'Email',
      isValid: false,
      errorText: '',
      values: ''
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      title: 'Password',
      isValid: false,
      errorText: '',
      values: ''
    },
    {
      id: 4,
      name: 'dateOfBirth',
      type: 'text',
      title: 'Date of Birth',
      isValid: false,
      errorText: '',
      values: ''
    },
    {
      id: 5,
      name: 'phoneNumber',
      type: 'text',
      title: 'Phone number',
      isValid: false,
      errorText: '',
      values: ''
    },
    {
      id: 6,
      name: 'age',
      type: 'number',
      title: 'Age',
      isValid: false,
      errorText: '',
      values: ''
    }]}
};