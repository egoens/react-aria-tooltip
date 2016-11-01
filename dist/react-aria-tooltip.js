'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tooltipIdCounter = 0;

var ReactARIAToolTip = (function (_React$Component) {
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
            var id = this.props.id || this.uniqueID("tooltip-");
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

            this.timer = setTimeout(function () {
                return _this2.setState({ active: false });
            }, this.props.duration);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.setState({ active: true });
            clearTimeout(this.timer);
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
        key: 'renderToolTipWrapper',
        value: function renderToolTipWrapper(tooltipID) {
            var wrapperClasses = (0, _classnames2.default)("react-aria-tooltip-wrapper", this.props.direction);

            return _react2.default.createElement(
                'div',
                { className: wrapperClasses, 'aria-hidden': this.state.active ? false : true },
                _react2.default.createElement(
                    'div',
                    { className: 'react-aria-tooltip-message' },
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
            var containerClasses = (0, _classnames2.default)("react-aria-tooltip", { "active": this.state.active });
            var tooltipID = this.state.id;

            if (this.props.eventType == 'hover') {
                return _react2.default.createElement(
                    'div',
                    { onMouseOver: this.handleMouseOver.bind(this),
                        onMouseLeave: this.handleMouseLeave.bind(this),
                        className: containerClasses,
                        role: 'tooltip',
                        id: tooltipID,
                        onFocus: this.handleFocus.bind(this) },
                    this.renderToolTipWrapper(tooltipID),
                    this.addDescribedBy(tooltipID)
                );
            }

            return _react2.default.createElement(
                'div',
                { onClick: this.handleClick.bind(this),
                    className: containerClasses,
                    role: 'tooltip' },
                this.renderToolTipWrapper(tooltipID),
                this.addDescribedBy(tooltipID)
            );
        }
    }]);

    return ReactARIAToolTip;
})(_react2.default.Component);

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
