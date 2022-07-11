import React from 'react';
import './Button.css';

function Button({ isFormValid, isInputsValid }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <button className={"button " + (isInputsValid && isFormValid && "button_active")} type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
  );
}

export default Button;