"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    width: inherit;\n\n    &.active {\n        .ra-tooltip {\n            display: block;\n        }\n    }\n"], ["\n    position: relative;\n    display: inline-block;\n    width: inherit;\n\n    &.active {\n        .ra-tooltip {\n            display: block;\n        }\n    }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tooltipContent = require("./tooltip-content");

var _tooltipContent2 = _interopRequireDefault(_tooltipContent);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tooltipIdCounter = 0;

var ReactARIAToolTip = function (_React$Component) {
    _inherits(ReactARIAToolTip, _React$Component);

    function ReactARIAToolTip(props, context) {
        _classCallCheck(this, ReactARIAToolTip);

        var _this = _possibleConstructorReturn(this, (ReactARIAToolTip.__proto__ || Object.getPrototypeOf(ReactARIAToolTip)).call(this, props, context));

        _this.state = {
            active: false,
            direction: props.direction,
            duration: props.duration,
            id: props.id
        };
        return _this;
    }

    _createClass(ReactARIAToolTip, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var id = this.props.id || this.uniqueID("ra-tooltip-");
            this.setState({ id: id });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.timer && clearTimeout(this.timer);
            this.timer = false;
        }
    }, {
        key: "startTimer",
        value: function startTimer() {
            var _this2 = this;

            var duration = this.props.duration;

            this.timer = setTimeout(function () {
                return _this2.setState({ active: false });
            }, duration);
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            clearTimeout(this.timer);
            this.setState({ active: true });
            this.startTimer();
        }
    }, {
        key: "handleMouseOver",
        value: function handleMouseOver() {
            this.setState({ active: true });
        }
    }, {
        key: "handleMouseLeave",
        value: function handleMouseLeave() {
            this.setState({ active: false });
        }
    }, {
        key: "handleFocus",
        value: function handleFocus() {
            this.handleClick();
        }

        // create unique id so multiple tooltips can be used in the same view

    }, {
        key: "uniqueID",
        value: function uniqueID(prefix) {
            var id = ++tooltipIdCounter + "";
            return prefix ? prefix + id : id;
        }

        // adds tooltip 'aria-describedby' attribute to child element

    }, {
        key: "addDescribedBy",
        value: function addDescribedBy(tooltipID) {
            return _react2.default.Children.map(this.props.children, function (e) {
                return _react2.default.cloneElement(e, {
                    "aria-describedby": tooltipID
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                message = _props.message,
                bgcolor = _props.bgcolor,
                direction = _props.direction,
                className = _props.className;
            var active = this.state.active;

            var containerClass = "ra-tooltip-wrapper " + className;
            containerClass += active ? " active" : "";
            var tooltipID = this.state.id;

            if (this.props.eventType == "hover") {
                return _react2.default.createElement(
                    "div",
                    {
                        onMouseOver: this.handleMouseOver.bind(this),
                        onMouseLeave: this.handleMouseLeave.bind(this),
                        role: "tooltip",
                        id: tooltipID,
                        onFocus: this.handleFocus.bind(this),
                        className: containerClass
                    },
                    _react2.default.createElement(_tooltipContent2.default, {
                        message: message,
                        bgcolor: bgcolor,
                        direction: direction,
                        active: active
                    }),
                    this.addDescribedBy(tooltipID)
                );
            }

            return _react2.default.createElement(
                "div",
                { onClick: this.handleClick.bind(this), role: "tooltip", className: containerClass },
                _react2.default.createElement(_tooltipContent2.default, {
                    message: message,
                    bgcolor: bgcolor,
                    direction: direction,
                    active: active
                }),
                this.addDescribedBy(tooltipID)
            );
        }
    }]);

    return ReactARIAToolTip;
}(_react2.default.Component);

ReactARIAToolTip.displayName = "ReactARIAToolTip";

ReactARIAToolTip.defaultProps = {
    direction: "top",
    duration: 2000,
    eventType: "click",
    bgcolor: "#000"
};

ReactARIAToolTip.propTypes = {
    message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.element]).isRequired,
    direction: _propTypes2.default.string,
    duration: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    children: _propTypes2.default.node,
    eventType: _propTypes2.default.oneOf(["hover", "click"]),
    id: _propTypes2.default.string,
    bgcolor: _propTypes2.default.string
};

exports.default = (0, _styledComponents2.default)(ReactARIAToolTip)(_templateObject);