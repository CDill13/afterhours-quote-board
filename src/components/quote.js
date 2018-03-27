import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div className="quote">
        <div className="quote-name">{this.props.name}</div>
        <div className="quote-text">{this.props.quote}</div>
        <div className="quote-delete">
          <div className="button red-button">Delete</div>
        </div>
      </div>
    );
  }
}

export default Quote;
