import React from 'react'

export default function HeaderState({username}) {
  const[count,setCount]=React.useState(0);
  return (
    <div>
      <h3>Welcome {username}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count </button>
      <h3>count = {count}</h3>
      <hr/>
    </div>
  )
}
