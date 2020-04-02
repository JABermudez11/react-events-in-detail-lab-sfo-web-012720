import React, { Component } from 'react'


class DelayedButton extends Component {

    onDelayedClick = (e) => {
        e.persist()

        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.onDelayedClick} >Click Me pls</button>
        )
    }
}

export default DelayedButton;