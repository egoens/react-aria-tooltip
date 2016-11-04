import React, { PropTypes }  from 'react'
import TooltipMessage from './tooltip-message'
import styled from 'styled-components'

const ToolTipContent = ({ className, direction, message, active, bgcolor, arrowSize }) => {
    const tooltipClasses = `${direction} ra-tooltip ${className}`

    return (
        <div className={tooltipClasses} aria-hidden={active ? false : true}>
            <TooltipMessage message={message} arrowSize={arrowSize} />
        </div>
    )
}
ToolTipContent.displayName = 'ToolTipContent'

ToolTipContent.propTypes = {
    message: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    bgcolor: PropTypes.string,
    arrowSize: PropTypes.number.isRequired
}

export default styled(ToolTipContent)`
    position: absolute;
    background: ${props => props.bgcolor};
    transition: all .25s;
    display: none;

    p {
        padding: .5rem 1rem;
        margin: 0;
        white-space: nowrap;
        color: white;
    }

    &.top {
        top: -${props => props.arrowSize/2}px;
        left: 50%;
        transform: translate(-50%,-120%);

        .ra-tooltip-message {
            &:after {
                top: calc(100% - 1px);
                left: 50%;
                border-top-color: ${props => props.bgcolor};
            }
        }
    }

    &.bottom {
        bottom: -${props => props.arrowSize/2}px;
        left: 50%;
        transform: translate(-50%,120%);

        .ra-tooltip-message {
            &:after {
                top: -${props => props.arrowSize * 2 - 1}px;
                left: 50%;
                border-bottom-color: ${props => props.bgcolor};
            }
        }
    }

    &.left {
        top: 50%;
        left: -${props => props.arrowSize}px;
        transform: translate(-100%,-50%);

        .ra-tooltip-message {
            &:after {
                top: 50%;
                left: 100%;
                margin-left: 0;
                margin-top: -${props => props.arrowSize}px;
                border-left-color: ${props => props.bgcolor};
            }
        }
    }

    &.right {
        top: 50%;
        right: -${props => props.arrowSize}px;
        transform: translate(100%,-50%);

        .ra-tooltip-message  {
            &:after {
                top: 50%;
                right: 100%;
                margin-left: 0;
                margin-top: -${props => props.arrowSize}px;
                border-right-color: ${props => props.bgcolor};
            }
        }
    }
`
