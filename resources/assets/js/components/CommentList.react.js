/**
 * Created by berkayk on 13/09/15.
 */
var React = require('react');
var CommentItem = require('./CommentItem.react');

var CommentList = React.createClass({
    render: function(){
        var items = this.props.comments.map(function(item, key){
            return <CommentItem key={key} comment={item.comment} />
        });
        return
            <ul>
            {items}
            </ul>
    }
});

module.exports = CommentList;