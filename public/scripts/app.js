'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Create components by extending React's parent class, followed by an obligatory call to render.
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        //bind this to methods if used with events
        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.chooseOption = _this.chooseOption.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        //define the default state
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'deleteOptions',
        value: function deleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'chooseOption',
        value: function chooseOption() {
            var randomNbr = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNbr];
            alert(option);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'Enter an option please.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Your option is already entered.';
            } else {
                this.setState(function (prevState) {
                    //use concat to avoid changing previous state. You can pass in the addition as itself or as an array with itself inside
                    return {
                        options: prevState.options.concat(option)
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of a computer.';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(AddOption, {
                    addOption: this.addOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    deleteOptions: this.deleteOptions
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    chooseOption: this.chooseOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.addOption = _this3.addOption.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    '1. Add an option.'
                ),
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { action: '', onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement('br', null),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

//Event handlers need help binding this, so use bind(this). Do it inline or at the class level with a class constructor.

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Your options are...'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                }),
                React.createElement(
                    'button',
                    { onClick: this.props.deleteOptions },
                    'Remove All'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var Action = function (_React$Component6) {
    _inherits(Action, _React$Component6);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.chooseOption,
                        disabled: !this.props.hasOptions
                    },
                    '2. What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
