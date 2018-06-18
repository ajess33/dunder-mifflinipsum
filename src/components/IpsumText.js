import React from 'react';
import data from '../data.js';

// getting length of object
// Object.keys(data).length

class IpsumText extends React.Component {
  state = {
    value: ''
  };

  handleValueChange = (e) => {
    console.log(data.quote1);
    this.setState({
      value: data.quote1
    });
  };

  render() {
    let character = this.props.person;
    let paragraphs = this.props.length;
    let displayed = this.props.displayed;

    return (
      <div className="returned-ipsum">
        <textarea value={this.state.value} onChange={this.handleValueChange} />
      </div>
    );
  }
}

export default IpsumText;
