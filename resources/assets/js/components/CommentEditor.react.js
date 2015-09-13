/**
 * Created by berkayk on 13/09/15.
 */
var React = require('react');
var CommentActions = require('../actions/CommentActions');

var CommentEditor = React.createClass({
    getInitialState: function(){
      return {
          author: "Guest" + Math.floor((Math.random() * 1000) + 1),
          comment: ""
      }
    },
    reset: function(){
        this.setState({waitingResponse: false, comment: ""});
    },
    _onClickSend: function(){
        console.log("Sending " + this.state.comment + " as " + this.state.author);
        this.setState({waitingResponse: true});
        CommentActions.send(this.state.author, this.state.comment);
    },
    _onChangeAuthor: function(event){
        this.setState({author: event.target.value});
    },
    _onChangeComment: function(event){
        this.setState({comment: event.target.value});
    },
    render: function(){
        return <div>
            <h2 className="thin">Write Your Comment Here</h2>
        <div className="editor-wrapper">

            <div className="form-group">
                <label forName="author">Posting as: </label>
                <input id="author" ref="author" className="form-control inline" placeholder="Your name goes here..." readOnly={this.state.waitingResponse} type="text" value={this.state.author} onChange={this._onChangeAuthor} />
            </div>
            <div className="form-group">
                <label forName="comment">Comment: </label>
                <textarea id="comment" ref="comment" className="form-control inline" placeholder="Your comment here..." readOnly={this.state.waitingResponse}  value={this.state.comment} onChange={this._onChangeComment}/>
            </div>
            <a className="btn btn-primary" disabled={this.state.waitingResponse} onClick={this._onClickSend}>Send</a>
        </div>
    </div>
    }
});

module.exports = CommentEditor;