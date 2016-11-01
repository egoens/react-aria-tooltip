import React from 'react'
import styled from 'styled-components'

export default class ReactARIAToolTipContent extends React.Component {
    static displayName = 'ReactARIAToolTipContent'

    static propTypes = {
        message: React.PropTypes.string.isRequired,
        direction: React.PropTypes.string.isRequired,
        active: React.PropTypes.bool.isRequired,
        bgcolor: React.PropTypes.string
    }

    render() {
        const { direction, message, active, bgcolor } = this.props
        const tooltipClasses = `${direction} ra-tooltip`

        const arrow_size = '5'

        const Tooltip = styled.div`
            position: absolute;
            background: ${bgcolor};
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
                    	border-top-color: ${bgcolor};
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
                    	border-bottom-color: ${bgcolor};
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
                    	border-left-color: ${bgcolor};
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
                    	border-right-color: ${bgcolor};
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

        return (
            <Tooltip className={tooltipClasses} aria-hidden={active ? false : true}>
                <TooltipMessage className="ra-tooltip-message">
                    <p>{message}</p>
                </TooltipMessage>
            </Tooltip>
        )
    }
}
