import React,{useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
}

const Reducer= (state, action) =>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return {...state,secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function UseReducer2() {
    const [count, dispatch] = useReducer(Reducer, initialState)
    return (
        <div>
            {console.log(count.firstCounter)}
            <div><h1>Count - {count.firstCounter}  --  Counter 2 - {count.secondCounter}</h1><h1></h1></div>

            <button onClick={()=> dispatch( {type:'increment', value: 1})}>Increment</button>    
            <button onClick={()=> dispatch( {type:'increment', value: 5})}>Increment - 5</button>    
            <button onClick={()=> dispatch({type:'decrement' , value: 1})}>Decrement</button>    
            <button onClick={()=> dispatch({type:'decrement' , value: 5})}>Decrement - 5</button>    
            <button onClick={()=> dispatch({type:"reset"})}>Reset</button><br />

            <button onClick={()=> dispatch({type:'increment2', value: 1})}>Increment</button>
            <button onClick={()=> dispatch({type:'decrement2', value: 1})}>Decrement</button>

        </div>
    )
}
