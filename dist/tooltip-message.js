'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n\n    &:after {\n        border: solid transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-width: ', 'px;\n        margin-left: -', 'px;\n    }\n'], ['\n    position: relative;\n\n    &:after {\n        border: solid transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-width: ', 'px;\n        margin-left: -', 'px;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TooltipMessage = function TooltipMessage(_ref) {
    var className = _ref.className;
    var message = _ref.message;
    var arrowSize = _ref.arrowSize;

    return _react2.default.createElement(
        'div',
        { className: className + ' ra-tooltip-message' },
        _react2.default.createElement(
            'p',
            null,
            message
        )
    );
};

TooltipMessage.displayName = 'TooltipMessage';

TooltipMessage.propTypes = {
    message: _react.PropTypes.string.isRequired
};

exports.default = (0, _styledComponents2.default)(TooltipMessage)(_templateObject, function (props) {
    return props.arrowSize;
}, function (props) {
    return props.arrowSize;
});