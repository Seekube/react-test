import React, { Component } from 'react';
import JediForm from './JediForm.js';
import { addJedi } from '../../actions/action.js';
import {connect} from 'react-redux'; 

class JediFormContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            jediName: '',
            disableButton: true // value used to change 
            //button text and disable if the jediName is empty
        };
        this.handleInputChange =this.handleInputChange.bind(this);
        this.handleAddNewJedi =this.handleAddNewJedi.bind(this);
    }
    handleInputChange(e){
        /*
        updates the state when the input changes
        */
        e.preventDefault();
        const jediName = e.target.value;
        this.setState({jediName, disableButton:!jediName});
    }

    handleAddNewJedi(e){
        /*
        Dispatches an action to send new jedi to the API
        and update the list
        */
        e.preventDefault();
        if (this.state.jediName){
            this.props.dispatch(addJedi(this.state.jediName));
        }
        this.setState({disableButton:true, jediName:''})
    }

    render(){
        return <JediForm 
        handleInputChange={this.handleInputChange}
        handleAddNewJedi={this.handleAddNewJedi}
        disableButton={this.state.disableButton}
        inputValue={this.state.jediName}
        />
    }
}

export default connect()(JediFormContainer)