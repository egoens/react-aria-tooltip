import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getMessage = (message) => {
  if (typeof message === 'string') return <p>{message}</p>
  return message
}

const TooltipMessage = ({ className, message, arrowSize }) => {
    if (typeof message === 'string')
    return (
        <div className={`${className} ra-tooltip-message`}>
          {getMessage(message)}
        </div>
    )
}

TooltipMessage.displayName = 'TooltipMessage'

TooltipMessage.propTypes = {
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.element
    ]).isRequired
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
