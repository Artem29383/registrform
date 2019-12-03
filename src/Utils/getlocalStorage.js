export const getStorage = () => {
  if (localStorage.getItem('formData')) {
    console.log(1);
    return [JSON.parse(localStorage.getItem('formData'))];
  }
  return [{
    'Name': '',
    'Email': '',
    'Password': '',
    'Date of Birth': '',
    'Phone number': ''
  }];
};