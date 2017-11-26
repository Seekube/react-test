//Modules
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
//Components
import JediItem from './JediItem';
//Actions
import { fetchJedi } from '../actions/action';

function mapStateToProps(state) {
    return {
      jedi: state.jedi,
    };
}

class JediList extends Component{
    componentWillMount() {
        this.fetchJedi();
    }
    
    fetchJedi() {
        this.props.dispatch(fetchJedi());
    }

    
    render (){
        const {jedi} = this.props;
        return(
            <div className="JediList">
                    {jedi.map((jedi, index) => (
                        <div key={index} >
                            <JediItem id={jedi.id} name={jedi.name} />
                        </div>
                    ))}
            </div>
        );
    }
}

JediList.PropTypes = {
    jedi :PropTypes.array,
}

export default connect(
    mapStateToProps,
)(JediList);
