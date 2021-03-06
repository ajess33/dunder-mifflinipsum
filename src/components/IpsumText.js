import React from 'react';
import TextareaAutoSize from 'react-autosize-textarea';
import PropTypes from 'prop-types';

class IpsumText extends React.Component {
  copyIpsum = () => {
    const copyText = document.querySelector('.text-area');
    copyText.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log(msg);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let results = this.props.value;

    const formatQuotes = () => {
      if (!results) return '';
      results = results.join('\n \n');
      return results;
    };

    return (
      <div className="returned-ipsum">
        <TextareaAutoSize className="text-area" value={formatQuotes()} />
        <br />
        <button onClick={this.copyIpsum}>Copy</button>
        <button onClick={this.props.handleReset}>Reset</button>
      </div>
    );
  }
}

// IpsumText.propTypes = {
//   value: PropTypes.number.isRequired
// };

export default IpsumText;
