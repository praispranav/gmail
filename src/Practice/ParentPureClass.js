import React, { Component } from 'react'

class ParentPureClass extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    

    componentWillMount(){
        console.log("component Is Mounted ")
    }
    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
        console.log("State Chnaged")
    }

    render() {
        return (
            <div>
            {console.log("rendeer rerended")}
                <button onClick={this.handleClick}>Click me</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default ParentPureClass
