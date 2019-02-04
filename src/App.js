import React, { Component } from "react";
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <ButtonToolbar>
//         <Button variant="primary">Primary</Button>
//         <Button variant="secondary">Secondary</Button>
//         <Button variant="success">Success</Button>
//         <Button variant="warning">Warning</Button>
//         <Button variant="danger">Danger</Button>
//         <Button variant="info">Info</Button>
//         <Button variant="light">Light</Button>
//         <Button variant="dark">Dark</Button>
//         <Button variant="link">Link</Button>
//       </ButtonToolbar>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React!!!
//       //     </a>
//       //   </header>
//       // </div>
//     );
//   }
// }

const INTERVAL = 100;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = {value: 0, stopped: false};
  }

  increment() {
    if(!this.state.stopped) (this.setState({value: this.state.value + 1}));
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  stopTimer = () => {
    this.setState({stopped: !this.state.stopped});
    if(this.state.stopped){
      clearInterval(this.timerID);
    }
    else
    {
      this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    };
  }

  resetTimer = () => {
    this.setState({value: 0});
  }

  componentDidUpdate(){
    const value = this.state.value;
    if (this.state.stopped) document.title = "Таймер";
    else document.title = "Таймер: "+Math.floor(value/INTERVAL/60/60)+":"
    +Math.floor(value/INTERVAL/60) % 60+":"+Math.floor(value/INTERVAL) % 60;
    }
    
  render() {
    const value = this.state.value;
    return (
      <div class="container-fluid align-items-center">
        <h1 class="display-1">Таймер</h1>
        <h1 class="display-1">
          <span>
            <kbd>{Math.floor(value / INTERVAL / 60 / 60)}</kbd> :{" "}
          </span>
          <span>
            <kbd>{Math.floor(value / INTERVAL / 60) % 60}</kbd> :{" "}
          </span>
          <span>
            <kbd>{Math.floor(value / INTERVAL) % 60}</kbd> .{" "}
          </span>
          <span>
            <kbd>
              {value % INTERVAL < 10 ? "0" : ""}
              {value % INTERVAL}
            </kbd>
          </span>
        </h1>
        <div>
          <button class="display-4" onClick={this.stopTimer}>
          {this.state.stopped?'Продолжить':'Остановить'}
          </button>
          <button class="display-4" onClick={this.resetTimer}>
            Сбросить
          </button>
        </div>
      </div>
    );
  }
}

export default App;
