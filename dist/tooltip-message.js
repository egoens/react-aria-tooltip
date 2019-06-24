'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n\n    &:after {\n        border: solid transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-width: ', 'px;\n        margin-left: -', 'px;\n    }\n'], ['\n    position: relative;\n\n    &:after {\n        border: solid transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-width: ', 'px;\n        margin-left: -', 'px;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getMessage = function getMessage(message) {
    if (typeof message === 'string') return _react2.default.createElement(
        'p',
        null,
        message
    );
    return message;
};

var TooltipMessage = function TooltipMessage(_ref) {
    var className = _ref.className,
        message = _ref.message,
        arrowSize = _ref.arrowSize;

    return _react2.default.createElement(
        'div',
        { className: className + ' ra-tooltip-message' },
        getMessage(message)
    );
};

TooltipMessage.displayName = 'TooltipMessage';

TooltipMessage.propTypes = {
    message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.element]).isRequired
};

exports.default = (0, _styledComponents2.default)(TooltipMessage)(_templateObject, function (props) {
    return props.arrowSize;
}, function (props) {
    return props.arrowSize;
});