import React from 'react'

function ChildComponent(props) {
    console.log("Data Rendered" , props.name)
    return (
        <div>

            <h1>{props.name}</h1>
            <p>{props.des}</p>
        </div>
    )
}

export default React.memo(ChildComponent);
