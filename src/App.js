import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/index';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { count: 0 };

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App" style={{width: 200}}>
        <Display 
          value={this.state.count} 
          color="blue" 
          digitCount={1}/>
      </div>
    );
  }

}

export default App;
