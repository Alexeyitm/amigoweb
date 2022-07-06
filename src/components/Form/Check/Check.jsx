import React from 'react';
import './Check.css';

function Check() {
  return (
    <div className="check">
      <input className="check__checkbox" type="checkbox" name="Условия" id="Условия"/>
      <label className="check__label" htmlFor="Условия">
      Принимаю <a className="check__link" href="...">условия</a> условия использования</label>
    </div>
  );
}

export default Check;