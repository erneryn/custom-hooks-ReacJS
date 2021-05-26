import { useState } from "react"

const useCounter = ()=>{
    const [result,setResult ] = useState(0)

    const handleAddOne = ()=>{
        setResult(currentState =>{
            return currentState + 1
        })
    } 

    const handleTripple = ()=>{
        handleAddOne()
        handleAddOne()
        handleAddOne()
    }

    const handleLessOne = ()=>{
        setResult(currentState =>{
            return currentState - 1
        })
    }

    return [
        result,
        handleAddOne,
        handleTripple,
        handleLessOne
    ]

}


export default useCounter
