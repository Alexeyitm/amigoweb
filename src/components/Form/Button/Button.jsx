import React from 'react';
import './Button.css';

function Button() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <button className="button" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
  );
}

export default Button;