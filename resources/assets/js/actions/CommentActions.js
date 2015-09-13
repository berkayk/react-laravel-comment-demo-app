/**
 * Created by berkayk on 13/09/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var $ = require('jquery');

var CommentActions = {

    /**
     * @param  {string} text
     */
    send: function (author, text) {
        console.log("Sending '" + text + "' as " + author);
        AppDispatcher.dispatch({
            actionType: Constants.ADDING_COMMENT
        });

        var comment = {author: author, comment: text, _token: Globals.token};
        $.post("api/comment", comment, function(result){
            console.log("Comment is sent results " + result);
            AppDispatcher.dispatch({
                actionType: Constants.COMMENT_SENT,
                data: result
            });
        });
    },
    fetch: function(){
        AppDispatcher.dispatch({
            actionType: Constants.FETCHING_COMMENTS
        });

        console.log("Fetching from actions");
        $.get("api/comment", function(result) {
            console.log("Fetched results " + result);
            AppDispatcher.dispatch({
                actionType: Constants.COMMENTS_FETCHED,
                data: result
            });
        }.bind(this));
    }
};

module.exports = CommentActions;


