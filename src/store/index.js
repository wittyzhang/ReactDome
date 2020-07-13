import { createStore, applyMiddleware, compose } from 'redux' // 引入createStore方法
import reducer from './reducer'
// import thunk from 'redux-thunk' // redux的中间件
import createSagaMiddleware from 'redux-saga' // redux的中间价
import mySaga from './sagas'


//Redux-thunk 比如在Dispatch一个Action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware（中间件）。在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由。
//利用compose创造一个增强函数，就相当于建立了一个链式函数,利用增强函数引入thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// 使用thunk 
// const enhancer = composeEnhancers(applyMiddleware(thunk))

// 使用saga
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))





const store = createStore(reducer, enhancer); // 创建数据存储仓库
// 执行run方法 让saga运行起来
sagaMiddleware.run(mySaga)

// 不使用中间价的写法
// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // 创建数据存储仓库
 
export default store;