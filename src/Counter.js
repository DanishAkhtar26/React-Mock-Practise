import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
      The count is {count}
      <br></br>
      <button onClick={()=>{setCount(count+1)}}>Increment Button</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement Button</button>
      <button onClick={()=>{setCount(0)}}>Reset Button</button>
    </div>
  )
}
