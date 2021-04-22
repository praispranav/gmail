import React, { PureComponent } from 'react'

class ChildPureComponent extends PureComponent {
    render() {
        console.log("Item Rendered", this.props.name)
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.des}</p>
            </div>
        )
    }
}

export default ChildPureComponent
