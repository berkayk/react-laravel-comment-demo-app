/**
 * Created by berkayk on 13/09/15.
 */
var React = require('react');
var CommentList = require('./CommentList.react.js');
var CommentEditor = require('./CommentEditor.react.js');
var CommentStore = require('../store/CommentStore.js');
var CommentActions = require('../actions/CommentActions.js');

function getAll(){
    return {
        comments: CommentStore.getAll()
    };
}

var CommentApp = React.createClass({
    getInitialState: function(){
        return {
            comments: []
        }
    },
    componentDidMount: function(){
        console.log('App is mounted');
        CommentStore.addChangeListener(this._onCommentsChanged);
        CommentActions.fetch();
    },
    render: function(){
        return <div>
            <CommentList comments={this.state.comments}/>
            <CommentEditor />
            </div>
    },
    _onCommentsChanged: function(){
        this.setState(getAll());
    }
});

module.exports = CommentApp;