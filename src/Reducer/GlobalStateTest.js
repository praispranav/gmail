import React,{useContext} from 'react'
import { CountContext } from '../App';

export default function GlobalStateTest() {
    const context = useContext(CountContext);
    return (
        <div>
            <h2>Count -- {context.countState}</h2>
        </div>
    )
}
