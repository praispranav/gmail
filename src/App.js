// import React from "react"
// import { UserProvider } from "./Context"
// import CustomContext from "./ContextPractice/CustomContext"

// function App() {
//   return (
//     <div>
//       {/* <UserProvider value="Pranav Game"> */}
//         <CustomContext />
//       {/* </UserProvider> */}
//       <UserProvider value="Pranav Zero">
//         <CustomContext />
//       </UserProvider>
//     </div>
//   );
// }
//For Global state management


import React,{useContext,useReducer} from 'react'
import GlobalStateTest from './Reducer/GlobalStateTest'
import UseReducer1 from "./Reducer/UseReducer1"
import UseReducer2 from "./Reducer/UseReducer2"
import UseReducer3 from "./Reducer/UseReducer3"

export const CountContext = React.createContext() 

const initialState = 0

const reducer= (state, action) =>{
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

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <CountContext.Provider value={{ countState : count, countDispatch : dispatch}}>
        <UseReducer1 />
        <GlobalStateTest />
      </CountContext.Provider>
    </div>
  )
}
