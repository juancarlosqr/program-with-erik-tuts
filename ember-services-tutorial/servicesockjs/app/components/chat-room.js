// app/components/chat-room.js
import Ember from 'ember';

export default Ember.Component.extend({
    message: '',

    setup: function() {
           this.get('sockjs').on('messageReceived',this, 'messageReceived');
    }.on('init'),

    messageReceived: function(message){
        $('#chat-content').val(function(i, text){
            return text + message+ '\n';
        });
        this.set('message',message);
    },
    actions: {
        enter: function(info,username) {
            var send = this.get('sockjs');
            send.sendInfo(username + ': ' + info);
        }
    }
});