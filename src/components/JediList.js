import React, {Component, PropTypes} from 'react';
import JediItem from './JediItem';

class JediList extends Component{
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

export default JediList;