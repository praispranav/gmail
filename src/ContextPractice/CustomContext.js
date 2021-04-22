import React,{Component} from 'react'
import UserContext, { UserConsumer } from '../Context'

// function CustomContext() {
//     const Global = () =>{
//         return (
//             <UserConsumer>
//                     {(username)=> {
//                         return <span>{username.body}</span>
//                     }}
//             </UserConsumer>
//         )
//     }
//     return (
//         <div>
//             Hello this is the Game{Global()}.
//         </div>
//     )
// }

class CustomContext extends Component {
    render() {
        return (
            <div>
             {this.context.body}   
            </div>
        )
    }
}


CustomContext.contextType = UserContext   // use only with class Components
export default CustomContext
