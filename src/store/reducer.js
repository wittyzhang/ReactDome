import { CHANGE_INPUT, ADD_ITEM} from './actionType'

const defalutState = {
  list:[],
  inputValue: '默认只'
}
export default (state = defalutState, action)=>{
  if (action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = ''
    return newState;
  }
  return state;
}