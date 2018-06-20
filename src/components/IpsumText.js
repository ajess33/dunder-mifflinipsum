import React from 'react';
import data from '../data.js';

// getting length of object
// Object.keys(data).length

class IpsumText extends React.Component {
  handleValueChange = (e) => {};

  render() {
    let character = this.props.person;
    let paragraphs = this.props.length;
    let displayed = this.props.displayed;

    return (
      <div className="returned-ipsum">
        <textarea
          value={this.props.value.quote}
          onChange={this.handleValueChange}
        />
      </div>
    );
  }
}

export default IpsumText;
