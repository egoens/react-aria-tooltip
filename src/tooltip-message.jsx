import React, { PropTypes } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TooltipMessage = ({ className, message, arrowSize }) => {
    return (
        <div className={`${className} ra-tooltip-message`}>
            <p>{message}</p>
        </div>
    )
}

TooltipMessage.displayName = 'TooltipMessage'

TooltipMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default styled(TooltipMessage)`
    position: relative;

    &:after {
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: ${props => props.arrowSize}px;
        margin-left: -${props => props.arrowSize}px;
    }
`
