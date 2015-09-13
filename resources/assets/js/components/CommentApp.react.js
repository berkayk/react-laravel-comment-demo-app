/**
 * Created by berkayk on 13/09/15.
 */
var React = require('react');
var CommentList = require('./CommentList.react.js');
var CommentEditor = require('./CommentEditor.react.js');
var CommentStore = require('../store/CommentStore.js');
var CommentActions = require('../actions/CommentActions.js');

function refresh(){
    return {
        comments: CommentStore.getAll(),
        waitingResponse: false
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
        CommentStore.addLoadingListener(this._onLoading);
        CommentActions.fetch();
    },
    render: function(){
        return <div className="row">
            <div className="col-sm-6">
                <CommentList comments={this.state.comments}/>
            </div>
            <div className="col-sm-6">
            <CommentEditor ref="editor"/>
            </div>
            </div>
    },
    _onCommentsChanged: function(){
        this.setState(refresh());
        this.refs.editor.reset();
    },
    _onLoading: function(){
    }
});

module.exports = CommentApp;