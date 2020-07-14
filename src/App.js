import React from 'react';
import Example from './Example'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
import Example6 from './Example6'
import ReducerDemo from './ReducerDemo'
import Example7 from './useRedux/Example7'
import Example8 from './Example8';
import Example9 from './Example9';
import Example10 from './Example10';

function App(){
  return (
    <div>
      <h2>hooks写法</h2>
      <Example></Example>
      <h2>hooks多状态声明</h2>
      <Example2></Example2>
      <h2>useEffect</h2>
      <Example3></Example3>
      <Example4></Example4>
      <Example5></Example5>
      <h2>useContext</h2>
      <Example6></Example6>
      <h2>useReducer</h2>
      <ReducerDemo></ReducerDemo>
      <h2>useReducer代替Redux</h2>
      <Example7></Example7>
      <h2>useMemo</h2>
      <Example8></Example8>
      <h2>useRef</h2>
      <Example9></Example9>
      <h2>自定义hooks函数获取页面窗口大小</h2>
      <Example10></Example10>
    </div>
  )
}

export default App;