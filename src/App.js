import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/index';
import Toggle from './components/Toggle';
import Panel from './components/Panel';
import Led from './components/Led';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { 
      SEG: 0,
      SWI: [false, false, false, false, false, false, false, false],
      hasOverflow: false
    };
    
  }

  toggle = idx => {
    this.setState(state => {
      const SWI = state.SWI.map( (item, i) => i === idx ? !item : item )
      
      let ch = 0;
      ch += SWI[0] ? 1 : 0;
      ch += SWI[1] ? 2 : 0;
      ch += SWI[2] ? 4 : 0;
      ch += SWI[3] ? 8 : 0;

      return {
        SWI,
        SEG: ch >= 8 ? 8 : ch,
        hasOverflow: ch >= 8
      };
    });
  };
 
  render() {
    
    const { SWI, SEG } = this.state;

    return (
      <div className="App">
        <div className="fpga-top">
          <Panel>
            <Toggle isActive={SWI[7]} id={7} onClick={this.toggle} />
            <Toggle isActive={SWI[6]} id={6} onClick={this.toggle} />
            <Toggle isActive={SWI[5]} id={5} onClick={this.toggle} />
            <Toggle isActive={SWI[4]} id={4} onClick={this.toggle} />
          </Panel>
          <div className="display">
            <Display 
              value={SEG} 
              color="#86C232" 
              digitCount={1}/>
          </div>  
          <Panel>
            <Toggle isActive={SWI[3]} id={3} onClick={this.toggle} />
            <Toggle isActive={SWI[2]} id={2} onClick={this.toggle} />
            <Toggle isActive={SWI[1]} id={1} onClick={this.toggle}/>
            <Toggle isActive={SWI[0]} id={0} onClick={this.toggle} />
          </Panel>
        </div>
        
        <Led isActive={this.state.hasOverflow}/>
        <Led isActive={this.state.hasOverflow} isBlink/>


          
      </div>
    );
  }

}

export default App;
