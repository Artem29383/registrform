export const isValidName = (values, isFormValidCheck, id) => {
  if (!values.length) {
    isFormValidCheck({ errorText: 'Имя не может быть пустым.', id, isValid: false});
  } else {
    (!/^[a-zA-Zа-яА-Я]+$/.test(values))
      ? isFormValidCheck({ errorText: 'Имя может содержать только буквы.', id, isValid: false})
      : isFormValidCheck({ errorText: '', id, isValid: true });
  }
};

export const isValidEmail = (values, isFormValidCheck, id) => {
  if (!values.length) {
    isFormValidCheck({ errorText: 'Email обязателен к заполнению.', id, isValid: false });
  } else {
    (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(values))
      ? isFormValidCheck({ errorText: 'Некорректный Email.', id, isValid: false})
      : isFormValidCheck({ errorText: '', id,isValid: true });
  }
};

export const isValidPassword = (values, isFormValidCheck, id) => {
  (values.length < 6)
    ? isFormValidCheck({ errorText: 'Пароль слишком короткий.', id, isValid: false })
    : isFormValidCheck({ errorText: '', id, isValid: true });
};

export const isValidDate = (values, isFormValidCheck, id) => {
  (!/^\d\d-\d\d-[\d]{4}$/.test(values))
    ? isFormValidCheck({ errorText: 'Введите дату в формате ДД-ММ-ГГГГ.', id, isValid: false })
    : isFormValidCheck({ errorText: '', id, isValid: true });
};

export const isValidPhone = (values, isFormValidCheck, id) => {
  ((!/(\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2})/.test(values)))
    ? isFormValidCheck({ errorText: 'Номер состоит из 10 цифр.', id, isValid: false })
    : isFormValidCheck({ errorText: '', id, isValid: true });
};

export const isValidAge = (values, isFormValidCheck, id) => {
  (values < 18)
    ? isFormValidCheck({ errorText: 'Регистрация с 18 лет.', id, isValid: false })
    : isFormValidCheck({ errorText: '', id, isValid: true })
};