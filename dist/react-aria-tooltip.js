'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n\n    &.active {\n        .ra-tooltip {\n            display: block;\n        }\n    }\n'], ['\n    position: relative;\n\n    &.active {\n        .ra-tooltip {\n            display: block;\n        }\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: absolute;\n    background: ', ';\n    transition: all .25s;\n    display: none;\n\n    p {\n        padding: .5rem 1rem;\n        margin: 0;\n        white-space: nowrap;\n        color: white;\n    }\n\n    // directions\n    &.top {\n        top: 0;\n        left: 50%;\n        transform: translate(-50%,-120%);\n\n        .ra-tooltip-message {\n            // down arrow\n            &:after {\n                top: 100%;\n            \tleft: 50%;\n            \tborder-top-color: ', ';\n            }\n        }\n    }\n\n    &.bottom {\n        bottom: 0;\n        left: 50%;\n        transform: translate(-50%,120%);\n\n        .ra-tooltip-message {\n            // up arrow\n            &:after {\n                top: -', 'px;\n            \tleft: 50%;\n            \tborder-bottom-color: ', ';\n            }\n        }\n    }\n\n    &.left {\n        top: 50%;\n        left: -', 'px;\n        transform: translate(-100%,-50%);\n\n        .ra-tooltip-message {\n            &:after {\n                // right arrow\n                top: 50%;\n            \tleft: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n            \tborder-left-color: ', ';\n            }\n        }\n    }\n\n    &.right {\n        top: 50%;\n        right: -', 'px;\n        transform: translate(100%,-50%);\n\n        .ra-tooltip-message  {\n            &:after {\n                // left arrow\n                top: 50%;\n            \tright: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n            \tborder-right-color: ', ';\n            }\n        }\n    }\n'], ['\n    position: absolute;\n    background: ', ';\n    transition: all .25s;\n    display: none;\n\n    p {\n        padding: .5rem 1rem;\n        margin: 0;\n        white-space: nowrap;\n        color: white;\n    }\n\n    // directions\n    &.top {\n        top: 0;\n        left: 50%;\n        transform: translate(-50%,-120%);\n\n        .ra-tooltip-message {\n            // down arrow\n            &:after {\n                top: 100%;\n            \tleft: 50%;\n            \tborder-top-color: ', ';\n            }\n        }\n    }\n\n    &.bottom {\n        bottom: 0;\n        left: 50%;\n        transform: translate(-50%,120%);\n\n        .ra-tooltip-message {\n            // up arrow\n            &:after {\n                top: -', 'px;\n            \tleft: 50%;\n            \tborder-bottom-color: ', ';\n            }\n        }\n    }\n\n    &.left {\n        top: 50%;\n        left: -', 'px;\n        transform: translate(-100%,-50%);\n\n        .ra-tooltip-message {\n            &:after {\n                // right arrow\n                top: 50%;\n            \tleft: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n            \tborder-left-color: ', ';\n            }\n        }\n    }\n\n    &.right {\n        top: 50%;\n        right: -', 'px;\n        transform: translate(100%,-50%);\n\n        .ra-tooltip-message  {\n            &:after {\n                // left arrow\n                top: 50%;\n            \tright: 100%;\n                margin-left: 0;\n                margin-top: -', 'px;\n            \tborder-right-color: ', ';\n            }\n        }\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: relative;\n\n    // default arrow indicator styles\n    &:after {\n        border: solid transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-width: ', 'px;\n        margin-left: -', 'px;\n    }\n}\n'], ['\n    position: relative;\n\n    // default arrow indicator styles\n    &:after {\n        border: solid transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-width: ', 'px;\n        margin-left: -', 'px;\n    }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var arrow_size = '5';
var tooltip_color = 'black';

var TooltipWrapper = _styledComponents2.default.div(_templateObject);

var Tooltip = _styledComponents2.default.div(_templateObject2, tooltip_color, tooltip_color, arrow_size * 2, tooltip_color, arrow_size, arrow_size, tooltip_color, arrow_size, arrow_size, tooltip_color);

var TooltipMessage = _styledComponents2.default.div(_templateObject3, arrow_size, arrow_size);

var tooltipIdCounter = 0;

var ReactARIAToolTip = function (_React$Component) {
    _inherits(ReactARIAToolTip, _React$Component);

    function ReactARIAToolTip(props, context) {
        _classCallCheck(this, ReactARIAToolTip);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactARIAToolTip).call(this, props, context));

        _this.state = {
            active: false,
            direction: props.direction,
            duration: props.duration,
            id: props.id
        };
        return _this;
    }

    _createClass(ReactARIAToolTip, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var id = this.props.id || this.uniqueID("ra-tooltip-");
            this.setState({ id: id });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.timer && clearTimeout(this.timer);
            this.timer = false;
        }
    }, {
        key: 'startTimer',
        value: function startTimer() {
            var _this2 = this;

            var duration = this.props.duration;

            this.timer = setTimeout(function () {
                return _this2.setState({ active: false });
            }, duration);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            clearTimeout(this.timer);
            this.setState({ active: true });
            this.startTimer();
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver() {
            this.setState({ active: true });
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            this.setState({ active: false });
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.handleClick();
        }

        // create unique id so multiple tooltips can be used in the same view

    }, {
        key: 'uniqueID',
        value: function uniqueID(prefix) {
            var id = ++tooltipIdCounter + '';
            return prefix ? prefix + id : id;
        }

        // adds tooltip 'aria-describedby' attribute to child element

    }, {
        key: 'addDescribedBy',
        value: function addDescribedBy(tooltipID) {
            return _react2.default.Children.map(this.props.children, function (e) {
                return _react2.default.cloneElement(e, {
                    "aria-describedby": tooltipID
                });
            });
        }
    }, {
        key: 'renderToolTip',
        value: function renderToolTip(tooltipID) {
            var tooltipClasses = this.props.direction + ' ra-tooltip';
            return _react2.default.createElement(
                Tooltip,
                { className: tooltipClasses, 'aria-hidden': this.state.active ? false : true },
                _react2.default.createElement(
                    TooltipMessage,
                    { className: 'ra-tooltip-message' },
                    _react2.default.createElement(
                        'p',
                        null,
                        this.props.message
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var containerClass = "ra-tooltip-wrapper";
            containerClass += this.state.active ? " active" : "";
            var tooltipID = this.state.id;

            if (this.props.eventType == 'hover') {
                return _react2.default.createElement(
                    TooltipWrapper,
                    {
                        onMouseOver: this.handleMouseOver.bind(this),
                        onMouseLeave: this.handleMouseLeave.bind(this),
                        role: 'tooltip',
                        id: tooltipID,
                        onFocus: this.handleFocus.bind(this),
                        className: containerClass
                    },
                    this.renderToolTip(tooltipID),
                    this.addDescribedBy(tooltipID)
                );
            }

            return _react2.default.createElement(
                TooltipWrapper,
                {
                    onClick: this.handleClick.bind(this),
                    role: 'tooltip',
                    className: containerClass
                },
                this.renderToolTip(tooltipID),
                this.addDescribedBy(tooltipID)
            );
        }
    }]);

    return ReactARIAToolTip;
}(_react2.default.Component);

ReactARIAToolTip.displayName = 'ReactARIAToolTip';
ReactARIAToolTip.propTypes = {
    message: _react2.default.PropTypes.string.isRequired,
    direction: _react2.default.PropTypes.string,
    duration: _react2.default.PropTypes.number,
    children: _react2.default.PropTypes.node,
    eventType: _react2.default.PropTypes.oneOf(['hover', 'click']),
    id: _react2.default.PropTypes.string
};
ReactARIAToolTip.defaultProps = {
    direction: "top",
    duration: 2000,
    eventType: "click"
};
exports.default = ReactARIAToolTip;