'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            position: absolute;\n            background: ', ';\n            transition: all .25s;\n            display: none;\n\n            p {\n                padding: .5rem 1rem;\n                margin: 0;\n                white-space: nowrap;\n                color: white;\n            }\n\n            // directions\n            &.top {\n                top: 0;\n                left: 50%;\n                transform: translate(-50%,-120%);\n\n                .ra-tooltip-message {\n                    // down arrow\n                    &:after {\n                        top: 100%;\n                    \tleft: 50%;\n                    \tborder-top-color: ', ';\n                    }\n                }\n            }\n\n            &.bottom {\n                bottom: 0;\n                left: 50%;\n                transform: translate(-50%,120%);\n\n                .ra-tooltip-message {\n                    // up arrow\n                    &:after {\n                        top: -', 'px;\n                    \tleft: 50%;\n                    \tborder-bottom-color: ', ';\n                    }\n                }\n            }\n\n            &.left {\n                top: 50%;\n                left: -', 'px;\n                transform: translate(-100%,-50%);\n\n                .ra-tooltip-message {\n                    &:after {\n                        // right arrow\n                        top: 50%;\n                    \tleft: 100%;\n                        margin-left: 0;\n                        margin-top: -', 'px;\n                    \tborder-left-color: ', ';\n                    }\n                }\n            }\n\n            &.right {\n                top: 50%;\n                right: -', 'px;\n                transform: translate(100%,-50%);\n\n                .ra-tooltip-message  {\n                    &:after {\n                        // left arrow\n                        top: 50%;\n                    \tright: 100%;\n                        margin-left: 0;\n                        margin-top: -', 'px;\n                    \tborder-right-color: ', ';\n                    }\n                }\n            }\n        '], ['\n            position: absolute;\n            background: ', ';\n            transition: all .25s;\n            display: none;\n\n            p {\n                padding: .5rem 1rem;\n                margin: 0;\n                white-space: nowrap;\n                color: white;\n            }\n\n            // directions\n            &.top {\n                top: 0;\n                left: 50%;\n                transform: translate(-50%,-120%);\n\n                .ra-tooltip-message {\n                    // down arrow\n                    &:after {\n                        top: 100%;\n                    \tleft: 50%;\n                    \tborder-top-color: ', ';\n                    }\n                }\n            }\n\n            &.bottom {\n                bottom: 0;\n                left: 50%;\n                transform: translate(-50%,120%);\n\n                .ra-tooltip-message {\n                    // up arrow\n                    &:after {\n                        top: -', 'px;\n                    \tleft: 50%;\n                    \tborder-bottom-color: ', ';\n                    }\n                }\n            }\n\n            &.left {\n                top: 50%;\n                left: -', 'px;\n                transform: translate(-100%,-50%);\n\n                .ra-tooltip-message {\n                    &:after {\n                        // right arrow\n                        top: 50%;\n                    \tleft: 100%;\n                        margin-left: 0;\n                        margin-top: -', 'px;\n                    \tborder-left-color: ', ';\n                    }\n                }\n            }\n\n            &.right {\n                top: 50%;\n                right: -', 'px;\n                transform: translate(100%,-50%);\n\n                .ra-tooltip-message  {\n                    &:after {\n                        // left arrow\n                        top: 50%;\n                    \tright: 100%;\n                        margin-left: 0;\n                        margin-top: -', 'px;\n                    \tborder-right-color: ', ';\n                    }\n                }\n            }\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            position: relative;\n\n            // default arrow indicator styles\n            &:after {\n                border: solid transparent;\n                content: " ";\n                height: 0;\n                width: 0;\n                position: absolute;\n                pointer-events: none;\n                border-width: ', 'px;\n                margin-left: -', 'px;\n            }\n        }\n        '], ['\n            position: relative;\n\n            // default arrow indicator styles\n            &:after {\n                border: solid transparent;\n                content: " ";\n                height: 0;\n                width: 0;\n                position: absolute;\n                pointer-events: none;\n                border-width: ', 'px;\n                margin-left: -', 'px;\n            }\n        }\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactARIAToolTipContent = function (_React$Component) {
    _inherits(ReactARIAToolTipContent, _React$Component);

    function ReactARIAToolTipContent() {
        _classCallCheck(this, ReactARIAToolTipContent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactARIAToolTipContent).apply(this, arguments));
    }

    _createClass(ReactARIAToolTipContent, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var direction = _props.direction;
            var message = _props.message;
            var active = _props.active;
            var bgcolor = _props.bgcolor;

            var tooltipClasses = direction + ' ra-tooltip';

            var arrow_size = '5';

            var Tooltip = _styledComponents2.default.div(_templateObject, bgcolor, bgcolor, arrow_size * 2, bgcolor, arrow_size, arrow_size, bgcolor, arrow_size, arrow_size, bgcolor);

            var TooltipMessage = _styledComponents2.default.div(_templateObject2, arrow_size, arrow_size);

            return _react2.default.createElement(
                Tooltip,
                { className: tooltipClasses, 'aria-hidden': active ? false : true },
                _react2.default.createElement(
                    TooltipMessage,
                    { className: 'ra-tooltip-message' },
                    _react2.default.createElement(
                        'p',
                        null,
                        message
                    )
                )
            );
        }
    }]);

    return ReactARIAToolTipContent;
}(_react2.default.Component);

ReactARIAToolTipContent.displayName = 'ReactARIAToolTipContent';
ReactARIAToolTipContent.propTypes = {
    message: _react2.default.PropTypes.string.isRequired,
    direction: _react2.default.PropTypes.string.isRequired,
    active: _react2.default.PropTypes.bool.isRequired,
    bgcolor: _react2.default.PropTypes.string
};
exports.default = ReactARIAToolTipContent;