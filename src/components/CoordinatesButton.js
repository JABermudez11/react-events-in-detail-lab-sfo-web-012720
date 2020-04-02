import React, { Component } from 'react'

class CoordinatesButton extends Component {

    findCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return(
            <button onClick={this.findCoordinates}> Click Me</button>
        )
    }
}

export default CoordinatesButton;