import React, { useState, useRef, useEffect} from 'react';

function Example9(){

  const inputEl = useRef(null)

  const onButtonClick = ()=>{
    inputEl.current.value='jsPang'
    console.log(inputEl)
  }
  
  const [text, setText] = useState('text');
  const textRef = useRef();

  useEffect(()=>{
    textRef.current = text;
    console.log('textRef.current' + textRef.current)
  })

  return (
    <div>
      <p>useRef可以获取DOM元素</p>
      {/*保存input的ref到inputEl */}
      <input ref={inputEl} type="text"></input>
      <button onClick={onButtonClick}>在input上展示文字</button>

      <p>useRef可以保存变量</p>
      <input value={text} onChange={(e)=>{setText(e.target.value)}}></input>
    </div>
  )
}

export default Example9;