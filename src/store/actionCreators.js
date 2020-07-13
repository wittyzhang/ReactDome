import { CHANGE_INPUT, ADD_ITEM, DELET_ITEM, GET_LIST, GET_MY_LIST } from './actionType.js' 
// import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value: value
})

export const addInputAction = () => {
  return {
      type: ADD_ITEM
  }
}

export const detelInputAction = (index) => {
  return {
    type: DELET_ITEM,
    index: index
  }
}

export const getListAction = (data) => {
  return {
    type: GET_LIST,
    list: data
  }
}

export const getTodoList = () => {
  return (dispatch) => {
      let res = {
        "data": {
          "list": [
            '早上4点起床，锻炼身体',
            '中午下班游泳一小时',
            '晚上8点到10点，学习两个小时'
          ]
        }
      };
      let data = res.data.list;
      const action = getListAction(data);
      dispatch(action);
      console.log(data);
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    // .then((res)=>{
    //   let data = res.data;
    //   console.log(data);
      
    // })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})