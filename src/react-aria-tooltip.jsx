import React from 'react'
import ReactARIAToolTipContent from './react-aria-tooltip-content'
import styled from 'styled-components'

const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin: auto;
    width: auto;

    &.active {
        .ra-tooltip {
            display: block;
        }
    }
`

let tooltipIdCounter = 0;

export default class ReactARIAToolTip extends React.Component {
    static displayName = 'ReactARIAToolTip'

    static propTypes = {
        message: React.PropTypes.string.isRequired,
        direction: React.PropTypes.string,
        duration: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        children: React.PropTypes.node,
        eventType: React.PropTypes.oneOf( ['hover', 'click'] ),
        id: React.PropTypes.string,
        bgcolor: React.PropTypes.string
    }

    static defaultProps = {
        direction: "top",
        duration: 2000,
        eventType: "click",
        bgcolor: "#000"
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

    render() {
        const { message, bgcolor, direction } = this.props
        const { active } = this.state
        let containerClass = "ra-tooltip-wrapper"
        containerClass += (active) ? " active" : ""
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
                    <ReactARIAToolTipContent message={message} bgcolor={bgcolor} direction={direction} active={active} />
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
                 <ReactARIAToolTipContent
                     message={message}
                     bgcolor={bgcolor}
                     direction={direction}
                     active={active} />
                 {this.addDescribedBy(tooltipID)}
            </TooltipWrapper>
        )

    }
}
