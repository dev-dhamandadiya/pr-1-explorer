import { useState } from "react";

const Counter = () =>{
    const [count , setCount]= useState(0);

    // const increment=()=>{
        // setCount(count + 1);
    // }

    // const decrement = ()=>{
    //     setCount(count - 1);
    // }
     
    // const reset = () =>{
    //     setCount(0)
    // }

    return(
        <>
        <h2>Counter : {count}</h2>
        <button type="submit" onClick={() => setCount(prev => prev + 1)}>count++</button> {"  "}
        <button type="submit" onClick={()=> setCount (prev => prev - 1)}>count--</button> {"  "}
        <button type="reset" onClick={()=> setCount (0)}>Reset</button>

        </>
    )
} 

export default Counter;