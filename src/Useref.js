import React, {  useEffect, useRef, useState } from 'react'
import Header from './header'
const Useref = () => {
const inputvalue=useRef(null)
const focushandle=()=>{
    inputvalue.current.focus();
}

const [count,setCount]=useState(0);
const refcount=useRef();

useEffect(()=>{
    refcount.current=count

},[count])

  return (
    <>
    <Header/>
        <input type="text" ref={inputvalue}  className='m-3 border-2 border-black p-1'/>
        <button
        onClick={focushandle}
        className="m-3 p-2 bg-blue-600 text-white rounded"
      >
        Focus the input
      </button>
<p>-------------------------------------------------</p>
      <p> {count}</p>
      <p>{refcount.current}</p>
      <button
        onClick={()=>setCount(count+1)}
        className="m-3 p-2 bg-blue-600 text-white rounded"
      >increment</button>
      <button
        onClick={()=>setCount(count-1)}
        className="m-3 p-2 bg-blue-600 text-white rounded"
      >decrement</button>
    </>
  )
}

export default Useref