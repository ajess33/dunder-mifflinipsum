import React from 'react';
import TextareaAutoSize from 'react-autosize-textarea';

// reset value
// e.target.reset()

class IpsumText extends React.Component {
  render() {
    return (
      <div className="returned-ipsum">
        <TextareaAutoSize
          value={this.props.value}
          onChange={this.handleValueChange}
        />
        <br />
        <button>Copy</button>
      </div>
    );
  }
}

export default IpsumText;
