import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd'

//无状态组件其实就是一个函数，它不用再继承任何的类（class），当然如名字所一样，也不存在state（状态）。因为无状态组件其实就是一个函数（方法）,所以它的性能也比普通的React组件要好。
const ToduListUI = (props) => {
    return ( 
      <div>
        <div>
          <Input 
          value={props.inputValue} 
          placeholder='请填写添加项'
          style={{width: '250px', marginRight: '10px'}} 
          onChange={props.changeInputValue}/>
          <Button type="primary" onClick={props.clickBtn}>增加</Button>
        </div>
        <div style={{width:'300px', marginTop: '10px'}}>
          <List
          bordered
          dataSource={props.listData}
          renderItem={(item, index)=>(<List.Item onClick={()=>{props.deletItem(index)}}> {item} </List.Item>)}/>
        </div>
      </div>
     );
}
 
export default ToduListUI;