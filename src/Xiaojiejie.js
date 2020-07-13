import React, {Component, Fragment} from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Boss from './Boss'
// import axios from 'axios'

/**
 * 生命周期函数指在某一个时刻组件会自动调用执行的函数
 *  有四个阶段：
 *  Initialization:初始化阶段。
 *  Mounting: 挂在阶段。
 *  Updation: 更新阶段。
 *  Unmounting: 销毁阶段
 */
// React要求必须在一个组件的最外层进行包裹。
class Xiaojiejie extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: ['头部按摩', '背部精油']
    }
  }
  // 在组件即将被挂载到页面的时刻执行 --- 只知行一次
  componentWillMount() {
    console.log('componentWillMount-----组件即将挂载到页面到时刻')
  }
  // 组件挂载完成时被执行--- 只知行一次
  componentDidMount() {
    console.log('componentDidMount--------组件挂载完成时刻')
    /**
     * 可以在componentDidMount生命周期函数里请求ajax，我也建议在componentDidMount函数里执行，因为在render里执行，会出现很多问题，比如一直循环渲染；在componentWillMount里执行，在使用RN时，又会有冲突。所以强烈建议在componentDidMount函数里作ajax请求。
     */
    // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    // .then((res)=>{
    //   console.log('axios获取数据成功---'+ JSON.stringify(res))
    // })
    // .catch((err)=>{
    //   console.log(`获取数据失败--${err}`);
    // })
  }
 //m函数会在组件更新之前，自动被执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate------组件发生改变前知行')
    // 它要求返回一个布尔类型的结果，必须有返回值; true:同意更新 false:不同意更新
    return true;
  }
  // componentWillUpdate在组件更新之前，但shouldComponenUpdate之后被执行。但是如果shouldComponentUpdate返回false，这个函数就不会被执行了。
  componentWillUpdate() {
    console.log('componentWillUpdate----在组件更新之前 shouldComponentUpdate之后执行')
  }
  // 组件更新之后知行
  componentDidUpdate() {
    console.log('componentDidUpdate-----在组件更新之后执行')
  }
  // 在顶层组件中不会被执行 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行 在render之后
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps')
  // }
  // 页面state或props发生变化时执行
  render(){
    console.log('render')
    return (
      <Fragment>
        {/* jsx中注释应该用大括号包裹，以后同js注释写法
            jsx中样式名称不能使用class="" 应该使用className="" 避免和js中class类混淆
            jsx中html解析可以使用 dangerouslySetInnerHTML={{__html:内容}}
            jsx中label关联其他标签不能使用for="id" 应该使用htmlFor="id" 避免和js fro循环混淆
        */}
        <div>
          <label htmlFor="jspang">加入服务：</label>
          <input id="jspang" 
           value={this.state.inputValue} 
           onChange={this.inputChange.bind(this)} 
           ref={(input)=>{this.addFw = input;}}
          ></input>
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
       
        <ul ref={(ul)=>{this.ul=ul}}>
          <TransitionGroup>
          {
                this.state.list.map((item,index)=>{
                    return (
                      <CSSTransition
                        timeout={1000}
                        classNames='boss-text'
                        unmountOnExit
                        appear={false}
                      >
                        <XiaojiejieItem 
                          key={index+item}  
                          content={item}
                          index={index}
                          deleteItem={this.deleteItem.bind(this)}
                        />
                      </CSSTransition>
                        
                    )
                })
            }
          </TransitionGroup>

        </ul> 
          <Boss />
      </Fragment>
    )
  }
  inputChange(e){
    //另一个是React中改变值需要使用this.setState方法
    this.setState({
      // inputValue: e.target.value
      inputValue: this.addFw.value
    })
  }
  addList(e){
    //setState是一个异步函数, setState第二个参数可以是个回调函数
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    },()=>{
      console.log(this.ul.querySelectorAll('div').length)
    })
    
  }
  deleteItem(index){
    //记住React是禁止直接操作state的
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie;