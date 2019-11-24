export const getStorage = () => {
  if (localStorage.getItem('formData')) {
    return [JSON.parse(localStorage.getItem('formData'))];
  }
  return [{
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    phone: ''
  }];
};