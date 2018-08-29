import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addJedi } from '../actions'

class AddJedi extends Component {
  state = { newJedi : null }

  addJedi = () => {
    let jedi = {name: this.state.newJedi}
    this.props.dispatch(addJedi(jedi))
    this.refs.addJedi.value=""
  }

  handleChange = (event) => {
    this.setState({newJedi: event.target.value})
  }

  render() {
    return (
        <div>
            <input type='text' ref='addJedi' onChange={this.handleChange} placeholder='name of new jedi' />
            <button onClick={this.addJedi} disabled={!this.state.newJedi}>Add Jedi</button>
        </div>
    )
  }
}

export default connect()(AddJedi)
