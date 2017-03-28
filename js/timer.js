'use strict';

var Timer = React.createClass({
    displayName: 'Timer',

    getInitialState: function getInitialState() {
        return {
            seconds: 0
        };
    },

    componentDidMount: function componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    },

    tick: function tick() {
        this.setState({ seconds: this.state.seconds + 1 });
    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.timer);
    },

    render: function render() {
        return React.createElement(
            'h4',
            null,
            ' Время в игре ',
            this.state.seconds,
            ' секунд '
        );
    }
});

ReactDOM.render(React.createElement(Timer, null), document.getElementById('mount-point'));
