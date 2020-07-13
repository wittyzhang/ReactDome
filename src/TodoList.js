import React, { Component } from 'react';
import store from './store/index'
import TodoListUI from './ToduListUI'
import { changeInputAction, addInputAction, detelInputAction, getTodoList, getMyListAction } from './store/actionCreators' 
// import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
   
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deletItem = this.deletItem.bind(this);

    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange); // 订阅Redux状态
  }
  // 组件挂载完成时被执行--- 只知行一次
  componentDidMount(){
      // thunk 中间价使用的方法
      // const action = getTodoList(); 
      // store.dispatch(action);

      // saga中间件写法
      const action = getMyListAction();
      store.dispatch(action);
  }
  render() { 
    return ( 
      <TodoListUI 
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        listData={this.state.list}
        clickBtn={this.clickBtn}
        deletItem={this.deletItem}
      />
     );
  }
  changeInputValue(e){
    console.log(e.target.value)
    // 想改变Redux里边State的值就要创建Action了。Action就是一个对象，这个对象一般有两个属性，第一个是对Action的描述，第二个是要改变的值。
    const action = changeInputAction(e.target.value)
    // 通过dispatch()方法将action传递给store
    store.dispatch(action)
  }
  clickBtn(e) {
    const action = addInputAction();
    store.dispatch(action);
  }
  deletItem(index){
    console.log(index);
    const action = detelInputAction(index);
    store.dispatch(action);
  }
  storeChange(){
    this.setState(store.getState());
  }
}
 
export default TodoList;