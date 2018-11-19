import React, {Component}  from 'react';
import JediList from './JediList.js';
import {connect} from 'react-redux'; 
import { fetchJedi } from '../../actions/action.js';

class JediListContainer extends Component {

    // fetch data as the component did mount rather than
    // will mount 
    componentDidMount() {
      this.fetchJedi();
    }
  
    fetchJedi() {
      this.props.dispatch(fetchJedi());
    }
  


    render(){
        return <JediList jedi={this.props.jedi} />
    }
}


function mapStateToProps(state, ownProps) {  
  return {jedi: state.jedi}
}

export default connect(mapStateToProps)(JediListContainer);
