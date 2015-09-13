/**
 * Created by berkayk on 13/09/15.
 */
var React = require('react');
var CommentItem = require('./CommentItem.react');

var CommentList = React.createClass({
    render: function(){
        var count = this.props.comments.length;
        if (count < 1)
            return <div>No comments yet. Be the first one to comment.</div>;

        var items = [];
        for (var i = 0; i < count; i++){
            var item = this.props.comments[i];
            items.push(<CommentItem key={i} comment={item.comment} author={item.author} sentAt={item.created_at}/>);
        }

        return <div>{items}</div>

    }
});

module.exports = CommentList;