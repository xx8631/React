import React, { useReducer } from 'react'
export default function HooksPage() {
  const [state, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <h3></h3>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:"ADD"})}>add</button>
    </div>
  )
}
