var React = require('react');

var CommentItem = React.createClass({
    render: function () {
        return <li key={this.props.key}>{this.props.comment}</li>
    }
});

module.exports = CommentItem;