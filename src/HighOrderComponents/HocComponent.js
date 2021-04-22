import React from "react";
import axios from "axios";

const withFetch = (OriginalComponent) => {
    class HOC extends React.PureComponent{
        constructor(props) {
            super(props)
        
            this.state = {
                count: 2,
                 data: []
            }
            this.fetchData = this.fetchData.bind(this)
            this.handleClick = this.handleClick.bind(this)
        }
        handleClick(url){
            this.setState({
                count: this.state.count + 2
            })
            this.fetchData(url)
            console.log("this.state", this.state.count)
        }
        fetchData(url){
            console.log(url + this.state.count)
            axios.get(url+this.state.count)
                .then((resp)=> this.setState({data: resp.data}))
                .catch((err)=> console.log(err))
        }

        render(){
            return <OriginalComponent handleClick={this.handleClick} data={this.state.data} />
        }
        
    }
    return HOC
}
export default withFetch;