import React from 'react'
import PropTypes from 'prop-types'
import ToolTipContent from './tooltip-content'
import styled from 'styled-components'

let tooltipIdCounter = 0;

class ReactARIAToolTip extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            active: false,
            direction: props.direction,
            duration: props.duration,
            id: props.id
        }
    }

    componentWillMount() {
        const id = this.props.id || this.uniqueID("ra-tooltip-")
        this.setState({id: id})
    }

    componentWillUnmount () {
        this.timer && clearTimeout(this.timer);
        this.timer = false;
    }

    startTimer() {
        const { duration } = this.props
        this.timer = setTimeout(
            () => this.setState({active: false}), duration
        )
    }

    handleClick() {
        clearTimeout(this.timer)
        this.setState({active: true})
        this.startTimer()
    }

    handleMouseOver() {
        this.setState({active: true})
    }

    handleMouseLeave() {
        this.setState({active: false})
    }

    handleFocus() {
        this.handleClick()
    }

    // create unique id so multiple tooltips can be used in the same view
    uniqueID(prefix) {
        const id = ++tooltipIdCounter + '';
        return prefix ? prefix + id : id;
    }

    // adds tooltip 'aria-describedby' attribute to child element
    addDescribedBy(tooltipID) {
        return React.Children.map(this.props.children, (e) => {
            return React.cloneElement(e, {
                "aria-describedby": tooltipID
            })
        })
    }

    render() {
        const { message, bgcolor, direction, className } = this.props
        const { active } = this.state
        let containerClass = `ra-tooltip-wrapper ${className}`
        containerClass += (active) ? " active" : ""
        const tooltipID = this.state.id

        if (this.props.eventType == 'hover') {
            return (
                <div
                     onMouseOver={this.handleMouseOver.bind(this)}
                     onMouseLeave={this.handleMouseLeave.bind(this)}
                     role="tooltip"
                     id={tooltipID}
                     onFocus={this.handleFocus.bind(this)}
                     className={containerClass}
                >
                    <ToolTipContent
                        message={message}
                        bgcolor={bgcolor}
                        direction={direction}
                        active={active} />
                     {this.addDescribedBy(tooltipID)}
                </div>
            )
        }

        return (
            <div
                 onClick={this.handleClick.bind(this)}
                 role="tooltip"
                 className={containerClass}
            >
                 <ToolTipContent
                     message={message}
                     bgcolor={bgcolor}
                     direction={direction}
                     active={active} />
                 {this.addDescribedBy(tooltipID)}
            </div>
        )

    }
}

ReactARIAToolTip.displayName = 'ReactARIAToolTip'

ReactARIAToolTip.defaultProps = {
    direction: "top",
    duration: 2000,
    eventType: "click",
    bgcolor: "#000"
}

ReactARIAToolTip.propTypes = {
    message: PropTypes.string.isRequired,
    direction: PropTypes.string,
    duration: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    children: PropTypes.node,
    eventType: PropTypes.oneOf( ['hover', 'click'] ),
    id: PropTypes.string,
    bgcolor: PropTypes.string
}

export default styled(ReactARIAToolTip)`
    position: relative;
    display: inline-block;
    width: auto;

    &.active {
        .ra-tooltip {
            display: block;
        }
    }
`
