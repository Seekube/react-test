import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { registerJedi } from './action'

import { fetchJedi } from './action';

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

  render() {
    const { jedi } = this.props;
    let input;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={ e => {
            e.preventDefault();
            if (!input.value.trim())
            {
              return;
            }
            this.props.dispatch(registerJedi(input.value, jedi.length + 1))
            input.value = '';
          }
        }>
          <input ref={ node => {
              input = node;
            }
          }/>
          <button type='submit'>
            Add a Jedi
          </button>
        </form>
        {jedi.map((jedi, index) => (
          <div key={index}>
            Jedi: id: {jedi.id} name: {jedi.name}
          </div>
        ))}
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
