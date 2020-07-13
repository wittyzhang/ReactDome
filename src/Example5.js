import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index(){
  useEffect(()=>{
    console.log(`useEffect=>老弟，你来了Index页面`)
    // 使用返回一个函数的形式进行解绑. 其实每次状态发生变化，useEffect都进行了解绑。
    return () => {
      console.log('老弟， 你从Index页面走了')
    }
  },[])
  return (
    <div>我是首页</div>
  )
}
function List(){
  useEffect(()=>{
    console.log(`useEffect=>老弟，你来了List页面`)
  })
  return (
    <div>我是列表页面</div>
  )
}
function Example5() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
      console.log(`useEffect=>You clicked ${count} times`)
      return ()=>{
          console.log('====================')
      }
  },[count])
  return ( 
    <div>
      <p>3.使用useeffect实现componentWillUnmount声明周期函数</p>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表页</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>

      <dl>
        <dt>useeffect注意的两点：</dt>
        <dd>1.React的首次渲染和之后的每一次渲染都会调用useEffect函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)</dd>
        <dd>2.useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMonut和componentDidUpdate中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了。</dd>
      </dl>
    </div>
   );
}

export default Example5;