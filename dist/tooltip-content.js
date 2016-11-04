'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    background: ', ';\n    transition: all .25s;\n    display: none;\n\n    p {\n        padding: .5rem 1rem;\n        margin: 0;\n        white-space: nowrap;\n        color: white;\n    }\n\n    &.top {\n        top: -', 'px;\n        left: 50%;\n        transform: translate(-50%,-120%);\n\n        .ra-tooltip-message {\n            &:after {\n                top: calc(100% - 1px);\n                left: 50%;\n                border-top-color: ', ';\n            }\n        }\n    }\n\n    &.bottom {\n        bottom: -', 'px;\n        left: 50%;\n        transform: translate(-50%,120%);\n\n        .ra-tooltip-message {\n            &:after {\n                top: -', 'px;\n                left: 50%;\n                border-bottom-color: ', ';\n            }\n        }\n    }\n\n    &.left {\n        top: 50%;\n        left: -', 'px;\n        transform: translate(-100%,-50%);\n\n        .ra-tooltip-message {\n            &:after {\n                top: 50%;\n                left: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n                border-left-color: ', ';\n            }\n        }\n    }\n\n    &.right {\n        top: 50%;\n        right: -', 'px;\n        transform: translate(100%,-50%);\n\n        .ra-tooltip-message  {\n            &:after {\n                top: 50%;\n                right: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n                border-right-color: ', ';\n            }\n        }\n    }\n'], ['\n    position: absolute;\n    background: ', ';\n    transition: all .25s;\n    display: none;\n\n    p {\n        padding: .5rem 1rem;\n        margin: 0;\n        white-space: nowrap;\n        color: white;\n    }\n\n    &.top {\n        top: -', 'px;\n        left: 50%;\n        transform: translate(-50%,-120%);\n\n        .ra-tooltip-message {\n            &:after {\n                top: calc(100% - 1px);\n                left: 50%;\n                border-top-color: ', ';\n            }\n        }\n    }\n\n    &.bottom {\n        bottom: -', 'px;\n        left: 50%;\n        transform: translate(-50%,120%);\n\n        .ra-tooltip-message {\n            &:after {\n                top: -', 'px;\n                left: 50%;\n                border-bottom-color: ', ';\n            }\n        }\n    }\n\n    &.left {\n        top: 50%;\n        left: -', 'px;\n        transform: translate(-100%,-50%);\n\n        .ra-tooltip-message {\n            &:after {\n                top: 50%;\n                left: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n                border-left-color: ', ';\n            }\n        }\n    }\n\n    &.right {\n        top: 50%;\n        right: -', 'px;\n        transform: translate(100%,-50%);\n\n        .ra-tooltip-message  {\n            &:after {\n                top: 50%;\n                right: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n                border-right-color: ', ';\n            }\n        }\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tooltipMessage = require('./tooltip-message');

var _tooltipMessage2 = _interopRequireDefault(_tooltipMessage);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToolTipContent = function ToolTipContent(_ref) {
    var className = _ref.className;
    var direction = _ref.direction;
    var message = _ref.message;
    var active = _ref.active;
    var bgcolor = _ref.bgcolor;
    var arrowSize = _ref.arrowSize;

    var tooltipClasses = direction + ' ra-tooltip ' + className;

    return _react2.default.createElement(
        'div',
        { className: tooltipClasses, 'aria-hidden': active ? false : true },
        _react2.default.createElement(_tooltipMessage2.default, { message: message, arrowSize: arrowSize })
    );
};
ToolTipContent.displayName = 'ToolTipContent';

ToolTipContent.propTypes = {
    message: _react.PropTypes.string.isRequired,
    direction: _react.PropTypes.string.isRequired,
    active: _react.PropTypes.bool.isRequired,
    bgcolor: _react.PropTypes.string,
    arrowSize: _react.PropTypes.number.isRequired
};

exports.default = (0, _styledComponents2.default)(ToolTipContent)(_templateObject, function (props) {
    return props.bgcolor;
}, function (props) {
    return props.arrowSize / 2;
}, function (props) {
    return props.bgcolor;
}, function (props) {
    return props.arrowSize / 2;
}, function (props) {
    return props.arrowSize * 2 - 1;
}, function (props) {
    return props.bgcolor;
}, function (props) {
    return props.arrowSize;
}, function (props) {
    return props.arrowSize;
}, function (props) {
    return props.bgcolor;
}, function (props) {
    return props.arrowSize;
}, function (props) {
    return props.arrowSize;
}, function (props) {
    return props.bgcolor;
});