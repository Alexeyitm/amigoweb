import React from 'react';
import './Input.css';

function Input({ type, name, placeholder, input, setInput, valid, textValid }) {

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>{name}</label>
      <input className="input__input" type={type} name={name} 
      id={name} placeholder={placeholder} value={input} onChange={handleChange}/>
      {/*<span className={"input__error " + (valid && "input__error_hidden")}>{textValid}</span>*/}
      <span className={"input__error " + (valid && "input__error_hidden")}>{input.length ? textValid : ''}</span>
    </div>
  );
}

export default Input;