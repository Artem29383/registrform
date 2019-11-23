import React, {useState, useCallback} from 'react';
import Input from "./Input";

const InputContainer = ({title, typeOfInput, values, setData, isFormValidCheck}) => {

  const [errorMessage, setErrorMessage] = useState('');

  const setValues = useCallback((e) => {
    let values = e.currentTarget.value;
    setData(values);
    switch (e.currentTarget.name) {
      case 'Name':
        if (!values.length) {
          setErrorMessage('Имя не может быть пустым.');
        } else {
          (!/^[a-zA-Zа-яА-Я]+$/.test(values))
            ? setErrorMessage('Имя может содержать только буквы.')
            : setErrorMessage('');
        }
        break;
      case 'Email':
        if (!values.length) {
          setErrorMessage('Email обязателен к заполнению.');
        } else {
          (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(values))
            ? setErrorMessage('Некорректный Email.')
            : setErrorMessage('');
        }
        break;
      case 'Password':
        (values.length < 6)
          ? setErrorMessage('Пароль слишком короткий.')
          : setErrorMessage('');
        break;
      case 'Date of Birth':
        if (!values.length) {
          setErrorMessage('Дата обязательна.');
        } else {
          (!/^\d\d.\d\d.[\d]{4}$/.test(values))
            ? setErrorMessage('Введите дату в формате ДД-ММ-ГГГГ.')
            : setErrorMessage('');
        }
        break;
      case 'Phone number':
        ((!/(^\+7[0-9]{10}$)|(^8[0-9]{10}$)/.test(values)))
          ? setErrorMessage('Номер телефона начинается с +7 или 8 и содержит всего 11 цифр')
          : setErrorMessage('');
        break;
    }
  }, [values]);
  const hFor = `${title}-${Math.random()}`;
  return (
    <Input title={title} typeOfInput={typeOfInput} values={values} setValue={setValues} errorMessage={errorMessage}
           hFor={hFor} isFormValidCheck={isFormValidCheck}/>
  );
};

export default InputContainer;