import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form/Form';

function App() {

  const [isName, setIsName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isLanguage, setIsLanguage] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isLanguageValid, setIsLanguageValid] = useState(false);

  const [isInputsValid, setIsInputsValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsNameValid(isName.split('').map(el => /[а-яА-Яa-zA-Z -]/g.test(el)).every(Boolean) &&
      isName.length > 0);
  }, [isName]);

  useEffect(() => {
    let arr = isEmail.split('@').join('.').split('.');
    setIsEmailValid(arr.length === 3 && arr[0].length >= 1 && arr[1].length >= 1 && arr[2].length >= 2 &&
      isEmail.split('').map(el => /[a-zA-Z@.-]/g.test(el)).every(Boolean)
    );
  }, [isEmail]);

  useEffect(() => {
    setIsPhoneValid((isPhone[0] === "+" || isPhone[0] === "7" || isPhone[0] === "8") &&
      isPhone.replace(/[^0-9]/gim,'').length === 11 &&
      isPhone.split('').map(el => /[0-9+-/(/)]/g.test(el)).every(Boolean)
    );
  }, [isPhone]);

  useEffect(() => {
    setIsLanguageValid(Boolean(isLanguage))
  }, [isLanguage]);

  useEffect(() => {
    setIsInputsValid(isNameValid && isEmailValid && isPhoneValid && isLanguageValid)
  }, [isNameValid, isEmailValid, isPhoneValid, isLanguageValid]);

  return (
    <div className="app">
      <div className="app__container">
        <Form 
          isName={isName}
          setIsName={setIsName}
          isNameValid={isNameValid}
          isEmail={isEmail}
          setIsEmail={setIsEmail}
          isEmailValid={isEmailValid}
          isPhone={isPhone}
          setIsPhone={setIsPhone}
          isPhoneValid={isPhoneValid}
          isLanguage={isLanguage}
          setIsLanguage={setIsLanguage}
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          isInputsValid={isInputsValid}
          isFormValid={isFormValid}
          setIsFormValid={setIsFormValid}
        />
      </div>
    </div>
  );
}

export default App;
