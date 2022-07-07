import React from 'react';
import './Form.css';
import Title from './Title/Title';
import Input from './Input/Input';
import Select from './Select/Select';
import Check from './Check/Check';
import Button from './Button/Button';

function Form({ isName, setIsName, isEmail, setIsEmail, isPhone, setIsPhone, 
  isLanguage, setIsLanguage, isCheck, setIsCheck }) {
  return (
    <form className="form">
      <Title title="Регистрация" subtitle="Уже есть аккаунт?" textLink="Войти" />
      <Input type="text" name="Имя" placeholder="Введите Ваше имя" input={isName} setInput={setIsName}/>
      <Input type="email" name="Email" placeholder="Введите Ваш email" input={isEmail} setInput={setIsEmail}/>
      <Input type="number" name="Номер телефона" placeholder="Введите номер телефона" input={isPhone} setInput={setIsPhone}/>
      <Select isLanguage={isLanguage} setIsLanguage={setIsLanguage}/>
      <Check isCheck={isCheck} setIsCheck={setIsCheck}/>
      <Button />
    </form>
  );
}

export default Form;