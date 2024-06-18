import React, { useEffect, useRef, useState } from 'react'

const LearnHooks = () => {
    const btnRef =useRef();
    const [count,setCount] = useState(0)
    useEffect(()=> {
        console.log(count)
    },[count]);
  return (
    <div>
      <button style={{display:"none"}} ref={btnRef} onClick={()=> setCount((prev)=>prev+1)}>click</button>
      <br />
      <br />
      <button onClick={()=>{btnRef.current.click()
        btnRef.current.style.display="block"
      }}>trigger</button>
    </div>
  )
}

export default LearnHooks