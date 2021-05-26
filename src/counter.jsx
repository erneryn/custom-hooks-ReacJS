import { useState } from "react";
import useCounter from './useCounter'

const Counter = ()=>{
    const [result,handleAddOne,handleTripple,handleLessOne] = useCounter()

    return(
        <div className="counter">
            <div>
            <button className="green" onClick={handleAddOne}>Add one</button>
            </div>
            <div>
            <button className="yellow" onClick={handleLessOne}>Remove one</button>
            </div>
            <div>
                <button className="grey" onClick={handleTripple}>Add Triple</button>
            </div>
            <div>
            <p>Result:</p>
            <h3>{result}</h3>
            </div>
        </div>
    )
}

export default Counter;