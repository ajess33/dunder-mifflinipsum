import React from 'react';
import data from '../data.js';

class IpsumText extends React.Component {
  render() {
    const getRandomQuotes = () => {};
    let character = this.props.person;
    let paragraphs = this.props.length;
    console.log(character, paragraphs, data.quote1);
    return (
      <div>
        <textarea />
      </div>
    );
  }
}

export default IpsumText;
