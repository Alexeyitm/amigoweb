import React from 'react';
import './Form.css';
import Title from './Title/Title';
import Input from './Input/Input';
import Select from './Select/Select';
import Check from './Check/Check';
import Button from './Button/Button';

function Form() {
  return (
    <form className="form">
      <Title title="Регистрация" subtitle="Уже есть аккаунт?" textLink="Войти" />
      <Input name="Имя" placeholder="Введите Ваше имя" />
      <Input name="Email" placeholder="Введите Ваш email" />
      <Input name="Номер телефона" placeholder="Введите номер телефона" />
      <Select />
      <Check />
      <Button />
    </form>
  );
}

export default Form;