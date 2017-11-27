import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addnewJedi} from '../actions/action';

class FormNewJedi extends Component{
    constructor(props){
        super(props);
        this.newJedi = this.newJedi.bind(this);
    }

    newJedi(e){
        //e.preventDefault();
        if(this.nameInput.value !== ""){
           this.props.dispatch(addnewJedi(this.nameInput.value));
           this.nameInput.value = "";
        }
    }

    render(){
        return (
            <div className="FormNewJedi">
                <form onSubmit={(e) => {this.newJedi(e)}}>
                    <input ref={(input) => {this.nameInput = input} } />
                    <button type="submit">Add a new jedi</button>
                </form>
            </div>
        );
    }
}


export default connect()(FormNewJedi);