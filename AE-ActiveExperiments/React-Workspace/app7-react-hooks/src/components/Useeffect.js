import { useState, useEffect } from "react"

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count;
      }, [count]);
    

return(
    <div>
        <h4> useEffect Hook Demo : useEffect hook runs after the first render and after every update. 
            React updates the DOM by the time it runs the effects.</h4>
        <button onClick={() => setCount (count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => (count === 0 ? setCount(0) : setCount (count - 1))}>-</button>
        
    </div>
)
}
export default UseEffect;
