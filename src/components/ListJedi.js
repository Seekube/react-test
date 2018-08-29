import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchJedi } from '../actions'

function mapStateToProps(state) {
  return {
    jedi: state.jedi,
  }
}

class ListJedi extends Component {
  componentWillMount() {
    this.fetchJedi()
  }

  fetchJedi () {
    this.props.dispatch(fetchJedi())
  }

  render() {
    const { jedi } = this.props
    return (
        <div className="ListJedi">
          {jedi.map((jedi, index) => (
            <div key={index}>
              Jedi: id: {jedi.id} name: {jedi.name}
            </div>
          ))}
        </div>
    )
  }
}

ListJedi.propTypes = {
  jedi: PropTypes.array,
}

export default connect(
  mapStateToProps,
)(ListJedi)
