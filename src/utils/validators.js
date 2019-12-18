export const isValidName = (values, isFormValidCheck, title) => {
  if (!values.length) {
    isFormValidCheck({ text: 'Имя не может быть пустым.', fieldName: title });
  } else {
    (!/^[a-zA-Zа-яА-Я]+$/.test(values))
      ? isFormValidCheck({ text: 'Имя может содержать только буквы.', fieldName: title })
      : isFormValidCheck({ text: '', fieldName: title });
  }
};

export const isValidEmail = (values, isFormValidCheck, title) => {
  if (!values.length) {
    isFormValidCheck({ text: 'Email обязателен к заполнению.', fieldName: title });
  } else {
    (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(values))
      ? isFormValidCheck({ text: 'Некорректный Email.', fieldName: title })
      : isFormValidCheck({ text: '', fieldName: title });
  }
};

export const isValidPassword = (values, isFormValidCheck, title) => {
  (values.length < 6)
    ? isFormValidCheck({ text: 'Пароль слишком короткий.', fieldName: title })
    : isFormValidCheck({ text: '', fieldName: title });
};

export const isValidDate = (values, isFormValidCheck, title) => {
  if (!values.length) {
    isFormValidCheck({ text: 'Дата обязательна.', fieldName: title });
  } else {
    (!/^\d\d-\d\d-[\d]{4}$/.test(values))
      ? isFormValidCheck({ text: 'Введите дату в формате ДД-ММ-ГГГГ.', fieldName: title })
      : isFormValidCheck({ text: '', fieldName: title });
  }
};

export const isValidPhone = (values, isFormValidCheck, title) => {
  ((!/(^\+7[0-9]{10}$)|(^8[0-9]{10}$)/.test(values)))
    ? isFormValidCheck({ text: 'Номер телефона начинается с +7 или 8.', fieldName: title })
    : isFormValidCheck({ text: '', fieldName: title });
};
