import React from 'react';
import './Input.css';

function Input({ name, placeholder }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>{name}</label>
      <input className="input__input" type="text" name={name} id={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;