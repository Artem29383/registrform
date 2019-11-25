export const isValidName = (values, isFormValidCheck, title) => {
  if (!values.length) {
    isFormValidCheck('Имя не может быть пустым.',  title);
  } else {
    (!/^[a-zA-Zа-яА-Я]+$/.test(values))
      ? isFormValidCheck('Имя может содержать только буквы.', title)
      : isFormValidCheck('', title);
  }
};

export const isValidEmail = (values, isFormValidCheck, title) => {
  if (!values.length) {
    isFormValidCheck('Email обязателен к заполнению.', title);
  } else {
    (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(values))
      ? isFormValidCheck('Некорректный Email.', title)
      : isFormValidCheck('', title);
  }
};

export const isValidPassword = (values, isFormValidCheck, title) => {
  (values.length < 6)
    ? isFormValidCheck('Пароль слишком короткий.', title)
    : isFormValidCheck('', title);
};

export const isValidDate = (values, isFormValidCheck, title) => {
  if (!values.length) {
    isFormValidCheck('Дата обязательна.', title);
  } else {
    (!/^\d\d.\d\d.[\d]{4}$/.test(values))
      ? isFormValidCheck('Введите дату в формате ДД-ММ-ГГГГ.', title)
      : isFormValidCheck('', title);
  }
};

export const isValidPhone = (values, isFormValidCheck, title) => {
  ((!/(^\+7[0-9]{10}$)|(^8[0-9]{10}$)/.test(values)))
    ? isFormValidCheck('Номер телефона начинается с +7 или 8.', title)
    : isFormValidCheck('', title);
};