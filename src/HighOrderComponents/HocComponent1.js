import React, { PureComponent } from 'react'
import HocComponent from "./HocComponent"
import ArrayList from "./ArrayList"

class ChildComponent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 2
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    render() {
        // const {url, data} = this.props;
        const Array = this.props.data.map((item)=> <ArrayList name={item.title} body={item.body} />)
        return (
            <div>
            {/* <button onClick={()=> this.props.url(`https://jsonplaceholder.typicode.com/posts?_limit=`)}>Fetch</button> */}
            <button onClick={()=> this.props.handleClick(`https://jsonplaceholder.typicode.com/posts?_limit=`)}>CLick TO SEee More</button>
               {Array}
            </div>
        )
    }
}

export default HocComponent(ChildComponent)
