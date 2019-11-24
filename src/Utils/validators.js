export const isValidName = (values, setErrorMessage) => {
  if (!values.length) {
    setErrorMessage('Имя не может быть пустым.');
  } else {
    (!/^[a-zA-Zа-яА-Я]+$/.test(values))
      ? setErrorMessage('Имя может содержать только буквы.')
      : setErrorMessage('');
  }
};

export const isValidEmail = (values, setErrorMessage) => {
  if (!values.length) {
    setErrorMessage('Email обязателен к заполнению.');
  } else {
    (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(values))
      ? setErrorMessage('Некорректный Email.')
      : setErrorMessage('');
  }
};

export const isValidPassword = (values, setErrorMessage) => {
  (values.length < 6)
    ? setErrorMessage('Пароль слишком короткий.')
    : setErrorMessage('');
};

export const isValidDate = (values, setErrorMessage) => {
  if (!values.length) {
    setErrorMessage('Дата обязательна.');
  } else {
    (!/^\d\d.\d\d.[\d]{4}$/.test(values))
      ? setErrorMessage('Введите дату в формате ДД-ММ-ГГГГ.')
      : setErrorMessage('');
  }
};

export const isValidPhone = (values, setErrorMessage) => {
  ((!/(^\+7[0-9]{10}$)|(^8[0-9]{10}$)/.test(values)))
    ? setErrorMessage('Номер телефона начинается с +7 или 8 и содержит всего 11 цифр')
    : setErrorMessage('');
};