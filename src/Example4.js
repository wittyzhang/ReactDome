import React, { useState, useEffect } from 'react';

function Example4() {
  const [count, setCount] = useState(0); // useState里面为值的初始状态
  /**
   * 那这段代码逻辑是什么？我们梳理一下:首先，我们生命了一个状态变量count,将它的初始值设为0，然后我们告诉react，我们的这个组件有一个副作用。给useEffecthook传了一个匿名函数，这个匿名函数就是我们的副作用。在这里我们打印了一句话，当然你也可以手动的去修改一个DOM元素。当React要渲染组件时，它会记住用到的副作用，然后执行一次。等Reat更新了State状态时，它再一词执行定义的副作用函数。
   */
  useEffect(()=>{
    console.log(`useEffect=>You clicked ${count} times`)
  })
  return ( 
    <div>
      <p>2.使用useeffect函数代替生命周期</p>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>add</button>

      <dl>
        <dt>useeffect注意的两点：</dt>
        <dd>1.React的首次渲染和之后的每一次渲染都会调用useEffect函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)</dd>
        <dd>2.useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMonut和componentDidUpdate中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了。</dd>
      </dl>
    </div>
   );
}

export default Example4;