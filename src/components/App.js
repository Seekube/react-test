import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';

import { fetchJedi, addJedi } from '../action';

function mapStateToProps(state) {
  return {
    jedi: state.jedi,
  };
}

class App extends Component {

  componentWillMount() {
    this.fetchJedi();
  }

  fetchJedi() {
    this.props.dispatch(fetchJedi());
  }

  addJedi(name) {
    this.props.dispatch(addJedi(name));
  }

  newJedi(event) {
    event.preventDefault();
    const jediName = this.nameInput.value;
    this.addJedi(jediName);
  }

  render() {
    const { jedi } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {jedi.map((jedi, index) => (
          <div key={index}>
            Jedi: id: {jedi.id} name: {jedi.name}
          </div>
        ))}
        <form 
          ref={ (input) => {this.newJediForm = input} }
          onSubmit={ (event) => this.newJedi(event) }
        >
          <input ref={ (input) => {this.nameInput = input} } />
          <button type="submit">Add a jedi</button>
        </form>
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
};

export default connect(
  mapStateToProps,
)(App);
