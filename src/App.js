import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddJediForm from './AddJediForm';

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

    return (
      <div className="App">
        <AddJediForm/>
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
