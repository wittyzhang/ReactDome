import React from 'react';
import {connect} from 'react-redux'
import { CHANGE_INPUT, ADD_ITEM} from './store/actionType'

// App里面没有业务逻辑的时候可以把它写成无状态组件
const App = (props) => {
  let {inputValue, inputChange, clickBtn, list} = props
    return (
      <div>
        <div>
          <input type='text' value={inputValue} onChange={inputChange} />
          <button onClick={clickBtn}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index)=>{
              return  (<li key={index}>{item}</li>)
            })
          }
        </ul>
      </div> 
    );
}
// 把原来的state映射成组件中的props属性
const stateToProps = (state)=>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: CHANGE_INPUT,
        value: e.target.value
      }
      dispatch(action);
    },
    clickBtn(){
      let action = {
        type: ADD_ITEM,
      }
      dispatch(action);
    }
  }
}

// connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再链接到一起，让代码更加清晰和易于维护。这也是React-Redux最大的有点。
export default connect(stateToProps, dispatchToProps)(App);