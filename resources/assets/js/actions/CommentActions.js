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
    create: function (text) {
        AppDispatcher.dispatch({
            actionType: Constants.ADD_COMMENT,
            text: text
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


