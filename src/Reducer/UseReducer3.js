import React,{useReducer} from 'react'

const initialState = 0

const Reducer= (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function UseReducer1() {
    const [count, dispatch] = useReducer(Reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(Reducer, initialState)
    return (
        <div>
            <div><h1>Count - {count}</h1></div>
            <button onClick={()=> dispatch('increment')}>Increment</button>    
            <button onClick={()=> dispatch('decrement')}>Decrement</button>    
            <button onClick={()=> dispatch("reset")}>Reset</button>

            <div><h1>Count - {countTwo}</h1></div>
            <button onClick={()=> dispatchTwo('increment')}>Increment</button>    
            <button onClick={()=> dispatchTwo('decrement')}>Decrement</button>    
            <button onClick={()=> dispatchTwo("reset")}>Reset</button>
        </div>
    )
}
