import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
  return ( <div>列表页面{this.state.id}</div> );
  }
  componentDidMount(){
    console.log(this.props.match)
    this.setState({
      id: this.props.match.params.id
    })
  }
}
 
export default List;