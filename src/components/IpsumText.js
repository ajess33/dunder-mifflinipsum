import React from 'react';
import Header from './Header';
import data from '../data.js';

const IpsumText = (props) => {
  let character = props.person;
  let paragraphs = props.length;

  return (
    <div>
      <Header />
      <h2>Hello</h2>
    </div>
  );
};

export default IpsumText;
