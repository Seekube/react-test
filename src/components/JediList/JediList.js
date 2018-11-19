import React, {Component} from 'react';

class JediList extends Component {

    render(){
        const { jedi } = this.props;

        return(
            <div>
                {jedi.map((jedi, index) => (
                    <div key={index}>
                        Jedi: id: {jedi.id} name: {jedi.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default JediList