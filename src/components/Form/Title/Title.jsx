import React from 'react';
import './Title.css';

function Title({ title, subtitle, textLink }) {
  return (
    <>
      <h2 className="title__title">{title}</h2>
      <p className="title__subtitle">{subtitle}
        <a className="title__link-sign-in" href="...">{textLink}</a>
      </p>
    </>
  );
}

export default Title;