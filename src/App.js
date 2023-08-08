import React from 'react';
import './App.css';
import Breakfast from './component/breakfast'; // Correct component names
import Lunch from './component/lunch';         // Correct component names
import Dinner from './component/dinner';       // Correct component names

class App extends React.Component { // Use class App extends React.Component
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    let component;
    let time = new Date().getHours();

    if (time >= 6 && time < 12) { // Compare numbers instead of strings
      component = <Breakfast />;
    } else if (time >= 12 && time < 17) { // Compare numbers instead of strings
      component = <Lunch />;
    } else if (time >= 17 && time < 21) { // Compare numbers instead of strings
      component = <Dinner />;
    }

    return (
      <>
        <h1>{this.state.currentTime}</h1>
        <div>{time}</div>
        <div>{component}</div>
      </>
    );
  }
}

export default App;