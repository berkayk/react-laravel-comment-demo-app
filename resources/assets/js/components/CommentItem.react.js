var React = require('react');

var CommentItem = React.createClass({
    render: function () {
        return <div className="comment-wrapper" key={this.props.key}>
            <div className="bold">{this.props.author}</div>
            <p>{this.props.comment}</p>
            <small className="gray">{this.props.sentAt}</small>
        </div>
    }
});

module.exports = CommentItem;