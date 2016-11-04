import React from 'react'
import styled from 'styled-components'

const arrowSize = 5

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
        border-width: ${arrowSize}px;
        margin-left: -${arrowSize}px;
    }
}
`

const ReactARIAToolTipContent = ({ className, direction, message, active, bgcolor }) => {
    const tooltipClasses = `${direction} ra-tooltip ${className}`

    return (
        <div className={tooltipClasses} aria-hidden={active ? false : true}>
            <TooltipMessage className="ra-tooltip-message">
                <p>{message}</p>
            </TooltipMessage>
        </div>
    )
}
ReactARIAToolTipContent.displayName = 'ReactARIAToolTipContent'

ReactARIAToolTipContent.propTypes = {
    message: React.PropTypes.string.isRequired,
    direction: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    bgcolor: React.PropTypes.string
}

export default styled(ReactARIAToolTipContent)`
    & {
        position: absolute;
        background: ${(props) => props.bgcolor};
        transition: all .25s;
        display: none;
    }

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
                border-top-color: ${props => props.bgcolor};
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
                top: -${arrowSize * 2}px;
                left: 50%;
                border-bottom-color: ${props => props.bgcolor};
            }
        }
    }

    &.left {
        top: 50%;
        left: -${arrowSize}px;
        transform: translate(-100%,-50%);

        .ra-tooltip-message {
            &:after {
                // right arrow
                top: 50%;
                left: 100%;
                margin-left: 0;
                margin-top: -${arrowSize}px;
                border-left-color: ${props => props.bgcolor};
            }
        }
    }

    &.right {
        top: 50%;
        right: -${arrowSize}px;
        transform: translate(100%,-50%);

        .ra-tooltip-message  {
            &:after {
                // left arrow
                top: 50%;
                right: 100%;
                margin-left: 0;
                margin-top: -${arrowSize}px;
                border-right-color: ${props => props.bgcolor};
            }
        }
    }
`
