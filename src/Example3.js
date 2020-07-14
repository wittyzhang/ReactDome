import React, { Component } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  componentDidMount(){
    console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
  }
  componentDidUpdate() {
    console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
  }
  render() { 
    return ( 
      <div>
        <p>1.使用class方式添加生命周期</p>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.addCount.bind(this)}>add</button>
      </div>
     );
  }
  addCount(){
    this.setState({
      count: this.state.count+1
    })
  }
}
 
export default Example3;