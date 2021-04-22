import React,{useReducer, useContext} from 'react'
import { CountContext } from "../App"

export default function UseReducer1() {
    const Countcontext = useContext(CountContext)
    // const [count, dispatch] = useReducer(Reducer, initialState)
    return (
        <div>
            <div><h1>Count - {Countcontext.countState}</h1></div>
            <button onClick={()=> Countcontext.countDispatch('increment')}>Increment</button>    
            <button onClick={()=> Countcontext.countDispatch('decrement')}>Decrement</button>    
            <button onClick={()=> Countcontext.countDispatch("reset")}>Reset</button>
        </div>
    )
}
