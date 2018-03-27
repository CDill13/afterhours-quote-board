import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './components/quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          id: 1,
          name: 'Bob Ross',
          quote: 'Happy little trees',
        },
        {
          id: 1,
          name: 'Bob Ross',
          quote: 'Happy little trees',
        },
        {
          id: 1,
          name: 'Bob Ross',
          quote: 'Happy little trees',
        },
        {
          id: 1,
          name: 'Bob Ross',
          quote: 'Happy little trees',
        },
        {
          id: 1,
          name: 'Bob Ross',
          quote: 'Happy little trees',
        },
      ],
      name: '',
      quote: '',
    };
  }

  handleInput(input, text) {
    this.setState({
      [input]: text,
    });
  }
  render() {
    const quotes = this.state.quotes.map(quote => <Quote name={quote.name} quote={quote.quote} />);
    return (
      <div className="App">
        <h1>Super Happy Fun Time Quote Board</h1>
        <div className="add-quote">
          <div>
            <label htmlFor="Name">Name </label>
            <input
              type="text"
              onChange={e => {
                this.handleInput('name', e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="Quote">Quote </label>
            <input type="text" />
          </div>
          <div className="button green-btn">Add</div>
        </div>
        <div className="quotes">{quotes}</div>
      </div>
    );
  }
}

export default App;
