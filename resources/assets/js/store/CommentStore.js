var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Constants = require('../constants/Constants.js');

var CHANGE_EVENT = 'change';
var LOADING_EVENT = 'loading';

var _comments = [];

function fillComments(data){
    _comments = data;
    CommentStore.emitChange();
}

var CommentStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _comments;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    emitLoading: function(){
        this.emit(LOADING_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    addLoadingListener: function(callback){
        this.on(LOADING_EVENT, callback);
    },
    removeLoadingListener: function(callback){
        this.removeListener(LOADING_EVENT, callback);
    }

});

AppDispatcher.register(function(action) {
    var text;

    switch(action.actionType) {
        case Constants.ADD_COMMENT:
            text = action.text.trim();
            if (text !== '') {
                create(text);
                CommentStore.emitChange();
            }
            break;
        case Constants.FETCHING_COMMENTS:
            CommentStore.emitLoading();
            break;
        case Constants.COMMENTS_FETCHED:
            fillComments(action.data);
            break;
        default:
        // no op
    }
});

module.exports = CommentStore;