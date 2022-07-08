import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Form/Form';

function App() {

  const [isName, setIsName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isLanguage, setIsLanguage] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  //const [isInputsOK, setIsInputsOK] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);


  useEffect(() => {
    setIsNameValid(isName.split('').map(el => /[а-яА-Яa-zA-Z -]/g.test(el)).every(Boolean));
  }, [isName]);

  useEffect(() => {
    let arr = isEmail.split('@').join('.').split('.');
    setIsEmailValid(arr.length === 3 && arr[0].length >= 1 && arr[1].length >= 1 && arr[2].length >= 2);
  }, [isEmail]);

  useEffect(() => {
    
  }, [isPhone]);

  useEffect(() => {
    setIsEmailValid(true);
  }, []);

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
        />
      </div>
    </div>
  );
}

export default App;
