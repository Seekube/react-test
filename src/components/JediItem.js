import React, {Component, PropTypes} from 'react';

class JediItem extends Component{
    render(){
        const {id, name} = this.props;
        return (
            <p>Jedi: id: {id} name: {name}</p>
        );
    }
}

JediItem.PropTypes = {
    id : PropTypes.number,
    name : PropTypes.string,
}

export default JediItem;