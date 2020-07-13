import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    // 构造函数中绑定性能会高一些，特别是在高级组件开发中，会有很大的作用
    this.handleClick = this.handleClick.bind(this);
  }
  // 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行
  componentWillReceiveProps(){
    console.log('child - componentWillReceiveProps')
  }
  // 组件删除时候执行
  componentWillUnmount(){
    console.log('child - componentWillUnmount')
  }
  /**
   * 
   * @param {*} nextProps  变化后到属性
   * @param {*} nextState  变化后到状态
   */
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps)
    console.log(nextState)
    if(nextState && (nextProps.conent !== nextState.conent)){
      console.log('---')
      return true;
    } else {
      return false;
    }
  }
  render() { 
    console.log('child-render')
    return ( 
      // 子组件时不能操作父组件里的数据的，所以需要借助一个父组件的方法，来修改父组件的内容
    <div onClick={this.handleClick}>{this.props.name}=>{this.props.content}</div>
     );
  }
  handleClick() {
    //子组件要调用父组件方法，其实和传递数据差不多,只要在组件调用时，把方法传递给子组件就可以了,记得这里也要进行this的绑定，如果不绑定子组件是没办法找到这个父组件的方法的。
    this.props.deleteItem(this.props.index);
  }
}
// PropTypes 校验传递值
XiaojiejieItem.propTypes={
  name: PropTypes.string.isRequired, // 必传参数
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func

}
// 设置默认值
XiaojiejieItem.defaultProps={
  name: 'lili'
}
 
export default XiaojiejieItem;