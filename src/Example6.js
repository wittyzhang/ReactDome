import React, { useState, createContext, useContext } from 'react';

const countContext = createContext(); // 创建上下文

// 以前class 用props传值
// useContext 它可以帮助我们跨越组件层级直接传递变量，实现共享 解决的是组件之间值传递的问题
// useReducer 解决状态共享

function Conter(){
  let count = useContext(countContext) //一句话就可以得到count useContext是个函数 参数为父组件的上下文
  return (<h4>{count}</h4>)
}

function Example6() {
  const [count, setCount] = useState(0);
  
  return ( 
    <div>
      <p>useContext，它可以帮助我们跨越组件层级直接传递变量，实现共享。需要注意的是useContext和redux的作用是不同的，一个解决的是组件之间值传递的问题，一个是应用中统一管理状态的问题，但通过和useReducer的配合使用，可以实现类似Redux的作用。</p>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      {/* Provider  属性为要共享的数据*/}
      <countContext.Provider value={count}>
        {/* 里面要放置子组件 */}
        <Conter></Conter>
      </countContext.Provider>
    </div>
   );
}

export default Example6;