import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raised: 0,
      target: 0,
      isLoading: true
    };
  }

  async componentWillMount() {
    const {
      data: { raised, target }
    } = await axios.get('https://coop-mock-test-api.herokuapp.com/');
    this.setState({ isLoading: false, raised, target });
  }

  render() {
    const { isLoading, ...stateProps } = this.state;
    return !isLoading ? (
      <div className="App wrap">
        <div className="column all-4">
          <Card {...stateProps} />
        </div>
      </div>
    ) : null;
  }
}

export default App;
