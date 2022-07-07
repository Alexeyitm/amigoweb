import { useState } from 'react';
import './Select.css';

function Select({ isLanguage, setIsLanguage }) {

  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleClickSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  }

  const handleClickItem = (e) => {
    setIsLanguage(e.currentTarget.innerHTML);
    setIsOpenSelect(false);
  }

  return (
    <div className="select">
      <label className="select__label" htmlFor="Язык">Язык</label>
      <input type="text" className="select__select" value={isLanguage}
      placeholder="Язык" readOnly onClick={() => handleClickSelect()}/>
      <div className={"select__options " + (isOpenSelect && "select__options_open")}>
        <div className="select__item" onClick={handleClickItem}>Русский</div>
        <div className="select__item" onClick={handleClickItem}>Английский</div>
        <div className="select__item" onClick={handleClickItem}>Китайский</div>
        <div className="select__item" onClick={handleClickItem}>Испанский</div>
      </div>
    </div>
  );
}

export default Select;