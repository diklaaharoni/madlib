import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadlibForm from './components/MadlibForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[Math.floor(Math.random() * (MadLibs.length - 1))]

    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) => {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        {/*
          Render your form with input values
        */}
        <MadlibForm
        input = {this.state.selectedMadLib}
        addStoryCallback = {this.updateWord}
        />
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
