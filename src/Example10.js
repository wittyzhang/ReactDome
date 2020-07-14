import React, { useState, useEffect, useCallback } from 'react';

function useWinSiz(){
  // 用useState设置size的状态,
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  // 每次修改size状态的函数,这个方法使用useCallback，目的是为了缓存方法(useMemo是为了缓存变量)
  const onResize = useCallback(()=>{
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  },[])

  // 然后在第一次进入方法时用useEffect来注册resize监听时间。为了防止一直监听所以在方法移除时，使用return的方式移除监听。最后返回size变量就可以了

  useEffect(()=>{
    window.addEventListener('resize', onResize);
    // 用return解绑，第二个参数为[]时代表 组件销毁的时候进行解绑
    return ()=>{
      window.removeEventListener('resize', onResize);
    }
  },[]);

  return size;
}


function Example10(){
  const pageSize = useWinSiz();
  return (
    <div>
      页面Size: {pageSize.width} * {pageSize.height}
    </div>
  )
}

export default Example10;