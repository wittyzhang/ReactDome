import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {cid:123,title:'技术胖的个人博客-1'},
        {cid:456,title:'技术胖的个人博客-2'},
        {cid:789,title:'技术胖的个人博客-3'},
      ]
     }
    //  this.props.history.push('/home/')
  }
  render() { 
    return ( 
      <ul>
        {
          // 重定向和跳转有一个重要的区别，就是跳转式可以用浏览器的回退按钮返回上一级的，而重定向是不可以的
          // this.props.history.push("/home/");  
          this.state.list.map((item, index) => {
            return (
            <li key={index}><Link to={'list/'+ item.cid}>{item.title}</Link></li>
            )
          })
        }
        <li><Redirect to='/home/'>redirect 页面</Redirect></li>
      </ul>
     );
  }
}
 
export default Index;