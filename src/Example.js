// import React, { Component } from 'react';

// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       count: 0
//      }
//   }
//   render() { 
//     return ( 
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.addCount.bind(this)}>add</button>
//       </div>
//      );
//   }
//   addCount() {
//     this.setState({
//       count: this.state.count+1
//     })
//   }
// }
 
// export default Example;


// hooks写法
// useState是react自带的一个hook函数，它的作用是用来声明状态变量
import React, { useState } from 'react';

function Example (){
  const [count, setCount] = useState(0);

  return ( 
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button><br/>
      <div><strong>useState</strong>是react自带的一个hook函数，它的作用是用来声明状态变量</div>
    </div>
  ); 
}
export default Example;