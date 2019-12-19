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
  (!/^\d\d-\d\d-[\d]{4}$/.test(values))
    ? isFormValidCheck({ text: 'Введите дату в формате ДД-ММ-ГГГГ.', fieldName: title })
    : isFormValidCheck({ text: '', fieldName: title });
};

export const isValidPhone = (values, isFormValidCheck, title) => {
  ((!/(\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2})/.test(values)))
    ? isFormValidCheck({ text: 'Номер состоит из 10 цифр.', fieldName: title })
    : isFormValidCheck({ text: '', fieldName: title });
};

export const isValidAge = (values, isFormValidCheck, title) => {
  (values < 18)
    ? isFormValidCheck({ text: 'Регистрация с 18 лет.', fieldName: title })
    : isFormValidCheck({ text: '', fieldName: title })
};