import React from 'react';
import './Check.css';

function Check({ isCheck, setIsCheck, isInputsValid, isFormValid, setIsFormValid }) {

  const handleClickCheckbox = () => {
    if (isInputsValid) {
      setIsCheck(!isCheck);
      setIsFormValid(!isFormValid);
    }
  }

  return (
    <div className="check">
      <input className={"check__checkbox " + (isInputsValid && isCheck && "check__checkbox_active")} type="checkbox" name="Условия" 
      id="Условия" value="yes" onClick={handleClickCheckbox}/>
      <label className="check__label" htmlFor="Условия">
      Принимаю <a className="check__link" href="...">условия</a> условия использования</label>
    </div>
  );
}

export default Check;