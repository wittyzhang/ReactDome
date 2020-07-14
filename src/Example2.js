import React, { useState } from 'react';

function Example2() {
  // React是根据useState出现的顺序来确定的
  // 就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
  const [age ] = useState(18);
  const [sex ] = useState('男');
  const [work] = useState('开发工程师');

  return (
    <div>
      <p>jspang: 今年 {age} 岁</p>
      <p>性别： {sex}</p>
      <p>职业： {work}</p>
      <dl>
        <dt>多状态声明注意事项：</dt>
        <dd>就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。</dd>
        <dd>React是根据useState出现的顺序来确定的</dd>
      </dl>
    </div>
  )
}

export default Example2;