import { useState, useEffect } from "react"

const UseState = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count;
      }, [count]);
    

return(
    <div>
        <h3> useState Hook Demo : useState hook is used for storing a state within a component</h3>
        <button onClick={() => setCount (count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => (count === 0 ? setCount(0) : setCount (count - 1))}>-</button>
        
    </div>
)
}
export default UseState;
