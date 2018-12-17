import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/index';
import Toggle from './components/Toggle';
import Panel from './components/Panel';
import { throws } from 'assert';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { 
      count: 0,
      toggle: [false, false, false, false, false, false, false, false]
    };
    
  }

  toggle = idx => {
    this.setState(state => {
      const toggle = state.toggle.map( (item, i) => i === idx ? !item : item )
      return {
        toggle,
      };
    });
  };

  sum = () => {
    const { toggle } = this.state;
    let res = 0;
    res = toggle[0] ? res + 1 : res;
    res = toggle[1] ? res + 2 : res ;
    res = toggle[2] ? res + 4 : res ;
    res = toggle[3] ? res + 8 : res ;
    return res;
  }
 
  render() {
    return (
      <div className="App">
        <div className="fpga-top">
          <Panel>
            <Toggle isActive={this.state.toggle[7]} id={7} onClick={this.toggle} />
            <Toggle isActive={this.state.toggle[6]} id={6} onClick={this.toggle} />
            <Toggle isActive={this.state.toggle[5]} id={5} onClick={this.toggle} />
            <Toggle isActive={this.state.toggle[4]} id={4} onClick={this.toggle} />
          </Panel>
          <div className="display">
            <Display 
              value={this.sum()} 
              color="#86C232" 
              digitCount={1}/>
          </div>  
          <Panel>
            <Toggle isActive={this.state.toggle[3]} id={3} onClick={this.toggle} />
            <Toggle isActive={this.state.toggle[2]} id={2} onClick={this.toggle} />
            <Toggle isActive={this.state.toggle[1]} id={1} onClick={this.toggle}/>
            <Toggle isActive={this.state.toggle[0]} id={0} onClick={this.toggle} />
          </Panel>
        </div>
        
          
      </div>
    );
  }

}

export default App;
