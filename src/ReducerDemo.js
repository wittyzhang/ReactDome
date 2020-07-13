import React, { useReducer } from 'react';

function ReducerDemo() {
  // useReducer 第一个参数：reducer函数； 第二个参数： count 初始值
  // count是经过一系列业务逻辑加工后的值；dispatch 一个派发器 是个函数
  const [count, dispatch] = useReducer((state, action) =>{
    switch(action){
      case 'add':
        return state+1;
      case 'sub':
        return state-1;
      default:
        return state;
    }
    
  },0);
  
  return ( 
    <div>
      <p>现在的分数是{count}</p>
      <button onClick={()=>{dispatch('add')}}>Increment</button>
      <button onClick={()=>{dispatch('sub')}}>Decrement</button>
    </div>
   );
}

export default ReducerDemo;