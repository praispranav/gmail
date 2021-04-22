import React,{useEffect, useState} from 'react'
import axios from "axios"
import ChildComponent from "./ChildComponent"

function UseEffectPractice() {
    const [count, setCount] = useState(2)
    const [Post, setPost] = useState([])
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=${count}`
        axios.get(url)
            .then((response) => setPost(response.data))
            .catch((err)=> console.log("error",err))
    }, [count])

    const Array = Post.map((item)=> <ChildComponent name={item.title} des={item.body} /> )
    return (
        <div>
            <button onClick={()=> setCount(count + 2)}>See More </button>
            {Array}
        </div>
    )
}
export default UseEffectPractice;