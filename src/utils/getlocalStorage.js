export const getStorage = () => {
  if (localStorage.getItem('formData')) {
    return JSON.parse(localStorage.getItem('formData'));
  }
  return {
    'Name': '',
    'Email': '',
    'Password': '',
    'Date of Birth': '',
    'Phone number': '',
    'Age': ''
  };
};