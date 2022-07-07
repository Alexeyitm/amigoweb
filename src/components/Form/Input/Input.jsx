import React from 'react';
import './Input.css';

function Input({ name, placeholder, input, setInput }) {

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>{name}</label>
      <input className="input__input" type="text" name={name} 
      id={name} placeholder={placeholder} value={input} onChange={handleChange}/>
    </div>
  );
}

export default Input;