import { useState } from 'react';
import './App.css';
import Form from './Form/Form';

function App() {

  const [isName, setIsName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isLanguage, setIsLanguage] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="app">
      <div className="app__container">
        <Form 
          isName={isName}
          setIsName={setIsName}
          isEmail={isEmail}
          setIsEmail={setIsEmail}
          isPhone={isPhone}
          setIsPhone={setIsPhone}
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
