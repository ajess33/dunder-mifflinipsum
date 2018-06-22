import React from 'react';
import data from '../data.js';

// reset value
// e.target.reset()

class IpsumText extends React.Component {
  render() {
    let character = this.props.person;
    let paragraphs = this.props.length;
    let displayed = this.props.displayed;

    return (
      <div className="returned-ipsum">
        <textarea value={this.props.value} onChange={this.handleValueChange} />
        <br />
        <button>Copy</button>
      </div>
    );
  }
}

export default IpsumText;
