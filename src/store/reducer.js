import { CHANGE_INPUT, ADD_ITEM, DELET_ITEM, GET_LIST } from './actionType.js' 
const defaultStore = {
  inputValue: '',
  list: []
} // 默认数据
/**
 * state 指的是原始仓库里的状态
 * action 指的是action新传递的状态
 * ————Reducer里只能接收state，不能改变state
 */
export default (state = defaultStore, action) =>{
  if (action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  // 改变list
  if (action.type === ADD_ITEM){
    //state值只能传递，不能使用
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    console.log(newState.inputValue)
    return newState;
  }
  // 删除list
  if (action.type === DELET_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState;
  }

  // 获取list内容
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list
    return newState;
  }

  return state;
}