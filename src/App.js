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
    console.log(idx)
      this.setState(state => {
        const toggle = state.toggle.map( (item, i) => i === idx ? !item : item )
        console.log(toggle)
        return {
          toggle,
        };
      });
  };

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
              value={this.state.count} 
              color="blue" 
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
