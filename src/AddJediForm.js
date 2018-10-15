import React, {Component} from 'react';
import { addJedi } from './action';
import store from './store';

class AddJediForm extends Component {
  state = {
    name: '',
  };
  handleChange = (event) => {
    this.setState({name: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(addJedi(this.state.name));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.name} onChange={this.handleChange}/>
        <button>Add jedi</button>
      </form>
      )
  }
}

export default AddJediForm;

