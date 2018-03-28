import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './components/quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      name: '',
      quote: '',
    };
  }

  componentDidMount() {
    axios.get('/api/quotes').then(res => {
      this.setState({ quotes: res.data });
    });
  }

  handleInput(input, text) {
    this.setState({
      [input]: text,
    });
  }

  createQuote() {
    if (this.state.name !== '' || this.state.quote !== '') {
      axios.post('/api/quote', { name: this.state.name, quote: this.state.quote });
    }
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
            <input
              type="text"
              onChange={e => {
                this.handleInput('quote', e.target.value);
              }}
            />
          </div>
          <div
            className="button green-btn"
            onClick={() => {
              this.createQuote();
            }}
          >
            Add
          </div>
        </div>
        <div className="quotes">{quotes}</div>
      </div>
    );
  }
}

export default App;
