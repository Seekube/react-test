import React, { Component } from 'react';


class JediForm extends Component {
    render(){
        return (
            <div>
                <input onChange={this.props.handleInputChange}
                value={this.props.inputValue}/>
                <button onClick={this.props.handleAddNewJedi}
                disabled={this.props.disableButton}>
                    {this.props.disableButton ? 
                            'Please write a name for a new jedi' : 
                            'Add a new jedi'}
                </button>
            </div>
        )
    }
}

export default JediForm