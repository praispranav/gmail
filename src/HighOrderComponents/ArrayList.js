import React from 'react'

function ArrayList(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.body} </p>
            {console.log("Data Rendereds", props.name)}
        </div>
    )
}

export default React.memo(ArrayList)
