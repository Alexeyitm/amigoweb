import React from 'react';
import './Select.css';

function Select() {
  return (
    <div className="select">
      <label className="select__label" for="Язык">Язык</label>
      <select className="select__select" name="Язык" id="Язык">
        <option value="Русский">Русский</option>
        <option value="Английский">Английский</option>
        <option value="Китайский">Китайский</option>
        <option value="Испанский">Испанский</option>
      </select>
    </div>
  );
}

export default Select;