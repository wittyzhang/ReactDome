import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({}); // 颜色共享的上下文

export const UPDATE_COLOR = 'update_color'; 

const reducer = (state, action) => {
  switch(action.type){
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
}
 
// 颜色组件 props：子组件的
export const Color = (props) => {
  // color : useReducer 返回值； 第二个参数是dispatch;
  const [color, dispatch] = useReducer(reducer, 'blue');

  return(
    // {props.children} 显示对应的子组件
    <ColorContext.Provider value={{color, dispatch}}>
      {props.children}  
    </ColorContext.Provider>
  )
}

