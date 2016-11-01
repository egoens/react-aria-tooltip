import React from 'react'
import styled from 'styled-components'

const arrow_size = '5'
const tooltip_color = 'black'

const TooltipWrapper = styled.div`
    position: relative;

    &.active {
        .ra-tooltip {
            display: block;
        }
    }
`

const Tooltip = styled.div`
    position: absolute;
    background: ${tooltip_color};
    transition: all .25s;
    display: none;

    p {
        padding: .5rem 1rem;
        margin: 0;
        white-space: nowrap;
        color: white;
    }

    // directions
    &.top {
        top: 0;
        left: 50%;
        transform: translate(-50%,-120%);

        .ra-tooltip-message {
            // down arrow
            &:after {
                top: 100%;
            	left: 50%;
            	border-top-color: ${tooltip_color};
            }
        }
    }

    &.bottom {
        bottom: 0;
        left: 50%;
        transform: translate(-50%,120%);

        .ra-tooltip-message {
            // up arrow
            &:after {
                top: -${arrow_size * 2}px;
            	left: 50%;
            	border-bottom-color: ${tooltip_color};
            }
        }
    }

    &.left {
        top: 50%;
        left: -${arrow_size}px;
        transform: translate(-100%,-50%);

        .ra-tooltip-message {
            &:after {
                // right arrow
                top: 50%;
            	left: 100%;
                margin-left: 0;
                margin-top: -${arrow_size}px;
            	border-left-color: ${tooltip_color};
            }
        }
    }

    &.right {
        top: 50%;
        right: -${arrow_size}px;
        transform: translate(100%,-50%);

        .ra-tooltip-message  {
            &:after {
                // left arrow
                top: 50%;
            	right: 100%;
                margin-left: 0;
                margin-top: -${arrow_size}px;
            	border-right-color: ${tooltip_color};
            }
        }
    }
`

const TooltipMessage = styled.div`
    position: relative;

    // default arrow indicator styles
    &:after {
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: ${arrow_size}px;
        margin-left: -${arrow_size}px;
    }
}
`

let tooltipIdCounter = 0;

export default class ReactARIAToolTip extends React.Component {
    static displayName = 'ReactARIAToolTip'

    static propTypes = {
        message: React.PropTypes.string.isRequired,
        direction: React.PropTypes.string,
        duration: React.PropTypes.number,
        children: React.PropTypes.node,
        eventType: React.PropTypes.oneOf( ['hover', 'click'] ),
        id: React.PropTypes.string
    }

    static defaultProps = {
        direction: "top",
        duration: 2000,
        eventType: "click"
    }

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

    renderToolTip(tooltipID) {
        const tooltipClasses = `${this.props.direction} ra-tooltip`
        return (
            <Tooltip className={tooltipClasses} aria-hidden={this.state.active ? false : true}>
                <TooltipMessage className="ra-tooltip-message">
                    <p>{this.props.message}</p>
                </TooltipMessage>
            </Tooltip>
        )
    }

    render() {
        let containerClass = "ra-tooltip-wrapper"
        containerClass += (this.state.active) ? " active" : ""
        const tooltipID = this.state.id

        if (this.props.eventType == 'hover') {
            return (
                <TooltipWrapper
                     onMouseOver={this.handleMouseOver.bind(this)}
                     onMouseLeave={this.handleMouseLeave.bind(this)}
                     role="tooltip"
                     id={tooltipID}
                     onFocus={this.handleFocus.bind(this)}
                     className={containerClass}
                >
                     {this.renderToolTip(tooltipID)}
                     {this.addDescribedBy(tooltipID)}
                </TooltipWrapper>
            )
        }

        return (
            <TooltipWrapper
                 onClick={this.handleClick.bind(this)}
                 role="tooltip"
                 className={containerClass}
            >
                 {this.renderToolTip(tooltipID)}
                 {this.addDescribedBy(tooltipID)}
            </TooltipWrapper>
        )

    }
}
