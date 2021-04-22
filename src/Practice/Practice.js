import React, { Component } from 'react'
import axios from "axios"
import ChildPureComponent from "./ChildPureComponent"

class Practice extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:10,
             data: []
        }
        this.fetchData = this.fetchData.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    fetchData(numOfitem){
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=${numOfitem}`
        axios.get(url)
            .then((response)=>{
                this.setState({
                    data: response.data
                })
                // console.log(response.data);
            })
            .catch((err)=> console.log(err))
    }
    componentWillMount(){
          this.fetchData(2)
    }
    
    handleClick(){
        this.setState({
            count: this.state.count+5
            })
            console.log(this.state.count)
        this.fetchData(this.state.count)
    }
    

    render() {
        const Array = this.state.data.map((item)=> <ChildPureComponent name={item.title} des={item.body} />)
        return (
            <div>
            <button onClick={this.handleClick}>See More</button>
                {Array}
                {/* <ChildCOmponents  /> */}
            {/* {()=>  this.fetchData(2)} */}
            </div>
        )
    }
}

export default Practice
