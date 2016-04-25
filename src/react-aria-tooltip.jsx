import React from 'react'
import classNames from 'classnames'

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
        const id = this.props.id || this.uniqueID("tooltip-")
        this.setState({id: id})
    }

    componentWillUnmount () {
        this.timer && clearTimeout(this.timer);
        this.timer = false;
    }

    startTimer() {
        this.timer = setTimeout(
            () => this.setState({active: false}), this.props.duration
        )
    }

    handleClick() {
        this.setState({active: true})
        clearTimeout(this.timer)
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

    renderToolTipWrapper(tooltipID) {
        const wrapperClasses = classNames(
            "react-aria-tooltip-wrapper", this.props.direction
        )

        return (
            <div className={wrapperClasses} aria-hidden={this.state.active ? false : true}>
                <div className="react-aria-tooltip-message">
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }

    render() {
        const containerClasses = classNames(
            "react-aria-tooltip", { "active": this.state.active }
        )
        const tooltipID = this.state.id

        if (this.props.eventType == 'hover') {
            return (
                <div onMouseOver={::this.handleMouseOver}
                     onMouseLeave={::this.handleMouseLeave}
                     className={containerClasses}
                     role="tooltip"
                     id={tooltipID}
                     onFocus={::this.handleFocus}>

                     {this.renderToolTipWrapper(tooltipID)}
                     {this.addDescribedBy(tooltipID)}
                </div>
            )
        }

        return (
            <div onClick={::this.handleClick}
                 className={containerClasses}
                 role="tooltip">

                 {this.renderToolTipWrapper(tooltipID)}
                 {this.addDescribedBy(tooltipID)}
            </div>
        )

    }
}
