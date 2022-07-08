import React from 'react';
import './Form.css';
import Title from './Title/Title';
import Input from './Input/Input';
import Select from './Select/Select';
import Check from './Check/Check';
import Button from './Button/Button';

function Form({ isName, setIsName, isNameValid, isEmail, setIsEmail, isEmailValid, 
  isPhone, setIsPhone, isPhoneValid, isLanguage, setIsLanguage, isCheck, setIsCheck }) {
  return (
    <form className="form">
      <Title 
        title="Регистрация"
        subtitle="Уже есть аккаунт?"
        textLink="Войти"
      />
      <Input
        type="text"
        name="Имя"
        placeholder="Введите Ваше имя"
        input={isName}
        setInput={setIsName}
        valid={isNameValid}
        textValid="Введено некорректное имя"
      />
      <Input
        type="email"
        name="Email"
        placeholder="Введите Ваш email"
        input={isEmail}
        setInput={setIsEmail}
        valid={isEmailValid}
        textValid="Введен некорректный email"
      />
      <Input
        type="tel"
        name="Номер телефона"
        placeholder="Введите номер телефона"
        input={isPhone}
        setInput={setIsPhone}
        valid={isPhoneValid}
        textValid="Введен некорректный номер телефона"
      />
      <Select isLanguage={isLanguage} setIsLanguage={setIsLanguage}/>
      <Check isCheck={isCheck} setIsCheck={setIsCheck}/>
      <Button />
    </form>
  );
}

export default Form;