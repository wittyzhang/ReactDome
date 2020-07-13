import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from "./actionType";
import { getListAction } from "./actionCreators";
// import axios from 'axios'

//generator函数
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  let res = {
    "data": {
      "list": [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时',
        '晚上8点到10点，学习两个小时'
      ]
    }
  };

  // const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
  const action = getListAction(res.data.list);
  yield put (action);
}
export default mySaga;