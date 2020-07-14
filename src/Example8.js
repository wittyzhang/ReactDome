import React, { useState, useMemo } from 'react';

// 父组件
function Example8(){
  const [xiaohong, setXiaohong] = useState('小红待客状态')
  const [zhiling, setZhiling] = useState('志玲代课状态')
  return (
    <div>
      <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
      <button onClick={()=>{setZhiling(new Date().getTime() + '向我们走来了')}}>志玲</button>
      <ChildComponent name={xiaohong}>
        {zhiling}
      </ChildComponent>
    </div>
  )
}
// 子组件
function ChildComponent({name, children}) {
  function changeXiaohong (name) {
    console.log('来了，来了，小红来了');
    return name + '向我们走来了';
  }
  // 使用useMemo之后 会根据name状态选择调用changgeXiaohong这个方法，改变->调用; 不改变->不调用
  const actionXiaohong = useMemo(()=>{return changeXiaohong(name)},[name]);

  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </div>
  )
}
export default Example8;