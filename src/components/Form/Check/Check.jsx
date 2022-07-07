import React from 'react';
import './Check.css';

function Check({ isCheck, setIsCheck }) {

  const handleClickCheckbox = () => {
    setIsCheck(!isCheck);
  }

  return (
    <div className="check">
      <input className={"check__checkbox " + (isCheck && "check__checkbox_active")} type="checkbox" name="Условия" 
      id="Условия" value="yes" onClick={handleClickCheckbox}/>
      <label className="check__label" htmlFor="Условия">
      Принимаю <a className="check__link" href="...">условия</a> условия использования</label>
    </div>
  );
}

export default Check;